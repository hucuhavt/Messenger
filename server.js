const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || "127.0.0.1";
const ROOT_DIR = __dirname;
const DATA_FILE = path.join(ROOT_DIR, "server-data.json");
const MAX_BODY_BYTES = 20 * 1024 * 1024;
const VOICE_WAVEFORM_POINTS_MAX = 128;
const AVATAR_COLORS = [
    "#1369ff",
    "#00b8b0",
    "#f97316",
    "#e63959",
    "#0f766e",
    "#7c3aed",
    "#0284c7",
    "#d97706"
];
const DEFAULT_USER_SETTINGS = {
    privacy: {
        hideOnlineStatus: false,
        hideLastSeen: false,
        readReceipts: true
    },
    power: {
        energySaving: false
    },
    appearance: {
        messageIncomingColor: "",
        messageOutgoingColor: "",
        messageTextColor: "",
        textSize: 15,
        wallpaperMode: "none",
        wallpaperPreset: "sea",
        wallpaperColor: "#dbeafe",
        wallpaperImage: ""
    }
};
const WALLPAPER_PRESET_IDS = new Set(["sea", "sunset", "forest", "violet", "midnight"]);

let db = loadDatabase();

const MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8"
};

const STATIC_ROUTES = {
    "/": "index.html",
    "/index.html": "index.html",
    "/styles.css": "styles.css",
    "/script.js": "script.js"
};

const server = http.createServer(async (req, res) => {
    try {
        const requestUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
        const pathname = requestUrl.pathname;

        if (pathname.startsWith("/api/")) {
            await handleApiRequest(req, res, pathname);
            return;
        }

        await serveStaticFile(req, res, pathname);
    } catch (error) {
        sendJson(res, 500, { error: "Internal server error" });
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Pulse Messenger server is running at http://${HOST}:${PORT}`);
});

async function handleApiRequest(req, res, pathname) {
    try {
        if (req.method === "GET" && pathname === "/api/health") {
            sendJson(res, 200, { ok: true, revision: db.revision, now: Date.now() });
            return;
        }

        if (req.method === "GET" && pathname === "/api/state") {
            sendJson(res, 200, {
                version: 1,
                revision: db.revision,
                users: db.users,
                chats: db.chats
            });
            return;
        }

        if (req.method === "POST" && pathname === "/api/state") {
            const payload = await readJsonBody(req);
            const normalized = normalizeDatabase(payload || {});
            db.users = normalized.users;
            db.chats = normalized.chats;
            bumpRevision();
            sendJson(res, 200, { ok: true, revision: db.revision });
            return;
        }

        if (req.method === "POST" && pathname === "/api/messages/send") {
            const payload = await readJsonBody(req);
            const chatId = safeString(payload.chatId, 120);
            const senderId = safeString(payload.senderId, 120);
            const text = safeString(payload.text, 4000).trim();
            const attachments = sanitizeAttachments(payload.attachments);

            const chat = db.chats.find((item) => item.id === chatId);
            if (!chat) {
                sendJson(res, 404, { error: "Chat not found" });
                return;
            }
            if (!chat.participants.includes(senderId)) {
                sendJson(res, 403, { error: "Sender is not a chat participant" });
                return;
            }
            if (Array.isArray(chat.blockedBy) && chat.blockedBy.includes(senderId)) {
                sendJson(res, 403, { error: "Chat is blocked for sender" });
                return;
            }
            if (!text && attachments.length === 0) {
                sendJson(res, 400, { error: "Message is empty" });
                return;
            }

            const message = {
                id: uid("m"),
                senderId,
                text,
                attachments,
                reactions: {},
                createdAt: Date.now(),
                pinned: false,
                editedAt: 0
            };
            chat.messages.push(message);
            chat.updatedAt = Date.now();
            chat.unreadCount = 0;

            bumpRevision();
            sendJson(res, 200, { ok: true, revision: db.revision, message });
            return;
        }

        if (req.method === "POST" && pathname === "/api/messages/reaction") {
            const payload = await readJsonBody(req);
            const chatId = safeString(payload.chatId, 120);
            const messageId = safeString(payload.messageId, 120);
            const emoji = safeString(payload.emoji, 20);
            const userId = safeString(payload.userId, 120);

            const chat = db.chats.find((item) => item.id === chatId);
            if (!chat) {
                sendJson(res, 404, { error: "Chat not found" });
                return;
            }
            const message = chat.messages.find((item) => item.id === messageId);
            if (!message) {
                sendJson(res, 404, { error: "Message not found" });
                return;
            }
            if (!message.reactions || typeof message.reactions !== "object") {
                message.reactions = {};
            }
            if (!Array.isArray(message.reactions[emoji])) {
                message.reactions[emoji] = [];
            }

            if (message.reactions[emoji].includes(userId)) {
                message.reactions[emoji] = message.reactions[emoji].filter(
                    (item) => item !== userId
                );
            } else {
                message.reactions[emoji].push(userId);
            }

            bumpRevision();
            sendJson(res, 200, {
                ok: true,
                revision: db.revision,
                reactions: message.reactions
            });
            return;
        }

        if (req.method === "POST" && pathname === "/api/messages/update") {
            const payload = await readJsonBody(req);
            const chatId = safeString(payload.chatId, 120);
            const messageId = safeString(payload.messageId, 120);
            const editorId = safeString(payload.editorId, 120);
            const text = safeString(payload.text, 4000).trim();

            const chat = db.chats.find((item) => item.id === chatId);
            if (!chat) {
                sendJson(res, 404, { error: "Chat not found" });
                return;
            }
            if (!chat.participants.includes(editorId)) {
                sendJson(res, 403, { error: "Editor is not a chat participant" });
                return;
            }
            const message = chat.messages.find((item) => item.id === messageId);
            if (!message) {
                sendJson(res, 404, { error: "Message not found" });
                return;
            }
            if (message.senderId !== editorId) {
                sendJson(res, 403, { error: "Only message author can edit this message" });
                return;
            }
            if (!text && (!Array.isArray(message.attachments) || message.attachments.length === 0)) {
                sendJson(res, 400, { error: "Message is empty" });
                return;
            }

            message.text = text;
            message.editedAt = Date.now();
            chat.updatedAt = Date.now();
            bumpRevision();
            sendJson(res, 200, { ok: true, revision: db.revision, message });
            return;
        }

        if (req.method === "POST" && pathname === "/api/messages/delete") {
            const payload = await readJsonBody(req);
            const chatId = safeString(payload.chatId, 120);
            const messageId = safeString(payload.messageId, 120);
            const userId = safeString(payload.userId, 120);

            const chat = db.chats.find((item) => item.id === chatId);
            if (!chat) {
                sendJson(res, 404, { error: "Chat not found" });
                return;
            }
            if (!chat.participants.includes(userId)) {
                sendJson(res, 403, { error: "User is not a chat participant" });
                return;
            }
            const messageIndex = chat.messages.findIndex((item) => item.id === messageId);
            if (messageIndex < 0) {
                sendJson(res, 404, { error: "Message not found" });
                return;
            }
            const message = chat.messages[messageIndex];
            const isGroupAdmin =
                chat.type === "group" &&
                Array.isArray(chat.adminIds) &&
                chat.adminIds.includes(userId);
            if (message.senderId !== userId && !isGroupAdmin) {
                sendJson(res, 403, { error: "No permission to delete this message" });
                return;
            }

            chat.messages.splice(messageIndex, 1);
            chat.updatedAt = Date.now();
            bumpRevision();
            sendJson(res, 200, { ok: true, revision: db.revision });
            return;
        }

        if (req.method === "POST" && pathname === "/api/messages/pin") {
            const payload = await readJsonBody(req);
            const chatId = safeString(payload.chatId, 120);
            const messageId = safeString(payload.messageId, 120);
            const userId = safeString(payload.userId, 120);
            const pinned = Boolean(payload.pinned);

            const chat = db.chats.find((item) => item.id === chatId);
            if (!chat) {
                sendJson(res, 404, { error: "Chat not found" });
                return;
            }
            if (!chat.participants.includes(userId)) {
                sendJson(res, 403, { error: "User is not a chat participant" });
                return;
            }
            const message = chat.messages.find((item) => item.id === messageId);
            if (!message) {
                sendJson(res, 404, { error: "Message not found" });
                return;
            }

            message.pinned = pinned;
            chat.updatedAt = Date.now();
            bumpRevision();
            sendJson(res, 200, { ok: true, revision: db.revision, pinned });
            return;
        }

        if (req.method === "POST" && pathname === "/api/messages/auto-reply") {
            const payload = await readJsonBody(req);
            const chatId = safeString(payload.chatId, 120);
            const sourceText = safeString(payload.sourceText, 4000);
            const excludeUserId = safeString(payload.excludeUserId, 120);
            const isChatActive = Boolean(payload.isChatActive);

            const chat = db.chats.find((item) => item.id === chatId);
            if (!chat) {
                sendJson(res, 404, { error: "Chat not found" });
                return;
            }

            const senderId = pickAutoReplySender(chat, excludeUserId);
            if (!senderId) {
                sendJson(res, 200, { ok: true, revision: db.revision, message: null });
                return;
            }

            const message = {
                id: uid("m"),
                senderId,
                text: generateReply(sourceText),
                attachments: [],
                reactions: {},
                createdAt: Date.now(),
                pinned: false,
                editedAt: 0
            };
            chat.messages.push(message);
            chat.updatedAt = Date.now();
            chat.unreadCount = isChatActive ? 0 : Number(chat.unreadCount || 0) + 1;

            bumpRevision();
            sendJson(res, 200, { ok: true, revision: db.revision, message });
            return;
        }

        sendJson(res, 404, { error: "API route not found" });
    } catch (error) {
        if (error.message === "Invalid JSON payload") {
            sendJson(res, 400, { error: error.message });
            return;
        }
        if (error.message === "Request body is too large") {
            sendJson(res, 413, { error: error.message });
            return;
        }
        sendJson(res, 500, { error: "API internal error" });
    }
}

async function serveStaticFile(req, res, pathname) {
    if (pathname === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
    }

    const fileName = STATIC_ROUTES[pathname];
    if (!fileName) {
        sendText(res, 404, "Not found", "text/plain; charset=utf-8");
        return;
    }

    const fullPath = path.join(ROOT_DIR, fileName);
    try {
        const fileContent = await fs.promises.readFile(fullPath);
        const ext = path.extname(fullPath);
        const contentType = MIME_TYPES[ext] || "application/octet-stream";
        res.writeHead(200, {
            "Content-Type": contentType,
            "Cache-Control": "no-store"
        });
        if (req.method === "HEAD") {
            res.end();
            return;
        }
        res.end(fileContent);
    } catch (error) {
        sendText(res, 500, "Failed to read file", "text/plain; charset=utf-8");
    }
}

function sendJson(res, statusCode, payload) {
    const body = JSON.stringify(payload);
    res.writeHead(statusCode, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
    });
    res.end(body);
}

function sendText(res, statusCode, text, contentType) {
    res.writeHead(statusCode, {
        "Content-Type": contentType,
        "Cache-Control": "no-store"
    });
    res.end(text);
}

function readJsonBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";
        let size = 0;

        req.on("data", (chunk) => {
            size += chunk.length;
            if (size > MAX_BODY_BYTES) {
                reject(new Error("Request body is too large"));
                req.destroy();
                return;
            }
            body += chunk.toString("utf8");
        });

        req.on("end", () => {
            if (!body) {
                resolve({});
                return;
            }
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(new Error("Invalid JSON payload"));
            }
        });

        req.on("error", reject);
    });
}

function loadDatabase() {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            const initial = normalizeDatabase({ users: [], chats: [] });
            fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2));
            return initial;
        }

        const raw = fs.readFileSync(DATA_FILE, "utf8");
        const parsed = JSON.parse(raw);
        const normalized = normalizeDatabase(parsed);
        if (typeof normalized.revision !== "number") {
            normalized.revision = 0;
        }
        return normalized;
    } catch (error) {
        const fallback = normalizeDatabase({ users: [], chats: [] });
        fallback.revision = 0;
        return fallback;
    }
}

function normalizeDatabase(raw) {
    const users = Array.isArray(raw.users) ? raw.users : [];
    const chats = Array.isArray(raw.chats) ? raw.chats : [];

    return {
        version: 1,
        revision: Number(raw.revision || 0),
        users: users.map((user, index) => ({
            id: safeString(user.id, 120) || uid("u"),
            phone: safeString(user.phone, 32),
            name: safeString(user.name, 120) || `User ${index + 1}`,
            username: safeString(user.username, 64) || `user_${index + 1}`,
            about: safeString(user.about, 220),
            avatar: safeString(user.avatar, 500000),
            color: safeString(user.color, 20) || pickColor(index + 1),
            online: Boolean(user.online),
            lastSeen: Number(user.lastSeen || Date.now()),
            settings: sanitizeUserSettings(user.settings)
        })),
        chats: chats.map((chat, index) => ({
            id: safeString(chat.id, 120) || uid("c"),
            type: chat.type === "group" ? "group" : "private",
            title: safeString(chat.title, 180),
            description: safeString(chat.description, 300),
            color: safeString(chat.color, 20) || pickColor(index + 3),
            participants: uniqueArray(
                Array.isArray(chat.participants) ? chat.participants : []
            )
                .map((participantId) => safeString(participantId, 120))
                .filter(Boolean),
            adminIds: uniqueArray(Array.isArray(chat.adminIds) ? chat.adminIds : [])
                .map((adminId) => safeString(adminId, 120))
                .filter(Boolean),
            messages: Array.isArray(chat.messages)
                ? chat.messages.map((message) => ({
                  id: safeString(message.id, 120) || uid("m"),
                  senderId: safeString(message.senderId, 120),
                  text: safeString(message.text, 4000),
                  attachments: sanitizeAttachments(message.attachments),
                  reactions: sanitizeReactions(message.reactions),
                  createdAt: Number(message.createdAt || Date.now()),
                  pinned: Boolean(message.pinned),
                  editedAt: Number(message.editedAt || 0)
              }))
                : [],
            pinned: Boolean(chat.pinned),
            muted: Boolean(chat.muted),
            archived: Boolean(chat.archived),
            blockedBy: uniqueArray(Array.isArray(chat.blockedBy) ? chat.blockedBy : [])
                .map((userId) => safeString(userId, 120))
                .filter(Boolean),
            unreadCount: Number(chat.unreadCount || 0),
            updatedAt: Number(chat.updatedAt || Date.now())
        }))
    };
}

function bumpRevision() {
    db.revision = Number(db.revision || 0) + 1;
    fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2));
}

function sanitizeAttachments(input) {
    if (!Array.isArray(input)) {
        return [];
    }
    return input.slice(0, 8).map((item, index) => {
        const id = safeString(item && item.id, 120) || uid(`f${index}`);
        const name = safeString(item && item.name, 260) || "file";
        const rawSize = Number((item && item.size) || 0);
        const size = Number.isFinite(rawSize) && rawSize > 0 ? rawSize : 0;
        const kind = safeString(item && item.kind, 20) === "voice" ? "voice" : "file";
        if (kind !== "voice") {
            return { id, name, size };
        }

        const mimeType = safeString(item && item.mimeType, 80).toLowerCase();
        let audioData = safeString(item && item.audioData, 1000000);
        if (!audioData.startsWith("data:audio/")) {
            audioData = "";
        }
        if (!audioData) {
            return { id, name, size };
        }
        const rawDuration = Number((item && item.durationSec) || 0);
        const durationSec = Number.isFinite(rawDuration)
            ? Math.min(600, Math.max(0.001, rawDuration))
            : 0.001;
        const waveform = sanitizeVoiceWaveform(item && item.waveform);

        return {
            id,
            kind: "voice",
            name,
            size,
            mimeType: mimeType || "audio/webm",
            durationSec,
            audioData,
            waveform
        };
    });
}

function sanitizeVoiceWaveform(input) {
    if (!Array.isArray(input) || input.length === 0) {
        return [];
    }
    return input
        .slice(0, VOICE_WAVEFORM_POINTS_MAX)
        .map((value) => Number(value))
        .filter((value) => Number.isFinite(value) && value > 0)
        .map((value) => Math.min(1, Math.max(0.001, Math.round(value * 1000) / 1000)));
}

function sanitizeReactions(input) {
    if (!input || typeof input !== "object") {
        return {};
    }

    const normalized = {};
    for (const [emoji, users] of Object.entries(input)) {
        const safeEmoji = safeString(emoji, 20);
        normalized[safeEmoji] = uniqueArray(Array.isArray(users) ? users : [])
            .map((userId) => safeString(userId, 120))
            .filter(Boolean);
    }
    return normalized;
}

function sanitizeUserSettings(input) {
    const raw = input && typeof input === "object" ? input : {};
    const privacy = raw.privacy && typeof raw.privacy === "object" ? raw.privacy : {};
    const power = raw.power && typeof raw.power === "object" ? raw.power : {};
    const appearance =
        raw.appearance && typeof raw.appearance === "object" ? raw.appearance : {};

    const wallpaperMode = safeString(appearance.wallpaperMode, 12);
    const normalizedWallpaperMode = ["none", "preset", "color", "image"].includes(
        wallpaperMode
    )
        ? wallpaperMode
        : DEFAULT_USER_SETTINGS.appearance.wallpaperMode;
    const wallpaperPreset = safeString(
        appearance.wallpaperPreset,
        40
    );
    const normalizedWallpaperPreset = WALLPAPER_PRESET_IDS.has(wallpaperPreset)
        ? wallpaperPreset
        : DEFAULT_USER_SETTINGS.appearance.wallpaperPreset;
    const wallpaperImage = safeString(appearance.wallpaperImage, 600000);

    return {
        privacy: {
            hideOnlineStatus: Boolean(privacy.hideOnlineStatus),
            hideLastSeen: Boolean(privacy.hideLastSeen),
            readReceipts:
                typeof privacy.readReceipts === "boolean"
                    ? privacy.readReceipts
                    : DEFAULT_USER_SETTINGS.privacy.readReceipts
        },
        power: {
            energySaving: Boolean(power.energySaving)
        },
        appearance: {
            messageIncomingColor: normalizeHexColor(appearance.messageIncomingColor),
            messageOutgoingColor: normalizeHexColor(appearance.messageOutgoingColor),
            messageTextColor: normalizeHexColor(appearance.messageTextColor),
            textSize: clampNumber(
                Number(appearance.textSize || DEFAULT_USER_SETTINGS.appearance.textSize),
                13,
                22
            ),
            wallpaperMode:
                normalizedWallpaperMode === "image" && !wallpaperImage
                    ? "none"
                    : normalizedWallpaperMode,
            wallpaperPreset: normalizedWallpaperPreset,
            wallpaperColor: normalizeHexColor(
                appearance.wallpaperColor,
                DEFAULT_USER_SETTINGS.appearance.wallpaperColor
            ),
            wallpaperImage
        }
    };
}

function normalizeHexColor(value, fallback = "") {
    const text = safeString(value, 20).trim().toLowerCase();
    if (/^#[0-9a-f]{6}$/.test(text)) {
        return text;
    }
    return fallback;
}

function clampNumber(value, min, max) {
    if (!Number.isFinite(value)) {
        return min;
    }
    return Math.min(max, Math.max(min, Math.round(value)));
}

function pickAutoReplySender(chat, excludeUserId) {
    const participants = Array.isArray(chat.participants) ? chat.participants : [];
    if (participants.length === 0) {
        return null;
    }

    if (chat.type === "private") {
        return (
            participants.find((participantId) => participantId !== excludeUserId) || null
        );
    }

    if (Math.random() > 0.65) {
        return null;
    }

    const candidates = participants.filter(
        (participantId) => participantId !== excludeUserId
    );
    if (candidates.length === 0) {
        return null;
    }

    return candidates[Math.floor(Math.random() * candidates.length)];
}

function generateReply(text) {
    const base = [
        "Отлично, принял. Давай так и сделаем.",
        "Супер, тогда я подключусь чуть позже.",
        "Понял, напишу апдейт через пару минут.",
        "Да, идея хорошая. Можем запланировать созвон.",
        "Ок, выглядит сильно. Погнали дальше."
    ];

    if (text && text.includes("?")) {
        return "Хороший вопрос. Сейчас проверю и отвечу точнее.";
    }
    return base[Math.floor(Math.random() * base.length)];
}

function safeString(value, maxLength) {
    if (value === null || value === undefined) {
        return "";
    }
    return String(value).slice(0, maxLength);
}

function uniqueArray(items) {
    return Array.from(new Set(items));
}

function pickColor(seed) {
    return AVATAR_COLORS[Math.abs(Number(seed) || 0) % AVATAR_COLORS.length];
}

function uid(prefix) {
    return `${prefix}_${Date.now().toString(36)}_${Math.random()
        .toString(36)
        .slice(2, 8)}`;
}
