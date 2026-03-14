const SESSION_KEY = "pulse_messenger_session_v1";
const SESSION_TEMP_KEY = "pulse_messenger_session_temp_v1";
const SESSION_REMEMBER_KEY = "pulse_messenger_remember_session_v1";
const UI_STATE_KEY = "pulse_messenger_ui_state_v1";
const THEME_KEY = "pulse_messenger_theme_v1";
const COUNTRY_CACHE_KEY = "pulse_messenger_country_options_v2";
const DEMO_CODE = "1111";
const COUNTRY_PRIMARY_CODE_OVERRIDES = {
    AE: "+971",
    AL: "+355",
    AM: "+374",
    AO: "+244",
    AR: "+54",
    AT: "+43",
    AU: "+61",
    AZ: "+994",
    BE: "+32",
    BG: "+359",
    BR: "+55",
    BY: "+375",
    CA: "+1",
    CH: "+41",
    CN: "+86",
    CY: "+357",
    CZ: "+420",
    DE: "+49",
    DK: "+45",
    DO: "+1809",
    DZ: "+213",
    EE: "+372",
    EG: "+20",
    ES: "+34",
    FI: "+358",
    FR: "+33",
    GB: "+44",
    GE: "+995",
    GR: "+30",
    HR: "+385",
    HU: "+36",
    IE: "+353",
    IL: "+972",
    IN: "+91",
    IR: "+98",
    IT: "+39",
    JO: "+962",
    JP: "+81",
    KZ: "+7",
    KE: "+254",
    MX: "+52",
    MY: "+60",
    NG: "+234",
    NL: "+31",
    NO: "+47",
    NZ: "+64",
    PH: "+63",
    PK: "+92",
    PL: "+48",
    PT: "+351",
    QA: "+974",
    RU: "+7",
    SA: "+966",
    SE: "+46",
    SG: "+65",
    TH: "+66",
    TR: "+90",
    UA: "+380",
    US: "+1",
    ZA: "+27"
};
const COUNTRY_LOCAL_PHONE_LENGTH_RULES = {
    AE: { min: 9, max: 9 },
    AL: { min: 9, max: 9 },
    AM: { min: 8, max: 9 },
    AO: { min: 9, max: 9 },
    AR: { min: 10, max: 10 },
    AT: { min: 10, max: 10 },
    AU: { min: 9, max: 9 },
    AZ: { min: 9, max: 9 },
    BE: { min: 9, max: 9 },
    BG: { min: 8, max: 9 },
    BR: { min: 10, max: 11 },
    BY: { min: 9, max: 9 },
    CA: { min: 10, max: 10 },
    CH: { min: 9, max: 9 },
    CN: { min: 11, max: 11 },
    CY: { min: 8, max: 8 },
    CZ: { min: 9, max: 9 },
    DE: { min: 10, max: 11 },
    DK: { min: 8, max: 8 },
    DO: { min: 10, max: 10 },
    DZ: { min: 9, max: 9 },
    EE: { min: 7, max: 8 },
    EG: { min: 10, max: 10 },
    ES: { min: 9, max: 9 },
    FI: { min: 9, max: 10 },
    FR: { min: 9, max: 9 },
    GB: { min: 10, max: 10 },
    GE: { min: 9, max: 9 },
    GR: { min: 10, max: 10 },
    HR: { min: 9, max: 9 },
    HU: { min: 9, max: 9 },
    IE: { min: 9, max: 10 },
    IL: { min: 9, max: 9 },
    IN: { min: 10, max: 10 },
    IR: { min: 10, max: 11 },
    IT: { min: 9, max: 10 },
    JO: { min: 9, max: 9 },
    JP: { min: 10, max: 10 },
    KE: { min: 9, max: 9 },
    KZ: { min: 10, max: 10 },
    MX: { min: 10, max: 10 },
    MY: { min: 9, max: 10 },
    NG: { min: 10, max: 10 },
    NL: { min: 9, max: 9 },
    NO: { min: 8, max: 8 },
    NZ: { min: 8, max: 9 },
    PH: { min: 10, max: 10 },
    PK: { min: 10, max: 10 },
    PL: { min: 9, max: 9 },
    PT: { min: 9, max: 9 },
    QA: { min: 8, max: 8 },
    RU: { min: 10, max: 10 },
    SA: { min: 9, max: 9 },
    SE: { min: 9, max: 9 },
    SG: { min: 8, max: 8 },
    TH: { min: 9, max: 10 },
    TR: { min: 10, max: 10 },
    UA: { min: 9, max: 9 },
    US: { min: 10, max: 10 },
    ZA: { min: 9, max: 10 }
};
const POPULAR_REACTION_SET = [
    "👍",
    "❤️",
    "🔥",
    "😂",
    "👏",
    "🎉",
    "😮",
    "😢",
    "🙏",
    "😎"
];
const REACTION_GROUPS = [
    {
        title: "Часто используемые",
        items: ["👍", "❤️", "🔥", "😂", "👏", "🎉", "😮", "😢", "🙏", "😎"]
    },
    {
        title: "Смайлы",
        items: [
            "😀",
            "😁",
            "😄",
            "😅",
            "😊",
            "😉",
            "😍",
            "😘",
            "😋",
            "🤗",
            "🤔",
            "🤩",
            "😇",
            "😌",
            "😴"
        ]
    },
    {
        title: "Жесты и люди",
        items: [
            "👌",
            "✌️",
            "🤝",
            "👊",
            "🙌",
            "🫶",
            "🤟",
            "💪",
            "👀",
            "🫡",
            "🤞",
            "🙋",
            "🤦",
            "🙅",
            "🤷"
        ]
    },
    {
        title: "Сердца и символы",
        items: [
            "💙",
            "💚",
            "💛",
            "🧡",
            "💜",
            "🖤",
            "🤍",
            "🤎",
            "💯",
            "✅",
            "❗",
            "❓",
            "💬",
            "✨",
            "⭐"
        ]
    },
    {
        title: "Праздники и события",
        items: [
            "🎊",
            "🥳",
            "🏆",
            "🥇",
            "🎁",
            "🎂",
            "🍾",
            "🥂",
            "🎯",
            "🚀",
            "🌈",
            "⚡",
            "🌟",
            "🎵",
            "📌"
        ]
    }
];
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
const SETTINGS_TEXT_SIZE_MIN = 13;
const SETTINGS_TEXT_SIZE_MAX = 22;
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
const WALLPAPER_PRESETS = [
    {
        id: "sea",
        label: "Морской градиент",
        css: "linear-gradient(160deg, #dbeafe 0%, #ccfbf1 52%, #f0f9ff 100%)"
    },
    {
        id: "sunset",
        label: "Закат",
        css: "linear-gradient(160deg, #ffe4d6 0%, #ffd6eb 52%, #fff8dc 100%)"
    },
    {
        id: "forest",
        label: "Лес",
        css: "linear-gradient(160deg, #dcfce7 0%, #bbf7d0 48%, #d1fae5 100%)"
    },
    {
        id: "violet",
        label: "Фиолетовый",
        css: "linear-gradient(160deg, #ede9fe 0%, #ddd6fe 52%, #e0e7ff 100%)"
    },
    {
        id: "midnight",
        label: "Ночной",
        css: "linear-gradient(160deg, #111827 0%, #1f2937 50%, #0f172a 100%)"
    }
];
const WALLPAPER_PRESET_MAP = Object.fromEntries(
    WALLPAPER_PRESETS.map((item) => [item.id, item.css])
);
const FALLBACK_COUNTRY_OPTIONS = [
    { iso: "AE", name: "United Arab Emirates", dialCodes: ["+971"] },
    { iso: "AL", name: "Albania", dialCodes: ["+355"] },
    { iso: "AM", name: "Armenia", dialCodes: ["+374"] },
    { iso: "AO", name: "Angola", dialCodes: ["+244"] },
    { iso: "AR", name: "Argentina", dialCodes: ["+54"] },
    { iso: "AT", name: "Austria", dialCodes: ["+43"] },
    { iso: "AU", name: "Australia", dialCodes: ["+61"] },
    { iso: "AZ", name: "Azerbaijan", dialCodes: ["+994"] },
    { iso: "BE", name: "Belgium", dialCodes: ["+32"] },
    { iso: "BG", name: "Bulgaria", dialCodes: ["+359"] },
    { iso: "BR", name: "Brazil", dialCodes: ["+55"] },
    { iso: "BY", name: "Belarus", dialCodes: ["+375"] },
    { iso: "CA", name: "Canada", dialCodes: ["+1"] },
    { iso: "CH", name: "Switzerland", dialCodes: ["+41"] },
    { iso: "CN", name: "China", dialCodes: ["+86"] },
    { iso: "CY", name: "Cyprus", dialCodes: ["+357"] },
    { iso: "CZ", name: "Czechia", dialCodes: ["+420"] },
    { iso: "DE", name: "Germany", dialCodes: ["+49"] },
    { iso: "DK", name: "Denmark", dialCodes: ["+45"] },
    { iso: "DO", name: "Dominican Republic", dialCodes: ["+1809"] },
    { iso: "DZ", name: "Algeria", dialCodes: ["+213"] },
    { iso: "EE", name: "Estonia", dialCodes: ["+372"] },
    { iso: "EG", name: "Egypt", dialCodes: ["+20"] },
    { iso: "ES", name: "Spain", dialCodes: ["+34"] },
    { iso: "FI", name: "Finland", dialCodes: ["+358"] },
    { iso: "FR", name: "France", dialCodes: ["+33"] },
    { iso: "GB", name: "United Kingdom", dialCodes: ["+44"] },
    { iso: "GE", name: "Georgia", dialCodes: ["+995"] },
    { iso: "GR", name: "Greece", dialCodes: ["+30"] },
    { iso: "HR", name: "Croatia", dialCodes: ["+385"] },
    { iso: "HU", name: "Hungary", dialCodes: ["+36"] },
    { iso: "IE", name: "Ireland", dialCodes: ["+353"] },
    { iso: "IL", name: "Israel", dialCodes: ["+972"] },
    { iso: "IN", name: "India", dialCodes: ["+91"] },
    { iso: "IR", name: "Iran", dialCodes: ["+98"] },
    { iso: "IT", name: "Italy", dialCodes: ["+39"] },
    { iso: "JO", name: "Jordan", dialCodes: ["+962"] },
    { iso: "JP", name: "Japan", dialCodes: ["+81"] },
    { iso: "KE", name: "Kenya", dialCodes: ["+254"] },
    { iso: "KZ", name: "Kazakhstan", dialCodes: ["+7"] },
    { iso: "MX", name: "Mexico", dialCodes: ["+52"] },
    { iso: "MY", name: "Malaysia", dialCodes: ["+60"] },
    { iso: "NG", name: "Nigeria", dialCodes: ["+234"] },
    { iso: "NL", name: "Netherlands", dialCodes: ["+31"] },
    { iso: "NO", name: "Norway", dialCodes: ["+47"] },
    { iso: "NZ", name: "New Zealand", dialCodes: ["+64"] },
    { iso: "PH", name: "Philippines", dialCodes: ["+63"] },
    { iso: "PK", name: "Pakistan", dialCodes: ["+92"] },
    { iso: "PL", name: "Poland", dialCodes: ["+48"] },
    { iso: "PT", name: "Portugal", dialCodes: ["+351"] },
    { iso: "QA", name: "Qatar", dialCodes: ["+974"] },
    { iso: "RU", name: "Russia", dialCodes: ["+7"] },
    { iso: "SA", name: "Saudi Arabia", dialCodes: ["+966"] },
    { iso: "SE", name: "Sweden", dialCodes: ["+46"] },
    { iso: "SG", name: "Singapore", dialCodes: ["+65"] },
    { iso: "TH", name: "Thailand", dialCodes: ["+66"] },
    { iso: "TR", name: "Turkey", dialCodes: ["+90"] },
    { iso: "UA", name: "Ukraine", dialCodes: ["+380"] },
    { iso: "US", name: "United States", dialCodes: ["+1"] },
    { iso: "ZA", name: "South Africa", dialCodes: ["+27"] }
];

let state = loadState();
const authDraft = {
    phone: "",
    code: DEMO_CODE,
    firstName: "",
    lastName: "",
    username: "",
    countryIso: ""
};
const runtime = {
    chatQuery: "",
    sidebarSection: "chats",
    sidebarQuery: "",
    messageQuery: "",
    pendingAttachments: [],
    typingByChat: {},
    toastTimer: null,
    pushPromise: Promise.resolve(),
    pollTimer: null,
    serverRevision: 0,
    syncInFlight: false,
    pushInFlight: false,
    pollIntervalMs: 0,
    countryOptions: [],
    keepSignedIn: true,
    activeCall: null,
    callTimerId: null,
    callConnectTimerId: null,
    messageMenu: null,
    messageLongPress: null,
    editingMessage: null,
    forwardDraft: null,
    settingsAvatarDraft: null,
    avatarCrop: null,
    settingsAutoSaveTimer: null,
    lastUiStateSnapshot: ""
};

const el = {};

document.addEventListener("DOMContentLoaded", () => {
    init().catch((error) => {
        console.error(error);
        showStartupFallback();
    });
});

async function init() {
    cacheElements();
    initializeTheme();
    bindEvents();
    await setupCountrySelector();
    restoreSession();
    await syncFromServer({ silent: true });
    startPolling();

    if (getCurrentUser()) {
        enterApp();
    } else {
        state.session.userId = null;
        persistSession();
        enterAuth();
    }
}

function showStartupFallback() {
    if (!el.authScreen) {
        return;
    }
    enterAuth();
    showToast("Сервер недоступен. Запустите `node server.js`.");
}

function cacheElements() {
    el.authScreen = document.getElementById("authScreen");
    el.appScreen = document.getElementById("appScreen");

    el.phoneForm = document.getElementById("phoneForm");
    el.codeForm = document.getElementById("codeForm");
    el.profileForm = document.getElementById("profileForm");
    el.usernameForm = document.getElementById("usernameForm");
    el.countryCombobox = document.getElementById("countryCombobox");
    el.countrySearchInput = document.getElementById("countrySearchInput");
    el.countryOptionsMenu = document.getElementById("countryOptionsMenu");
    el.countrySelect = document.getElementById("countrySelect");
    el.countryCodeInput = document.getElementById("countryCodeInput");
    el.phoneLocalInput = document.getElementById("phoneLocalInput");
    el.phoneStatusHint = document.getElementById("phoneStatusHint");
    el.rememberSessionCheckbox = document.getElementById(
        "rememberSessionCheckbox"
    );
    el.codeInput = document.getElementById("codeInput");
    el.nameInput = document.getElementById("nameInput");
    el.lastNameInput = document.getElementById("lastNameInput");
    el.usernameInput = document.getElementById("usernameInput");
    el.codeHint = document.getElementById("codeHint");
    el.codeBackBtn = document.getElementById("codeBackBtn");
    el.profileBackBtn = document.getElementById("profileBackBtn");
    el.usernameBackBtn = document.getElementById("usernameBackBtn");
    el.stepDots = Array.from(document.querySelectorAll("[data-step-dot]"));

    el.layoutRoot = document.getElementById("layoutRoot");
    el.sectionRail = document.getElementById("sectionRail");
    el.railButtons = Array.from(document.querySelectorAll("[data-section]"));
    el.chatList = document.getElementById("chatList");
    el.sidebarSearchHead = document.getElementById("sidebarSearchHead");
    el.sidebarSearchLabel = document.getElementById("sidebarSearchLabel");
    el.sidebarSectionTitle = document.getElementById("sidebarSectionTitle");
    el.createChatWrap = document.getElementById("createChatWrap");
    el.currentUserCard = document.getElementById("currentUserCard");
    el.chatSearchInput = document.getElementById("chatSearchInput");
    el.createMenuBtn = document.getElementById("createMenuBtn");
    el.createMenuPopover = document.getElementById("createMenuPopover");
    el.messageSearchInput = document.getElementById("messageSearchInput");

    el.emptyState = document.getElementById("emptyState");
    el.chatSection = document.getElementById("chatSection");
    el.chatHeaderAvatar = document.getElementById("chatHeaderAvatar");
    el.chatHeaderTitle = document.getElementById("chatHeaderTitle");
    el.chatHeaderSubtitle = document.getElementById("chatHeaderSubtitle");
    el.chatTitleTrigger = document.getElementById("chatTitleTrigger");
    el.mobileBackToChatsBtn = document.getElementById("mobileBackToChatsBtn");
    el.audioCallBtn = document.getElementById("audioCallBtn");
    el.videoCallBtn = document.getElementById("videoCallBtn");
    el.togglePinBtn = document.getElementById("togglePinBtn");
    el.toggleMuteBtn = document.getElementById("toggleMuteBtn");

    el.messagesContainer = document.getElementById("messagesContainer");
    el.messageEditHint = document.getElementById("messageEditHint");
    el.messageEditHintText = document.getElementById("messageEditHintText");
    el.cancelMessageEditBtn = document.getElementById("cancelMessageEditBtn");
    el.messageForm = document.getElementById("messageForm");
    el.messageInput = document.getElementById("messageInput");
    el.sendMessageBtn = document.getElementById("sendMessageBtn");
    el.fileInput = document.getElementById("fileInput");
    el.attachBtn = document.getElementById("attachBtn");
    el.attachmentList = document.getElementById("attachmentList");

    el.infoPanel = document.getElementById("infoPanel");
    el.chatInfoCard = document.getElementById("chatInfoCard");
    el.groupManageBlock = document.getElementById("groupManageBlock");
    el.participantsList = document.getElementById("participantsList");
    el.addParticipantSelect = document.getElementById("addParticipantSelect");
    el.addParticipantBtn = document.getElementById("addParticipantBtn");
    el.closeInfoBtn = document.getElementById("closeInfoBtn");
    el.mediaLibraryModal = document.getElementById("mediaLibraryModal");
    el.mediaLibrarySubtitle = document.getElementById("mediaLibrarySubtitle");
    el.mediaLibraryContent = document.getElementById("mediaLibraryContent");
    el.callModal = document.getElementById("callModal");
    el.callModalTitle = document.getElementById("callModalTitle");
    el.callModalStatus = document.getElementById("callModalStatus");
    el.callVisual = document.getElementById("callVisual");
    el.callDuration = document.getElementById("callDuration");
    el.toggleMicBtn = document.getElementById("toggleMicBtn");
    el.toggleCameraBtn = document.getElementById("toggleCameraBtn");
    el.endCallBtn = document.getElementById("endCallBtn");
    el.forwardModal = document.getElementById("forwardModal");
    el.forwardMessagePreview = document.getElementById("forwardMessagePreview");
    el.forwardChatSelect = document.getElementById("forwardChatSelect");
    el.forwardConfirmBtn = document.getElementById("forwardConfirmBtn");
    el.messageActionMenu = document.getElementById("messageActionMenu");
    el.avatarCropModal = document.getElementById("avatarCropModal");
    el.avatarCropStage = document.getElementById("avatarCropStage");
    el.avatarCropCanvas = document.getElementById("avatarCropCanvas");
    el.avatarCropZoomInput = document.getElementById("avatarCropZoomInput");
    el.avatarCropApplyBtn = document.getElementById("avatarCropApplyBtn");
    el.avatarPreviewModal = document.getElementById("avatarPreviewModal");
    el.avatarPreviewImage = document.getElementById("avatarPreviewImage");
    el.avatarPreviewEmpty = document.getElementById("avatarPreviewEmpty");
    el.avatarPreviewDeleteBtn = document.getElementById("avatarPreviewDeleteBtn");
    el.privacySettingsModal = document.getElementById("privacySettingsModal");
    el.powerSettingsModal = document.getElementById("powerSettingsModal");
    el.appearanceSettingsModal = document.getElementById("appearanceSettingsModal");

    el.newChatBtn = document.getElementById("newChatBtn");
    el.newGroupBtn = document.getElementById("newGroupBtn");
    el.authThemeToggleBtn = document.getElementById("authThemeToggleBtn");
    el.editProfileBtn = document.getElementById("editProfileBtn");
    el.logoutBtn = document.getElementById("logoutBtn");
    el.toggleSidebarBtn = document.getElementById("toggleSidebarBtn");

    el.newChatModal = document.getElementById("newChatModal");
    el.existingContactSelect = document.getElementById("existingContactSelect");
    el.newContactNameInput = document.getElementById("newContactNameInput");
    el.newContactPhoneInput = document.getElementById("newContactPhoneInput");
    el.createChatBtn = document.getElementById("createChatBtn");

    el.newGroupModal = document.getElementById("newGroupModal");
    el.groupNameInput = document.getElementById("groupNameInput");
    el.groupDescInput = document.getElementById("groupDescInput");
    el.groupMembersChecklist = document.getElementById("groupMembersChecklist");
    el.createGroupBtn = document.getElementById("createGroupBtn");

    el.profileModal = document.getElementById("profileModal");
    el.profileNameInput = document.getElementById("profileNameInput");
    el.profileUsernameInput = document.getElementById("profileUsernameInput");
    el.profileAboutInput = document.getElementById("profileAboutInput");
    el.profileThemeSelect = document.getElementById("profileThemeSelect");
    el.saveProfileBtn = document.getElementById("saveProfileBtn");

    el.toast = document.getElementById("toast");
}

function bindEvents() {
    el.phoneForm.addEventListener("submit", onPhoneSubmit);
    el.codeForm.addEventListener("submit", onCodeSubmit);
    el.profileForm.addEventListener("submit", onProfileSubmit);
    el.usernameForm.addEventListener("submit", onUsernameSubmit);
    el.codeBackBtn.addEventListener("click", () => showAuthStep("phone"));
    el.profileBackBtn.addEventListener("click", () => showAuthStep("code"));
    el.usernameBackBtn.addEventListener("click", () => showAuthStep("profile"));
    el.countrySelect.addEventListener("change", onCountryChange);
    el.countrySearchInput.addEventListener("focus", onCountrySearchFocus);
    el.countrySearchInput.addEventListener("input", onCountrySearchInput);
    el.countrySearchInput.addEventListener("keydown", onCountrySearchKeyDown);
    el.countryOptionsMenu.addEventListener("mousedown", onCountryOptionMouseDown);
    el.countryCodeInput.addEventListener("input", onCountryCodeInput);
    el.countryCodeInput.addEventListener("blur", onCountryCodeInput);
    el.phoneLocalInput.addEventListener("input", onPhoneLocalInput);
    el.rememberSessionCheckbox.addEventListener("change", onRememberToggle);

    el.chatList.addEventListener("click", onChatListClick);
    el.chatList.addEventListener("change", onChatListChange);
    el.chatList.addEventListener("input", onChatListInput);
    el.chatSearchInput.addEventListener("input", onSidebarSearchInput);
    if (el.sectionRail) {
        el.sectionRail.addEventListener("click", onSectionRailClick);
    }
    el.createMenuBtn.addEventListener("click", toggleCreateMenu);

    el.messageSearchInput.addEventListener("input", (event) => {
        runtime.messageQuery = event.target.value.trim().toLowerCase();
        renderActiveChat();
    });

    el.messageForm.addEventListener("submit", onSendMessage);
    el.messageInput.addEventListener("input", autoResizeComposer);
    el.attachBtn.addEventListener("click", () => el.fileInput.click());
    el.fileInput.addEventListener("change", onFilesSelected);
    el.attachmentList.addEventListener("click", onAttachmentRemove);

    el.messagesContainer.addEventListener("click", onMessagesContainerClick);
    el.messagesContainer.addEventListener("pointerdown", onMessagesPointerDown);
    el.messagesContainer.addEventListener("pointerup", clearMessageLongPress);
    el.messagesContainer.addEventListener("pointermove", onMessagesPointerMove);
    el.messagesContainer.addEventListener("pointercancel", clearMessageLongPress);
    el.messagesContainer.addEventListener("pointerleave", clearMessageLongPress);
    if (el.messageActionMenu) {
        el.messageActionMenu.addEventListener("click", onMessageActionMenuClick);
    }
    if (el.cancelMessageEditBtn) {
        el.cancelMessageEditBtn.addEventListener("click", cancelMessageEditing);
    }
    if (el.forwardConfirmBtn) {
        el.forwardConfirmBtn.addEventListener("click", onForwardConfirm);
    }
    if (el.avatarCropZoomInput) {
        el.avatarCropZoomInput.addEventListener("input", onAvatarCropZoomInput);
    }
    if (el.avatarCropStage) {
        el.avatarCropStage.addEventListener("pointerdown", onAvatarCropPointerDown);
        el.avatarCropStage.addEventListener("pointermove", onAvatarCropPointerMove);
        el.avatarCropStage.addEventListener("pointerup", onAvatarCropPointerUp);
        el.avatarCropStage.addEventListener("pointercancel", onAvatarCropPointerUp);
    }
    if (el.avatarCropApplyBtn) {
        el.avatarCropApplyBtn.addEventListener("click", onAvatarCropApply);
    }
    if (el.avatarPreviewDeleteBtn) {
        el.avatarPreviewDeleteBtn.addEventListener("click", onAvatarPreviewDelete);
    }
    if (el.privacySettingsModal) {
        el.privacySettingsModal.addEventListener("change", onPrivacySettingsModalChange);
    }
    if (el.powerSettingsModal) {
        el.powerSettingsModal.addEventListener("change", onPowerSettingsModalChange);
    }
    if (el.appearanceSettingsModal) {
        el.appearanceSettingsModal.addEventListener("change", onAppearanceSettingsModalChange);
        el.appearanceSettingsModal.addEventListener("input", onAppearanceSettingsModalInput);
        el.appearanceSettingsModal.addEventListener("click", onAppearanceSettingsModalClick);
    }

    el.newChatBtn.addEventListener("click", openNewChatModal);
    el.newGroupBtn.addEventListener("click", openNewGroupModal);
    if (el.authThemeToggleBtn) {
        el.authThemeToggleBtn.addEventListener("click", toggleTheme);
    }
    if (el.audioCallBtn) {
        el.audioCallBtn.addEventListener("click", () => startCall("audio"));
    }
    if (el.videoCallBtn) {
        el.videoCallBtn.addEventListener("click", () => startCall("video"));
    }
    if (el.toggleMicBtn) {
        el.toggleMicBtn.addEventListener("click", toggleCallMicrophone);
    }
    if (el.toggleCameraBtn) {
        el.toggleCameraBtn.addEventListener("click", toggleCallCamera);
    }
    if (el.endCallBtn) {
        el.endCallBtn.addEventListener("click", () =>
            endActiveCall({ notify: true })
        );
    }
    if (el.editProfileBtn) {
        el.editProfileBtn.addEventListener("click", openProfileModal);
    }
    el.logoutBtn.addEventListener("click", onLogout);

    el.createChatBtn.addEventListener("click", onCreatePrivateChat);
    el.createGroupBtn.addEventListener("click", onCreateGroup);
    el.saveProfileBtn.addEventListener("click", onSaveProfile);

    el.togglePinBtn.addEventListener("click", () => toggleChatFlag("pinned"));
    el.toggleMuteBtn.addEventListener("click", () => toggleChatFlag("muted"));
    el.chatTitleTrigger.addEventListener("click", openInfoPanel);
    el.closeInfoBtn.addEventListener("click", closeInfoPanel);
    if (el.toggleSidebarBtn) {
        el.toggleSidebarBtn.addEventListener("click", toggleSidebar);
    }
    if (el.mobileBackToChatsBtn) {
        el.mobileBackToChatsBtn.addEventListener("click", onMobileBackToChats);
    }

    el.addParticipantBtn.addEventListener("click", onAddParticipant);
    el.participantsList.addEventListener("click", onRemoveParticipant);
    el.chatInfoCard.addEventListener("click", onChatInfoCardClick);

    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onGlobalKeyDown);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("resize", onViewportResize);
}

async function setupCountrySelector() {
    runtime.countryOptions = await loadCountryOptions();
    authDraft.countryIso = "";
    renderCountryOptions("", "");
    syncCountrySearchInput(null);
    el.countryCodeInput.value = "";
    updatePhoneRegistrationHint();
}

function initializeTheme() {
    let theme = "light";
    try {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored === "light" || stored === "dark") {
            theme = stored;
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            theme = "dark";
        }
    } catch (error) {
        theme = "light";
    }
    setTheme(theme, { persist: false });
}

function toggleTheme() {
    const currentTheme = document.body.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme, { persist: true });
}

function setTheme(theme, options = {}) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    document.body.dataset.theme = nextTheme;
    updateThemeButton(nextTheme);

    if (options.persist === false) {
        return;
    }
    try {
        localStorage.setItem(THEME_KEY, nextTheme);
    } catch (error) {
        console.error(error);
    }
}

function updateThemeButton(theme) {
    if (!el.authThemeToggleBtn) {
        return;
    }
    if (theme === "dark") {
        el.authThemeToggleBtn.textContent = "☀";
        el.authThemeToggleBtn.classList.remove("is-moon");
        el.authThemeToggleBtn.title = "Переключить на светлую тему";
        el.authThemeToggleBtn.setAttribute(
            "aria-label",
            "Переключить на светлую тему"
        );
        return;
    }
    el.authThemeToggleBtn.textContent = "☾";
    el.authThemeToggleBtn.classList.add("is-moon");
    el.authThemeToggleBtn.title = "Переключить на тёмную тему";
    el.authThemeToggleBtn.setAttribute(
        "aria-label",
        "Переключить на тёмную тему"
    );
}

function cloneDefaultUserSettings() {
    return JSON.parse(JSON.stringify(DEFAULT_USER_SETTINGS));
}

function normalizeHexColor(value, fallback = "") {
    const text = String(value || "").trim();
    if (/^#[0-9a-fA-F]{6}$/.test(text)) {
        return text.toLowerCase();
    }
    return fallback;
}

function normalizeUserSettings(input) {
    const raw = input && typeof input === "object" ? input : {};
    const defaults = cloneDefaultUserSettings();
    const privacy = raw.privacy && typeof raw.privacy === "object" ? raw.privacy : {};
    const power = raw.power && typeof raw.power === "object" ? raw.power : {};
    const appearance =
        raw.appearance && typeof raw.appearance === "object" ? raw.appearance : {};

    const textSizeRaw = Number(appearance.textSize);
    const textSize = Number.isFinite(textSizeRaw)
        ? clamp(Math.round(textSizeRaw), SETTINGS_TEXT_SIZE_MIN, SETTINGS_TEXT_SIZE_MAX)
        : defaults.appearance.textSize;
    const wallpaperMode = ["none", "preset", "color", "image"].includes(
        appearance.wallpaperMode
    )
        ? appearance.wallpaperMode
        : defaults.appearance.wallpaperMode;
    const wallpaperPreset = WALLPAPER_PRESET_MAP[appearance.wallpaperPreset]
        ? appearance.wallpaperPreset
        : defaults.appearance.wallpaperPreset;
    const wallpaperImage = String(appearance.wallpaperImage || "").slice(0, 600000);

    return {
        privacy: {
            hideOnlineStatus: Boolean(privacy.hideOnlineStatus),
            hideLastSeen: Boolean(privacy.hideLastSeen),
            readReceipts:
                typeof privacy.readReceipts === "boolean"
                    ? privacy.readReceipts
                    : defaults.privacy.readReceipts
        },
        power: {
            energySaving: Boolean(power.energySaving)
        },
        appearance: {
            messageIncomingColor: normalizeHexColor(appearance.messageIncomingColor, ""),
            messageOutgoingColor: normalizeHexColor(appearance.messageOutgoingColor, ""),
            messageTextColor: normalizeHexColor(appearance.messageTextColor, ""),
            textSize,
            wallpaperMode:
                wallpaperMode === "image" && !wallpaperImage ? "none" : wallpaperMode,
            wallpaperPreset,
            wallpaperColor: normalizeHexColor(
                appearance.wallpaperColor,
                defaults.appearance.wallpaperColor
            ),
            wallpaperImage
        }
    };
}

function getUserSettings(user) {
    if (!user) {
        return cloneDefaultUserSettings();
    }
    user.settings = normalizeUserSettings(user.settings);
    return user.settings;
}

function getPollingIntervalMs() {
    const user = getCurrentUser();
    const settings = getUserSettings(user);
    const powerSaving = Boolean(settings.power.energySaving);
    const hidden = document.visibilityState === "hidden";
    if (powerSaving) {
        return hidden ? 28000 : 12000;
    }
    return hidden ? 6000 : 2500;
}

function onVisibilityChange() {
    startPolling();
}

function setRootCssVar(name, value) {
    if (!name) {
        return;
    }
    if (value === null || value === undefined || value === "") {
        document.documentElement.style.removeProperty(name);
        return;
    }
    document.documentElement.style.setProperty(name, String(value));
}

function lightenHexColor(color, amount) {
    const safe = normalizeHexColor(color, "");
    if (!safe) {
        return "";
    }
    const delta = Number(amount || 0);
    const channels = [1, 3, 5].map((offset) =>
        parseInt(safe.slice(offset, offset + 2), 16)
    );
    const shifted = channels
        .map((channel) => clamp(channel + delta, 0, 255))
        .map((channel) => channel.toString(16).padStart(2, "0"))
        .join("");
    return `#${shifted}`;
}

function toCssImageUrl(dataUrl) {
    const safe = String(dataUrl || "")
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "");
    return `url("${safe}")`;
}

function applyPowerSavingMode(enabled) {
    document.body.dataset.powerSaving = enabled ? "1" : "0";
}

function applyChatAppearanceFromSettings(settings) {
    const appearance = settings.appearance;
    const inColor = normalizeHexColor(appearance.messageIncomingColor, "");
    const outColor = normalizeHexColor(appearance.messageOutgoingColor, "");
    const textColor = normalizeHexColor(appearance.messageTextColor, "");
    const textSize = clamp(
        Number(appearance.textSize || DEFAULT_USER_SETTINGS.appearance.textSize),
        SETTINGS_TEXT_SIZE_MIN,
        SETTINGS_TEXT_SIZE_MAX
    );

    setRootCssVar("--user-message-in-bg", inColor);
    setRootCssVar("--user-message-in-border", inColor ? lightenHexColor(inColor, -18) : "");
    setRootCssVar("--user-message-out-start", outColor);
    setRootCssVar("--user-message-out-end", outColor ? lightenHexColor(outColor, -14) : "");
    setRootCssVar("--user-message-out-border", outColor ? lightenHexColor(outColor, -24) : "");
    setRootCssVar("--user-message-text-color", textColor);
    setRootCssVar("--user-message-text-size", `${textSize}px`);

    const powerSaving = Boolean(settings.power.energySaving);
    const mode = appearance.wallpaperMode;
    let wallpaperImage = "";
    let wallpaperColor = "";
    if (mode === "color") {
        wallpaperColor = appearance.wallpaperColor;
    } else if (mode === "preset") {
        wallpaperImage = WALLPAPER_PRESET_MAP[appearance.wallpaperPreset] || "";
    } else if (mode === "image" && appearance.wallpaperImage) {
        wallpaperImage = toCssImageUrl(appearance.wallpaperImage);
        wallpaperColor = appearance.wallpaperColor;
    }

    if (powerSaving) {
        wallpaperImage = "";
    }

    setRootCssVar("--user-chat-wallpaper-image", wallpaperImage);
    setRootCssVar("--user-chat-wallpaper-color", wallpaperColor);
}

function applyCurrentUserDisplayPreferences() {
    const user = getCurrentUser();
    if (!user) {
        applyPowerSavingMode(false);
        setRootCssVar("--user-message-in-bg", "");
        setRootCssVar("--user-message-in-border", "");
        setRootCssVar("--user-message-out-start", "");
        setRootCssVar("--user-message-out-end", "");
        setRootCssVar("--user-message-out-border", "");
        setRootCssVar("--user-message-text-color", "");
        setRootCssVar("--user-message-text-size", "");
        setRootCssVar("--user-chat-wallpaper-image", "");
        setRootCssVar("--user-chat-wallpaper-color", "");
        if (runtime.pollTimer && runtime.pollIntervalMs !== getPollingIntervalMs()) {
            startPolling();
        }
        return;
    }
    const settings = getUserSettings(user);
    applyPowerSavingMode(Boolean(settings.power.energySaving));
    applyChatAppearanceFromSettings(settings);
    if (runtime.pollTimer && runtime.pollIntervalMs !== getPollingIntervalMs()) {
        startPolling();
    }
}

function detectDefaultCountryISO() {
    const locale = String(navigator.language || "").toUpperCase();
    const parts = locale.split("-");
    const region = parts.length > 1 ? parts[1] : "US";
    const exists = getCountryOptions().some((country) => country.iso === region);
    return exists ? region : "US";
}

function onCountryChange() {
    const selected = getSelectedCountry();
    if (!selected) {
        return;
    }
    applyCountrySelection(selected);
}

function onCountrySearchFocus() {
    const currentValue = String(el.countrySearchInput.value || "").trim();
    const selected = getSelectedCountry();
    const selectedName = selected ? normalizeCountrySearchText(selected.name) : "";
    const valueName = normalizeCountrySearchText(currentValue);
    const query = selected && selectedName === valueName ? "" : currentValue;
    renderCountryOptions(authDraft.countryIso, query);
    openCountryDropdown();
}

function onCountrySearchInput() {
    const query = String(el.countrySearchInput.value || "").trim();
    if (!query) {
        authDraft.countryIso = "";
        el.countrySelect.value = "";
        el.countryCodeInput.value = "";
        renderCountryOptions("", "");
        openCountryDropdown();
        updatePhoneRegistrationHint();
        return;
    }
    renderCountryOptions(authDraft.countryIso, query);
    openCountryDropdown();
    updatePhoneRegistrationHint();
}

function onCountrySearchKeyDown(event) {
    if (event.key === "Escape") {
        closeCountryDropdown();
        return;
    }

    if (event.key !== "Enter") {
        return;
    }
    event.preventDefault();
    const query = String(el.countrySearchInput.value || "").trim();
    const filtered = getFilteredCountryOptions(query);
    if (filtered.length === 0) {
        return;
    }
    selectCountryByIso(filtered[0].iso);
}

function onCountryOptionMouseDown(event) {
    const optionButton = event.target.closest("[data-country-iso]");
    if (!optionButton) {
        return;
    }
    event.preventDefault();
    selectCountryByIso(optionButton.dataset.countryIso);
}

function selectCountryByIso(countryIso) {
    const targetIso = String(countryIso || "").trim().toUpperCase();
    if (!targetIso) {
        return;
    }
    const country =
        getCountryOptions().find((item) => item.iso === targetIso) || null;
    if (!country) {
        return;
    }
    el.countrySelect.value = country.iso;
    applyCountrySelection(country);
}

function applyCountrySelection(country) {
    authDraft.countryIso = country.iso;
    syncCountrySearchInput(country);
    renderCountryOptions(country.iso, "");
    el.countryCodeInput.value = country.dial;
    updatePhoneRegistrationHint();
    closeCountryDropdown();
}

function onCountryCodeInput() {
    const rawDigits = String(el.countryCodeInput.value || "").replace(/\D/g, "");
    if (!rawDigits) {
        el.countryCodeInput.value = "";
        updatePhoneRegistrationHint();
        return;
    }

    if (rawDigits.length > 4) {
        const parsedFull = splitPhoneByCountryCode(`+${rawDigits}`, {
            allowWithoutPrefix: true,
            minimumLocalDigits: 1
        });
        if (parsedFull) {
            applyDetectedCountrySplit(parsedFull, { updateLocal: true });
            updatePhoneRegistrationHint();
            return;
        }
    }

    const normalizedDial = normalizeDialCode(rawDigits);
    el.countryCodeInput.value = normalizedDial;

    if (!normalizedDial || normalizedDial === "+") {
        return;
    }

    const exact = findCountryByDialCode(normalizedDial, { exactOnly: true });
    if (exact) {
        el.countrySelect.value = exact.iso;
        authDraft.countryIso = exact.iso;
        syncCountrySearchInput(exact);
        renderCountryOptions(exact.iso, "");
        closeCountryDropdown();
        updatePhoneRegistrationHint();
        return;
    }

    const partial = findCountryByDialCode(normalizedDial, { exactOnly: false });
    if (partial) {
        el.countrySelect.value = partial.iso;
        authDraft.countryIso = partial.iso;
        syncCountrySearchInput(partial);
        renderCountryOptions(partial.iso, "");
        closeCountryDropdown();
    }
    updatePhoneRegistrationHint();
}

function onPhoneLocalInput() {
    const rawValue = String(el.phoneLocalInput.value || "");
    const parsed = splitPhoneByCountryCode(rawValue, {
        allowWithoutPrefix: true,
        minimumLocalDigits: 4
    });
    if (!parsed) {
        updatePhoneRegistrationHint();
        return;
    }
    if (!shouldAutoSplitPhoneRaw(rawValue, parsed)) {
        updatePhoneRegistrationHint();
        return;
    }
    applyDetectedCountrySplit(parsed, { updateLocal: true });
    updatePhoneRegistrationHint();
}

function getSelectedCountry() {
    const selectedIso = el.countrySelect.value || "";
    if (!selectedIso) {
        return null;
    }
    return getCountryOptions().find((country) => country.iso === selectedIso) || null;
}

function onRememberToggle() {
    runtime.keepSignedIn = Boolean(el.rememberSessionCheckbox.checked);
    persistRememberPreference();
}

function persistRememberPreference() {
    try {
        localStorage.setItem(
            SESSION_REMEMBER_KEY,
            runtime.keepSignedIn ? "1" : "0"
        );
    } catch (error) {
        console.error(error);
    }
}

function updateRememberCheckbox() {
    if (!el.rememberSessionCheckbox) {
        return;
    }
    el.rememberSessionCheckbox.checked = runtime.keepSignedIn;
}

function updatePhoneRegistrationHint() {
    if (!el.phoneStatusHint) {
        return;
    }
    const composedPhone = composePhoneCandidate();
    if (!composedPhone) {
        el.phoneStatusHint.textContent = "";
        return;
    }
    const existingUser = state.users.find((user) => user.phone === composedPhone);
    if (existingUser) {
        el.phoneStatusHint.textContent =
            "Номер уже зарегистрирован. После кода SMS будет выполнен вход.";
        return;
    }
    el.phoneStatusHint.textContent =
        "Номер не найден. После кода SMS откроется создание профиля.";
}

function getCountryLocalPhoneLengthRule(countryIso) {
    const iso = String(countryIso || "")
        .trim()
        .toUpperCase();
    if (!iso) {
        return null;
    }
    const rule = COUNTRY_LOCAL_PHONE_LENGTH_RULES[iso];
    if (!rule) {
        return null;
    }
    const min = Number(rule.min);
    const max = Number(rule.max);
    if (!Number.isFinite(min) || !Number.isFinite(max) || min < 1 || max < min) {
        return null;
    }
    return { min, max };
}

function isValidLocalPhoneLength(countryIso, localDigits) {
    const digitsCount = String(localDigits || "").replace(/\D/g, "").length;
    const rule = getCountryLocalPhoneLengthRule(countryIso);
    if (!rule) {
        return digitsCount > 0;
    }
    return digitsCount >= rule.min && digitsCount <= rule.max;
}

function formatLocalPhoneLengthHint(country, rule) {
    const countryName = country && country.name ? country.name : "выбранной страны";
    if (!rule) {
        return "Введите корректный номер телефона.";
    }
    if (rule.min === rule.max) {
        return `${countryName}: введите ${rule.min} цифр номера без кода страны.`;
    }
    return `${countryName}: введите от ${rule.min} до ${rule.max} цифр номера без кода страны.`;
}

function composePhoneCandidate() {
    const selectedCountry = getSelectedCountry();
    const dialCodeInput = normalizeDialCode(el.countryCodeInput.value);
    const dialCode = dialCodeInput || (selectedCountry ? selectedCountry.dial : "");
    const localDigits = String(el.phoneLocalInput.value || "").replace(/\D/g, "");
    const matchedCountry =
        findCountryByDialCode(dialCode, { exactOnly: true }) || selectedCountry;
    if (matchedCountry && !isValidLocalPhoneLength(matchedCountry.iso, localDigits)) {
        return "";
    }
    const phone = buildPhoneNumber(dialCode, localDigits);
    return isValidPhone(phone) ? phone : "";
}

function getCountryOptions() {
    return runtime.countryOptions.length > 0
        ? runtime.countryOptions
        : normalizeCountryOptions(FALLBACK_COUNTRY_OPTIONS);
}

function renderCountryOptions(defaultIso, query = "") {
    const options = getFilteredCountryOptions(query);
    const currentIso = el.countrySelect.value || authDraft.countryIso || "";
    el.countrySelect.innerHTML =
        '<option value="" disabled selected>Выбор страны</option>' +
        options
            .map(
                (country) =>
                    `<option value="${country.iso}">${esc(
                        country.flag
                    )} ${esc(country.name)} (${esc(country.dialLabel)})</option>`
            )
            .join("");
    const targetIso = options.some((country) => country.iso === defaultIso)
        ? defaultIso
        : options.some((country) => country.iso === currentIso)
          ? currentIso
          : "";
    el.countrySelect.value = targetIso;
    renderCountryDropdown(options, targetIso);
}

function renderCountryDropdown(options, activeIso) {
    if (!el.countryOptionsMenu) {
        return;
    }
    if (!Array.isArray(options) || options.length === 0) {
        el.countryOptionsMenu.innerHTML =
            '<div class="country-options-empty">Страны не найдены.</div>';
        return;
    }
    el.countryOptionsMenu.innerHTML = options
        .map((country) => {
            const activeClass = country.iso === activeIso ? " is-active" : "";
            return `<button type="button" class="country-option${activeClass}" data-country-iso="${esc(
                country.iso
            )}">
                <span class="country-option-flag">${esc(country.flag)}</span>
                <span class="country-option-name">${esc(country.name)}</span>
                <span class="country-option-dial">${esc(country.dialLabel)}</span>
            </button>`;
        })
        .join("");
}

function openCountryDropdown() {
    if (!el.countryOptionsMenu) {
        return;
    }
    el.countryOptionsMenu.classList.remove("hidden");
}

function closeCountryDropdown() {
    if (!el.countryOptionsMenu) {
        return;
    }
    el.countryOptionsMenu.classList.add("hidden");
}

function isCountryDropdownOpen() {
    if (!el.countryOptionsMenu) {
        return false;
    }
    return !el.countryOptionsMenu.classList.contains("hidden");
}

function getFilteredCountryOptions(queryText) {
    const options = getCountryOptions();
    const query = normalizeCountrySearchText(queryText);
    const dialQuery = String(queryText || "").replace(/\D/g, "");
    if (!query) {
        if (!dialQuery) {
            return options;
        }
        return options.filter((country) =>
            country.dialCodes.some((dialCode) =>
                dialToDigits(dialCode).startsWith(dialQuery)
            )
        );
    }
    return options.filter((country) => {
        if (country.searchName && country.searchName.includes(query)) {
            return true;
        }
        if (country.iso.toLowerCase() === query) {
            return true;
        }
        if (
            dialQuery &&
            country.dialCodes.some((dialCode) =>
                dialToDigits(dialCode).startsWith(dialQuery)
            )
        ) {
            return true;
        }
        return false;
    });
}

function syncCountrySearchInput(country) {
    if (!el.countrySearchInput) {
        return;
    }
    el.countrySearchInput.value = country ? country.name : "";
}

function findCountryByName(queryText, options = {}) {
    const query = normalizeCountrySearchText(queryText);
    if (!query) {
        return null;
    }
    const exactOnly = Boolean(options.exactOnly);
    const countries = getCountryOptions();
    if (exactOnly) {
        return (
            countries.find((country) => country.searchName === query) || null
        );
    }
    return (
        countries.find((country) =>
            country.searchName ? country.searchName.includes(query) : false
        ) || null
    );
}

function normalizeCountrySearchText(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ё/g, "е")
        .trim();
}

async function loadCountryOptions() {
    const cached = loadCachedCountryOptions();
    try {
        const response = await fetch(
            "https://restcountries.com/v3.1/all?fields=cca2,name,idd,flag"
        );
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const payload = await response.json();
        const normalized = normalizeCountryOptions(payload);
        if (normalized.length > 0) {
            saveCachedCountryOptions(normalized);
            return normalized;
        }
    } catch (error) {
        // ignore and fallback below
    }

    if (cached.length > 0) {
        return cached;
    }
    return normalizeCountryOptions(FALLBACK_COUNTRY_OPTIONS);
}

function loadCachedCountryOptions() {
    try {
        const raw = localStorage.getItem(COUNTRY_CACHE_KEY);
        if (!raw) {
            return [];
        }
        const parsed = JSON.parse(raw);
        const normalized = normalizeCountryOptions(parsed);
        return normalized;
    } catch (error) {
        return [];
    }
}

function saveCachedCountryOptions(countries) {
    try {
        localStorage.setItem(COUNTRY_CACHE_KEY, JSON.stringify(countries));
    } catch (error) {
        console.error(error);
    }
}

function normalizeCountryOptions(input) {
    const rows = Array.isArray(input) ? input : [];
    const normalized = rows
        .map((item) => {
            const iso = String(item.cca2 || item.iso || "")
                .trim()
                .toUpperCase();
            if (!/^[A-Z]{2}$/.test(iso)) {
                return null;
            }

            const dialCodes = extractDialCodes(item);
            if (dialCodes.length === 0) {
                return null;
            }

            const fallbackName =
                (item.name &&
                    (item.name.common ||
                        (item.name.rus && item.name.rus.common) ||
                        item.name.official)) ||
                item.name ||
                iso;
            const name = getLocalizedCountryName(iso, fallbackName);
            const flag = item.flag || isoToFlagEmoji(iso);
            const primaryDial = pickPrimaryDialCode(iso, dialCodes);

            return {
                iso,
                name,
                flag,
                searchName: normalizeCountrySearchText(name),
                dialCodes,
                dial: primaryDial,
                dialLabel: primaryDial
            };
        })
        .filter(Boolean);

    normalized.sort((a, b) => a.name.localeCompare(b.name, "ru"));
    return uniqueCountriesByIso(normalized);
}

function uniqueCountriesByIso(items) {
    const map = new Map();
    items.forEach((country) => {
        if (!map.has(country.iso)) {
            map.set(country.iso, country);
        }
    });
    return Array.from(map.values());
}

function pickPrimaryDialCode(iso, dialCodes) {
    const normalized = unique(
        (Array.isArray(dialCodes) ? dialCodes : [])
            .map((code) => normalizeDialCode(code))
            .filter((code) => code && code !== "+")
    );
    if (normalized.length === 0) {
        return "";
    }
    const override = normalizeDialCode(COUNTRY_PRIMARY_CODE_OVERRIDES[iso] || "");
    if (override && normalized.includes(override)) {
        return override;
    }
    return normalized.sort((a, b) => {
        const aDigits = dialToDigits(a);
        const bDigits = dialToDigits(b);
        if (aDigits.length !== bDigits.length) {
            return aDigits.length - bDigits.length;
        }
        const aNum = Number(aDigits);
        const bNum = Number(bDigits);
        if (Number.isFinite(aNum) && Number.isFinite(bNum) && aNum !== bNum) {
            return aNum - bNum;
        }
        return a.localeCompare(b);
    })[0];
}

function extractDialCodes(country) {
    if (Array.isArray(country.dialCodes) && country.dialCodes.length > 0) {
        return unique(
            country.dialCodes
                .map((code) => normalizeDialCode(code))
                .filter((code) => code && code !== "+")
        );
    }

    const root = country.idd && country.idd.root ? country.idd.root : "";
    const suffixes =
        country.idd && Array.isArray(country.idd.suffixes)
            ? country.idd.suffixes
            : [];
    if (!root && suffixes.length === 0) {
        return [];
    }

    const rootCode = normalizeDialCode(root);
    const codes = [];
    if (rootCode && rootCode !== "+") {
        codes.push(rootCode);
    }

    suffixes.forEach((suffix) => {
        const fullCode = normalizeDialCode(`${root}${suffix}`);
        if (fullCode && fullCode !== "+") {
            codes.push(fullCode);
        }
    });

    return unique(codes);
}

function getLocalizedCountryName(iso, fallback) {
    try {
        if (Intl && typeof Intl.DisplayNames === "function") {
            const regionNames = new Intl.DisplayNames(["ru", "en"], {
                type: "region"
            });
            const localized = regionNames.of(iso);
            if (localized) {
                return localized;
            }
        }
    } catch (error) {
        // ignore and use fallback
    }
    return String(fallback || iso);
}

function isoToFlagEmoji(iso) {
    const safeIso = String(iso || "")
        .trim()
        .toUpperCase();
    if (!/^[A-Z]{2}$/.test(safeIso)) {
        return "🏳️";
    }
    return safeIso
        .split("")
        .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
        .join("");
}

function normalizeDialCode(value) {
    const digits = String(value || "").replace(/\D/g, "");
    if (!digits) {
        return "";
    }
    return `+${digits}`;
}

function findCountryByDialCode(dialCode, options = {}) {
    const normalizedDial = normalizeDialCode(dialCode);
    if (!normalizedDial) {
        return null;
    }
    const countries = getCountryOptions();
    const exactOnly = Boolean(options.exactOnly);
    const matcher = exactOnly
        ? (code) => code === normalizedDial
        : (code) => code.startsWith(normalizedDial);
    const currentIso = el.countrySelect.value || authDraft.countryIso;

    const preferred = countries.find(
        (country) =>
            country.iso === currentIso &&
            country.dialCodes.some((code) => matcher(code))
    );
    if (preferred) {
        return preferred;
    }

    return (
        countries.find((country) =>
            country.dialCodes.some((code) => matcher(code))
        ) || null
    );
}

function splitPhoneByCountryCode(rawValue, options = {}) {
    const text = String(rawValue || "").trim();
    const minimumLocalDigits =
        typeof options.minimumLocalDigits === "number"
            ? options.minimumLocalDigits
            : 1;
    const hasPlusPrefix = text.startsWith("+");
    const hasZeroPrefix = text.startsWith("00");
    const allowWithoutPrefix = Boolean(options.allowWithoutPrefix);

    let digits = text.replace(/\D/g, "");
    if (!digits) {
        return null;
    }
    if (hasZeroPrefix) {
        digits = digits.slice(2);
    }
    if (!digits) {
        return null;
    }

    if (!hasPlusPrefix && !hasZeroPrefix && !allowWithoutPrefix) {
        return null;
    }

    const currentIso = el.countrySelect.value || authDraft.countryIso || "";
    const candidates = [];
    getCountryOptions().forEach((country) => {
        country.dialCodes.forEach((dialCode) => {
            const dialDigits = dialToDigits(dialCode);
            if (!dialDigits || !digits.startsWith(dialDigits)) {
                return;
            }
            const localDigits = digits.slice(dialDigits.length);
            if (localDigits.length < minimumLocalDigits) {
                return;
            }
            candidates.push({
                country,
                dialCode: `+${dialDigits}`,
                dialDigits,
                localDigits
            });
        });
    });

    if (candidates.length === 0) {
        return null;
    }

    candidates.sort((a, b) => {
        if (b.dialDigits.length !== a.dialDigits.length) {
            return b.dialDigits.length - a.dialDigits.length;
        }
        if (a.country.iso === currentIso && b.country.iso !== currentIso) {
            return -1;
        }
        if (b.country.iso === currentIso && a.country.iso !== currentIso) {
            return 1;
        }
        return a.country.name.localeCompare(b.country.name, "ru");
    });

    return candidates[0];
}

function shouldAutoSplitPhoneRaw(rawValue, parsed) {
    const text = String(rawValue || "").trim();
    const digits = text.replace(/\D/g, "");
    if (!digits) {
        return false;
    }

    if (text.startsWith("+") || text.startsWith("00")) {
        return true;
    }

    const current = getSelectedCountry();
    const currentDialDigits = dialToDigits(current ? current.dial : "");
    const parsedDialDigits = dialToDigits(parsed.dialCode);
    if (
        currentDialDigits &&
        digits.startsWith(currentDialDigits) &&
        currentDialDigits === parsedDialDigits
    ) {
        return digits.length >= currentDialDigits.length + 6;
    }

    return digits.length >= 12;
}

function applyDetectedCountrySplit(parsed, options = {}) {
    el.countryCodeInput.value = parsed.dialCode;
    el.countrySelect.value = parsed.country.iso;
    authDraft.countryIso = parsed.country.iso;
    syncCountrySearchInput(parsed.country);
    renderCountryOptions(parsed.country.iso, "");
    closeCountryDropdown();
    if (options.updateLocal) {
        el.phoneLocalInput.value = parsed.localDigits;
    }
}

function dialToDigits(dialCode) {
    return String(dialCode || "").replace(/\D/g, "");
}

function onPhoneSubmit(event) {
    event.preventDefault();
    const selectedCountry = getSelectedCountry();
    const inferredFromLocal = splitPhoneByCountryCode(el.phoneLocalInput.value, {
        allowWithoutPrefix: true,
        minimumLocalDigits: 4
    });
    if (
        inferredFromLocal &&
        shouldAutoSplitPhoneRaw(el.phoneLocalInput.value, inferredFromLocal)
    ) {
        applyDetectedCountrySplit(inferredFromLocal, { updateLocal: true });
    }

    const dialCodeInput = normalizeDialCode(el.countryCodeInput.value);
    const dialCode = dialCodeInput || (selectedCountry ? selectedCountry.dial : "");
    const matchedCountry = findCountryByDialCode(dialCode, { exactOnly: true });
    if (!matchedCountry) {
        showToast("Введите корректный код страны.");
        return;
    }
    el.countrySelect.value = matchedCountry.iso;
    authDraft.countryIso = matchedCountry.iso;
    syncCountrySearchInput(matchedCountry);
    renderCountryOptions(matchedCountry.iso, "");
    const localDigits = String(el.phoneLocalInput.value || "").replace(/\D/g, "");
    const localLengthRule = getCountryLocalPhoneLengthRule(matchedCountry.iso);
    if (!isValidLocalPhoneLength(matchedCountry.iso, localDigits)) {
        showToast(formatLocalPhoneLengthHint(matchedCountry, localLengthRule));
        return;
    }
    const normalizedPhone = buildPhoneNumber(dialCode, localDigits);

    if (!isValidPhone(normalizedPhone)) {
        showToast("Введите корректный номер телефона.");
        return;
    }

    authDraft.phone = normalizedPhone;
    const existingUser = state.users.find((user) => user.phone === normalizedPhone);
    if (existingUser) {
        el.codeHint.textContent = `Номер найден. После SMS-кода вы войдете в аккаунт ${existingUser.name}. Демо-код: 1111.`;
    } else {
        el.codeHint.textContent =
            "Номер новый. После SMS-кода откроется создание профиля. Демо-код: 1111.";
    }
    showAuthStep("code");
    el.codeInput.focus();
}

function onCodeSubmit(event) {
    event.preventDefault();
    const code = (el.codeInput.value || "").trim();

    if (code !== authDraft.code) {
        showToast("Неверный код. Используйте 1111.");
        return;
    }

    const existingUser = state.users.find((user) => user.phone === authDraft.phone);
    if (existingUser) {
        existingUser.online = true;
        existingUser.lastSeen = Date.now();
        state.session.userId = existingUser.id;
        restoreUiState();
        ensureOnboardingChats(existingUser.id);
        saveState();
        enterApp();
        return;
    }

    authDraft.firstName = "";
    authDraft.lastName = "";
    authDraft.username = "";
    showAuthStep("profile");
    el.nameInput.focus();
}

function onProfileSubmit(event) {
    event.preventDefault();
    const firstName = (el.nameInput.value || "").trim();
    const lastName = (el.lastNameInput.value || "").trim();
    if (firstName.length < 2) {
        showToast("Имя должно быть минимум из 2 символов.");
        return;
    }
    if (lastName.length < 2) {
        showToast("Фамилия должна быть минимум из 2 символов.");
        return;
    }

    authDraft.firstName = firstName;
    authDraft.lastName = lastName;
    const suggestedUsername = sanitizeUsername(
        `${firstName.toLowerCase()}_${lastName.toLowerCase()}`
    );
    el.usernameInput.value = ensureUniqueUsername(suggestedUsername || "user");
    showAuthStep("username");
    el.usernameInput.focus();
}

function onUsernameSubmit(event) {
    event.preventDefault();
    const usernameRaw = (el.usernameInput.value || "").trim();
    const username = sanitizeUsername(usernameRaw);
    if (!username) {
        showToast("Введите корректный username.");
        return;
    }
    if (state.users.some((user) => user.username === username)) {
        showToast("Этот username уже занят.");
        return;
    }

    authDraft.username = username;
    const fullName = `${authDraft.firstName} ${authDraft.lastName}`.trim();

    const newUser = {
        id: uid("u"),
        phone: authDraft.phone,
        name: fullName,
        username: authDraft.username,
        about: "Новый пользователь Pulse",
        avatar: "",
        color: pickColor(state.users.length + 3),
        online: true,
        lastSeen: Date.now(),
        settings: cloneDefaultUserSettings()
    };

    state.users.push(newUser);
    state.session.userId = newUser.id;
    restoreUiState();
    ensureOnboardingChats(newUser.id);
    saveState();
    enterApp();
}

function showAuthStep(step) {
    const forms = [
        { id: "phone", node: el.phoneForm },
        { id: "code", node: el.codeForm },
        { id: "profile", node: el.profileForm },
        { id: "username", node: el.usernameForm }
    ];
    const order = ["phone", "code", "profile", "username"];
    const activeIndex = order.indexOf(step);

    forms.forEach((item) => {
        item.node.classList.toggle("is-active", item.id === step);
    });

    el.stepDots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index <= activeIndex);
    });
}

function enterAuth() {
    el.appScreen.classList.add("hidden");
    el.authScreen.classList.remove("hidden");
    applyCurrentUserDisplayPreferences();
    cancelMessageEditing({ silent: true });
    closeMessageActionMenu();
    clearMessageLongPress();
    runtime.settingsAvatarDraft = null;
    closeAllModals();
    closeCreateMenu();
    closeInfoPanel();
    el.codeInput.value = "";
    el.nameInput.value = "";
    el.lastNameInput.value = "";
    el.usernameInput.value = "";
    el.phoneLocalInput.value = "";
    updateRememberCheckbox();
    updatePhoneRegistrationHint();
    showAuthStep("phone");
}

function enterApp() {
    el.authScreen.classList.add("hidden");
    el.appScreen.classList.remove("hidden");
    closeMessageActionMenu();
    clearMessageLongPress();
    cancelMessageEditing({ silent: true });
    runtime.settingsAvatarDraft = null;

    if (!isCurrentChatAccessible()) {
        state.activeChatId = null;
    }

    runtime.messageQuery = "";
    runtime.chatQuery = "";
    runtime.sidebarSection = normalizeSidebarSection(runtime.sidebarSection);
    runtime.sidebarQuery = "";
    runtime.pendingAttachments = [];
    el.chatSearchInput.value = "";
    el.messageSearchInput.value = "";
    el.layoutRoot.classList.remove("show-sidebar");
    el.layoutRoot.classList.remove("show-info");
    closeCreateMenu();
    persistUiState();
    renderApp();
}

function renderApp() {
    applyCurrentUserDisplayPreferences();
    renderCurrentUserCard();
    updateSidebarChrome();
    renderSidebarContent();
    renderActiveChat();
    renderInfoPanel();
    updateMobileLayoutMode();
}

function renderCurrentUserCard() {
    const user = getCurrentUser();
    if (!user) {
        return;
    }

    el.currentUserCard.innerHTML = `
        ${renderAvatarMarkup(user.avatar, user.color, initials(user.name))}
        <div class="user-meta">
            <h4>${esc(user.name)}</h4>
            <p>@${esc(user.username)}</p>
        </div>
    `;
}

function onSidebarSearchInput(event) {
    runtime.sidebarQuery = String(event.target.value || "")
        .trim()
        .toLowerCase();
    renderSidebarContent();
}

function onSectionRailClick(event) {
    const button = event.target.closest("[data-section]");
    if (!button) {
        return;
    }
    setSidebarSection(button.dataset.section);
}

function normalizeSidebarSection(section) {
    const allowed = ["chats", "calls", "contacts", "settings"];
    return allowed.includes(section) ? section : "chats";
}

function setSidebarSection(section) {
    const nextSection = normalizeSidebarSection(section);
    if (runtime.sidebarSection === nextSection) {
        return;
    }
    if (runtime.settingsAutoSaveTimer) {
        clearTimeout(runtime.settingsAutoSaveTimer);
        runtime.settingsAutoSaveTimer = null;
    }
    runtime.sidebarSection = nextSection;
    runtime.sidebarQuery = "";
    runtime.settingsAvatarDraft = null;
    el.chatSearchInput.value = "";
    closeCreateMenu();
    persistUiState();
    renderApp();
}

function isMobileViewport() {
    return window.matchMedia("(max-width: 900px)").matches;
}

function updateMobileLayoutMode() {
    if (!el.layoutRoot) {
        return;
    }
    if (!isMobileViewport()) {
        el.layoutRoot.classList.remove("mobile-chat-open");
        return;
    }
    const activeSection = runtime.sidebarSection || "chats";
    const sectionSupportsChat = activeSection === "chats";
    const hasActiveChat = Boolean(getActiveChat()) && sectionSupportsChat;
    el.layoutRoot.classList.toggle("mobile-chat-open", hasActiveChat);
}

function onMobileBackToChats() {
    if (!isMobileViewport()) {
        return;
    }
    closeActiveChat();
}

function getSidebarSectionConfig(section) {
    const map = {
        chats: {
            title: "Чаты",
            searchLabel: "Поиск чатов",
            searchPlaceholder: "Название, участник, сообщение",
            searchable: true,
            canCreate: true
        },
        calls: {
            title: "Звонки",
            searchLabel: "Поиск звонков",
            searchPlaceholder: "Имя, тип звонка, длительность",
            searchable: true,
            canCreate: false
        },
        contacts: {
            title: "Контакты",
            searchLabel: "Поиск контактов",
            searchPlaceholder: "Имя, username, телефон",
            searchable: true,
            canCreate: false
        },
        settings: {
            title: "Настройки",
            searchLabel: "",
            searchPlaceholder: "",
            searchable: false,
            canCreate: false
        }
    };
    return map[section] || map.chats;
}

function updateSidebarChrome() {
    const config = getSidebarSectionConfig(runtime.sidebarSection);
    el.sidebarSectionTitle.textContent = config.title;
    el.sidebarSearchHead.classList.toggle("hidden", !config.searchable);
    el.createChatWrap.classList.toggle("hidden", !config.canCreate);
    el.chatList.classList.toggle("is-settings-scroll-hidden", runtime.sidebarSection === "settings");
    if (config.searchable) {
        el.sidebarSearchLabel.textContent = config.searchLabel;
        el.chatSearchInput.placeholder = config.searchPlaceholder;
    }
    el.railButtons.forEach((button) => {
        button.classList.toggle(
            "is-active",
            button.dataset.section === runtime.sidebarSection
        );
    });
}

function renderSidebarContent() {
    const query = runtime.sidebarQuery;
    if (runtime.sidebarSection === "calls") {
        renderCallList(query);
        return;
    }
    if (runtime.sidebarSection === "contacts") {
        renderContactList(query);
        return;
    }
    if (runtime.sidebarSection === "settings") {
        renderSettingsList();
        return;
    }
    renderChatList(query);
}

function renderChatList(query = runtime.sidebarQuery) {
    const chats = filterChats(getCurrentUserChats(), query);
    if (chats.length === 0) {
        el.chatList.innerHTML = '<li class="muted small">Чаты не найдены.</li>';
        return;
    }

    el.chatList.innerHTML = chats
        .map((chat) => {
            const info = getChatVisualInfo(chat);
            const lastMessage = chat.messages[chat.messages.length - 1];
            const preview = getMessagePreview(lastMessage);
            const time = lastMessage ? formatTime(lastMessage.createdAt) : "";
            const unread = chat.unreadCount || 0;
            const activeClass = chat.id === state.activeChatId ? "is-active" : "";
            const pinnedClass = chat.pinned ? "is-pinned" : "";

            return `
                <li class="chat-item ${activeClass} ${pinnedClass}" data-chat-id="${esc(chat.id)}">
                    ${renderAvatarMarkup(info.avatar, info.color, info.initials)}
                    <div class="chat-body">
                        <div class="chat-row">
                            <h4>${esc(info.title)}</h4>
                            <p>${esc(time)}</p>
                        </div>
                        <div class="chat-row">
                            <div class="chat-preview">${esc(preview)}</div>
                            ${unread ? `<span class="badge">${unread}</span>` : ""}
                        </div>
                    </div>
                </li>
            `;
        })
        .join("");
}

function renderCallList(query = "") {
    const calls = collectCallHistory(query);
    if (calls.length === 0) {
        el.chatList.innerHTML = '<li class="muted small">Звонков пока нет.</li>';
        return;
    }
    el.chatList.innerHTML = calls
        .map((call) => {
            const typeIcon = call.type === "video" ? "🎥" : "📞";
            return `
                <li class="chat-item call-item" data-chat-id="${esc(call.chatId)}">
                    <div class="avatar" style="background:${esc(call.color)}">${typeIcon}</div>
                    <div class="chat-body">
                        <div class="chat-row">
                            <h4>${esc(call.title)}</h4>
                            <p>${esc(formatTime(call.createdAt))}</p>
                        </div>
                        <div class="chat-preview">${esc(call.text)}</div>
                    </div>
                </li>
            `;
        })
        .join("");
}

function collectCallHistory(query = "") {
    const safeQuery = String(query || "").trim().toLowerCase();
    const records = [];
    getCurrentUserChats().forEach((chat) => {
        const info = getChatVisualInfo(chat);
        (chat.messages || []).forEach((message) => {
            const text = String(message.text || "").trim();
            if (!isCallEventText(text)) {
                return;
            }
            const record = {
                chatId: chat.id,
                title: info.title,
                color: info.color,
                text,
                createdAt: message.createdAt || 0,
                type: text.startsWith("🎥") ? "video" : "audio"
            };
            if (!safeQuery) {
                records.push(record);
                return;
            }
            const haystack = `${record.title} ${record.text}`.toLowerCase();
            if (haystack.includes(safeQuery)) {
                records.push(record);
            }
        });
    });
    return records.sort((a, b) => b.createdAt - a.createdAt);
}

function isCallEventText(text) {
    const value = String(text || "").trim();
    return value.startsWith("📞 ") || value.startsWith("🎥 ");
}

function renderContactList(query = "") {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        el.chatList.innerHTML = '<li class="muted small">Нет доступных контактов.</li>';
        return;
    }
    const safeQuery = String(query || "").trim().toLowerCase();
    const contacts = state.users
        .filter((user) => user.id !== currentUser.id)
        .filter((user) => {
            if (!safeQuery) {
                return true;
            }
            const haystack = `${user.name} @${user.username} ${user.phone}`.toLowerCase();
            return haystack.includes(safeQuery);
        })
        .sort((a, b) => a.name.localeCompare(b.name, "ru"));

    if (contacts.length === 0) {
        el.chatList.innerHTML = '<li class="muted small">Контакты не найдены.</li>';
        return;
    }

    el.chatList.innerHTML = contacts
        .map(
            (user) => `
                <li class="chat-item">
                    ${renderAvatarMarkup(user.avatar, user.color, initials(user.name))}
                    <div class="chat-body">
                        <div class="chat-row">
                            <h4>${esc(user.name)}</h4>
                            <p>${esc(getPresenceLabelForUser(user, currentUser.id))}</p>
                        </div>
                        <div class="chat-preview">@${esc(user.username)} · ${esc(user.phone)}</div>
                        <div class="contact-actions">
                            <button class="contact-action-btn" type="button" data-contact-action="open-chat" data-user-id="${esc(user.id)}">Чат</button>
                            <button class="contact-action-btn" type="button" data-contact-action="audio-call" data-user-id="${esc(user.id)}">Звонок</button>
                            <button class="contact-action-btn" type="button" data-contact-action="video-call" data-user-id="${esc(user.id)}">Видео</button>
                        </div>
                    </div>
                </li>
            `
        )
        .join("");
}

function getSettingsAvatarValue(user = getCurrentUser()) {
    if (!user) {
        return "";
    }
    return runtime.settingsAvatarDraft === null
        ? String(user.avatar || "")
        : String(runtime.settingsAvatarDraft || "");
}

function renderSettingsList() {
    const user = getCurrentUser();
    if (!user) {
        el.chatList.innerHTML = '<li class="muted small">Настройки недоступны.</li>';
        return;
    }
    const currentTheme = document.body.dataset.theme === "dark" ? "dark" : "light";
    const avatarValue = getSettingsAvatarValue(user);
    const avatarPreview = renderAvatarMarkup(
        avatarValue,
        user.color,
        initials(user.name),
        "avatar settings-avatar-preview"
    );
    el.chatList.innerHTML = `
        <li class="settings-pane settings-editor">
            <p class="settings-tip">Редактируйте профиль прямо в этом разделе.</p>
            <div class="settings-avatar-head">
                <button
                    class="settings-avatar-preview-btn"
                    type="button"
                    data-settings-action="open-avatar-preview"
                    ${avatarValue ? "" : "disabled"}
                    aria-label="Открыть фото профиля"
                >
                    ${avatarPreview}
                </button>
                <button
                    class="settings-avatar-select"
                    type="button"
                    data-settings-action="pick-avatar"
                >
                    Выбрать фотографию
                </button>
                <input id="settingsAvatarInput" type="file" accept="image/*" class="hidden" />
                <div class="settings-avatar-meta">
                    <h4>${esc(user.name)}</h4>
                    <p>@${esc(user.username)}</p>
                </div>
            </div>
            <label class="field">
                <span>Имя и фамилия</span>
                <input id="settingsNameInput" type="text" value="${esc(user.name)}" />
            </label>
            <label class="field">
                <span>Username</span>
                <input id="settingsUsernameInput" type="text" value="${esc(user.username)}" />
            </label>
            <label class="field">
                <span>О себе</span>
                <input id="settingsAboutInput" type="text" value="${esc(user.about || "")}" />
            </label>
            <label class="field">
                <span>Тема</span>
                <select id="settingsThemeSelect">
                    <option value="light" ${currentTheme === "light" ? "selected" : ""}>Светлая</option>
                    <option value="dark" ${currentTheme === "dark" ? "selected" : ""}>Тёмная</option>
                </select>
            </label>
            <div class="settings-nav-list">
                <button
                    class="settings-nav-btn"
                    type="button"
                    data-settings-action="open-privacy-settings"
                >
                    <span>Конфиденциальность</span>
                    <span class="settings-nav-arrow">›</span>
                </button>
                <button
                    class="settings-nav-btn"
                    type="button"
                    data-settings-action="open-power-settings"
                >
                    <span>Энергосбережение</span>
                    <span class="settings-nav-arrow">›</span>
                </button>
                <button
                    class="settings-nav-btn"
                    type="button"
                    data-settings-action="open-appearance-settings"
                >
                    <span>Оформление</span>
                    <span class="settings-nav-arrow">›</span>
                </button>
            </div>
            <button class="btn btn-ghost full" type="button" data-settings-action="logout">Выйти</button>
        </li>
    `;
}

function renderActiveChat() {
    const chat = getActiveChat();
    closeMessageActionMenu();
    if (!chat) {
        cancelMessageEditing({ silent: true });
        closeInfoPanel();
        el.emptyState.classList.remove("hidden");
        el.chatSection.classList.add("hidden");
        if (el.audioCallBtn) {
            el.audioCallBtn.disabled = true;
        }
        if (el.videoCallBtn) {
            el.videoCallBtn.disabled = true;
        }
        return;
    }

    const currentUser = getCurrentUser();
    if (
        runtime.editingMessage &&
        runtime.editingMessage.chatId &&
        runtime.editingMessage.chatId !== chat.id
    ) {
        cancelMessageEditing({ silent: true });
    }
    updateComposerMode();
    const info = getChatVisualInfo(chat);
    const typingUser = getTypingUser(chat.id);

    el.emptyState.classList.add("hidden");
    el.chatSection.classList.remove("hidden");
    setAvatarNode(el.chatHeaderAvatar, info.avatar, info.color, info.initials);
    el.chatHeaderTitle.textContent = info.title;
    el.chatHeaderSubtitle.textContent = typingUser
        ? `${typingUser.name} печатает...`
        : getChatSubtitle(chat);

    const pinned = Boolean(chat.pinned);
    const muted = Boolean(chat.muted);
    el.togglePinBtn.classList.toggle("is-active", pinned);
    el.togglePinBtn.title = pinned ? "Открепить чат" : "Закрепить чат";
    el.togglePinBtn.setAttribute("aria-label", pinned ? "Открепить чат" : "Закрепить чат");
    el.toggleMuteBtn.classList.toggle("is-active", muted);
    el.toggleMuteBtn.classList.toggle("is-muted", muted);
    el.toggleMuteBtn.title = muted ? "Включить уведомления" : "Отключить уведомления";
    el.toggleMuteBtn.setAttribute(
        "aria-label",
        muted ? "Включить уведомления" : "Отключить уведомления"
    );
    const activeCallChatId = runtime.activeCall ? runtime.activeCall.chatId : "";
    const hasActiveCall = Boolean(runtime.activeCall);
    const callForCurrentChat = activeCallChatId === chat.id;
    if (el.audioCallBtn) {
        el.audioCallBtn.disabled = hasActiveCall && !callForCurrentChat;
        el.audioCallBtn.classList.toggle(
            "is-active",
            hasActiveCall && callForCurrentChat && runtime.activeCall.type === "audio"
        );
    }
    if (el.videoCallBtn) {
        el.videoCallBtn.disabled = hasActiveCall && !callForCurrentChat;
        el.videoCallBtn.classList.toggle(
            "is-active",
            hasActiveCall && callForCurrentChat && runtime.activeCall.type === "video"
        );
    }

    const visibleMessages = filterMessages(chat.messages, runtime.messageQuery);
    if (visibleMessages.length === 0) {
        el.messagesContainer.innerHTML =
            '<p class="muted small center">Сообщения по этому запросу не найдены.</p>';
        return;
    }

    el.messagesContainer.innerHTML = visibleMessages
        .map((message) => renderMessage(message, chat, currentUser.id))
        .join("");

    if (!runtime.messageQuery) {
        el.messagesContainer.scrollTop = el.messagesContainer.scrollHeight;
    }
}

function renderMessage(message, chat, currentUserId) {
    const sender = getUserById(message.senderId);
    const isSelf = message.senderId === currentUserId;
    const reactions = message.reactions || {};
    const isPinned = Boolean(message.pinned);
    const isEdited = Boolean(message.editedAt);
    const actionTitle = "Действия сообщения";

    const filesHtml = (message.attachments || [])
        .map((file) => `<span class="file-pill">${esc(file.name)}</span>`)
        .join("");

    const visibleReactionEntries = Object.entries(reactions)
        .filter((entry) => Array.isArray(entry[1]) && entry[1].length > 0)
        .sort((entryA, entryB) => {
            const emojiA = entryA[0];
            const emojiB = entryB[0];
            const indexA = POPULAR_REACTION_SET.indexOf(emojiA);
            const indexB = POPULAR_REACTION_SET.indexOf(emojiB);
            const weightA = indexA >= 0 ? indexA : 999;
            const weightB = indexB >= 0 ? indexB : 999;
            if (weightA !== weightB) {
                return weightA - weightB;
            }
            return emojiA.localeCompare(emojiB);
        });

    const reactionButtons = visibleReactionEntries
        .map((entry) => {
            const emoji = entry[0];
            const users = entry[1];
            const count = users.length;
            const isActive = users.includes(currentUserId);
            return `
                <button
                    class="reaction-btn ${isActive ? "active" : ""}"
                    type="button"
                    data-reaction-chat-id="${esc(chat.id)}"
                    data-reaction-msg-id="${esc(message.id)}"
                    data-reaction-emoji="${esc(emoji)}"
                >
                    ${esc(emoji)} ${count}
                </button>
            `;
        })
        .join("");

    return `
        <article
            class="message ${isSelf ? "self" : ""} ${isPinned ? "is-pinned-message" : ""}"
            data-message-chat-id="${esc(chat.id)}"
            data-message-id="${esc(message.id)}"
        >
            <button
                class="message-menu-trigger"
                type="button"
                title="${actionTitle}"
                aria-label="${actionTitle}"
                data-message-menu-trigger="1"
                data-message-chat-id="${esc(chat.id)}"
                data-message-id="${esc(message.id)}"
            >
                ✓
            </button>
            <div class="message-head">
                <span class="message-author">${esc(sender ? sender.name : "Unknown")}</span>
                <span class="message-meta">
                    ${isPinned ? '<span class="message-flag" title="Закрепленное сообщение">📌</span>' : ""}
                    ${isEdited ? '<span class="message-edited">изменено</span>' : ""}
                    <span class="message-time">${esc(formatTime(message.createdAt))}</span>
                </span>
            </div>
            ${message.text ? `<p class="message-text">${esc(message.text)}</p>` : ""}
            ${filesHtml ? `<div class="message-files">${filesHtml}</div>` : ""}
            ${reactionButtons ? `<div class="reactions">${reactionButtons}</div>` : ""}
        </article>
    `;
}

function renderInfoPanel() {
    const chat = getActiveChat();
    if (!chat) {
        el.chatInfoCard.innerHTML =
            '<p class="muted small">Откройте чат, чтобы увидеть подробности.</p>';
        el.groupManageBlock.classList.add("hidden");
        return;
    }

    const info = getChatVisualInfo(chat);
    const participants = chat.participants.map((id) => getUserById(id)).filter(Boolean);
    const chatTypeLabel = chat.type === "group" ? "Группа" : "Личный чат";
    const library = collectChatLibrary(chat);

    el.chatInfoCard.innerHTML = `
        <div class="current-user-card">
            ${renderAvatarMarkup(info.avatar, info.color, info.initials)}
            <div class="user-meta">
                <h4>${esc(info.title)}</h4>
                <p>${esc(chat.description || "Без описания")}</p>
            </div>
        </div>
        <div class="chat-info-row">
            <span>Тип</span>
            <strong>${chatTypeLabel}</strong>
        </div>
        <div class="chat-info-row">
            <span>Участники</span>
            <strong>${participants.length}</strong>
        </div>
        <div class="chat-info-row">
            <span>Сообщений</span>
            <strong>${chat.messages.length}</strong>
        </div>
        <div class="chat-info-row">
            <span>Уведомления</span>
            <strong>${chat.muted ? "Выключены" : "Включены"}</strong>
        </div>
        <button class="chat-info-action-row" type="button" data-open-media-library="1">
            <span class="chat-info-action-label">Медиа, документы, ссылки</span>
            <span class="chat-info-action-meta">
                ${library.media.length} / ${library.documents.length} / ${library.links.length}
            </span>
        </button>
    `;

    if (chat.type !== "group") {
        el.groupManageBlock.classList.add("hidden");
        return;
    }

    const currentUser = getCurrentUser();
    const canManage = (chat.adminIds || []).includes(currentUser.id);
    el.groupManageBlock.classList.remove("hidden");

    el.participantsList.innerHTML = participants
        .map((user) => {
            const isAdmin = (chat.adminIds || []).includes(user.id);
            const removeButton =
                canManage && user.id !== currentUser.id
                    ? `<button class="remove-member-btn" data-remove-user-id="${esc(user.id)}">Удалить</button>`
                    : "";
            return `
                <li>
                    <span>${esc(user.name)} ${isAdmin ? "• admin" : ""}</span>
                    ${removeButton}
                </li>
            `;
        })
        .join("");

    const availableUsers = state.users.filter(
        (user) => !chat.participants.includes(user.id)
    );
    if (availableUsers.length === 0) {
        el.addParticipantSelect.innerHTML = '<option value="">Нет доступных пользователей</option>';
        el.addParticipantBtn.disabled = true;
        return;
    }

    el.addParticipantBtn.disabled = !canManage;
    el.addParticipantSelect.innerHTML =
        '<option value="">Выберите участника</option>' +
        availableUsers
            .map((user) => `<option value="${esc(user.id)}">${esc(user.name)} (${esc(user.phone)})</option>`)
            .join("");
}

function openNewChatModal() {
    closeCreateMenu();
    populateExistingContactSelect();
    openModal("newChatModal");
}

function openNewGroupModal() {
    closeCreateMenu();
    populateGroupChecklist();
    openModal("newGroupModal");
}

function openProfileModal() {
    const user = getCurrentUser();
    if (!user) {
        return;
    }

    el.profileNameInput.value = user.name;
    el.profileUsernameInput.value = user.username;
    el.profileAboutInput.value = user.about || "";
    if (el.profileThemeSelect) {
        const currentTheme =
            document.body.dataset.theme === "dark" ? "dark" : "light";
        el.profileThemeSelect.value = currentTheme;
    }
    openModal("profileModal");
}

function getOrCreatePrivateChatWithUser(userId) {
    const currentUser = getCurrentUser();
    if (!currentUser || !userId || userId === currentUser.id) {
        return null;
    }
    const chat = createOrGetPrivateChat(currentUser.id, userId);
    chat.unreadCount = 0;
    return chat;
}

function startCall(callType, options = {}) {
    const mode = callType === "video" ? "video" : "audio";
    const currentUser = getCurrentUser();
    if (!currentUser) {
        return;
    }

    if (runtime.activeCall) {
        showToast("Сначала завершите текущий звонок.");
        return;
    }

    const targetChatId = options.chatId || state.activeChatId;
    const chat = state.chats.find(
        (item) =>
            item.id === targetChatId &&
            Array.isArray(item.participants) &&
            item.participants.includes(currentUser.id)
    );
    if (!chat) {
        showToast("Сначала откройте чат для звонка.");
        return;
    }

    state.activeChatId = chat.id;
    const info = getChatVisualInfo(chat);
    const label = mode === "video" ? "Видеозвонок" : "Аудиозвонок";
    runtime.activeCall = {
        chatId: chat.id,
        type: mode,
        title: info.title,
        connectedAt: null,
        muted: false,
        cameraOff: mode === "audio"
    };

    if (el.callModalTitle) {
        el.callModalTitle.textContent = `${label} · ${info.title}`;
    }
    if (el.callModalStatus) {
        el.callModalStatus.textContent = "Соединение...";
    }
    if (el.callVisual) {
        el.callVisual.textContent = mode === "video" ? "🎥" : "📞";
    }
    if (el.callDuration) {
        el.callDuration.textContent = "00:00";
    }
    updateCallControlButtons();
    openModal("callModal");

    if (runtime.callConnectTimerId) {
        clearTimeout(runtime.callConnectTimerId);
    }
    runtime.callConnectTimerId = window.setTimeout(() => {
        if (!runtime.activeCall || runtime.activeCall.chatId !== chat.id) {
            return;
        }
        runtime.activeCall.connectedAt = Date.now();
        if (el.callModalStatus) {
            el.callModalStatus.textContent = "Звонок активен";
        }
        updateCallDurationDisplay();
        runtime.callTimerId = window.setInterval(updateCallDurationDisplay, 1000);
    }, 1200);
}

function updateCallDurationDisplay() {
    if (!runtime.activeCall || !el.callDuration) {
        return;
    }
    if (!runtime.activeCall.connectedAt) {
        el.callDuration.textContent = "00:00";
        return;
    }
    const seconds = Math.max(
        0,
        Math.floor((Date.now() - runtime.activeCall.connectedAt) / 1000)
    );
    el.callDuration.textContent = formatCallDuration(seconds);
}

function formatCallDuration(totalSeconds) {
    const safeSeconds = Math.max(0, Number(totalSeconds) || 0);
    const minutes = Math.floor(safeSeconds / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (safeSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
}

function updateCallControlButtons() {
    if (!runtime.activeCall) {
        return;
    }
    if (el.toggleMicBtn) {
        const muted = Boolean(runtime.activeCall.muted);
        el.toggleMicBtn.textContent = muted ? "🔇 Выкл. микрофон" : "🎤 Микрофон";
        el.toggleMicBtn.classList.toggle("is-active", muted);
    }
    if (el.toggleCameraBtn) {
        const isVideoCall = runtime.activeCall.type === "video";
        el.toggleCameraBtn.disabled = !isVideoCall;
        if (!isVideoCall) {
            el.toggleCameraBtn.textContent = "📷 Камера";
            el.toggleCameraBtn.classList.remove("is-active");
            return;
        }
        const cameraOff = Boolean(runtime.activeCall.cameraOff);
        el.toggleCameraBtn.textContent = cameraOff ? "🚫 Камера выкл." : "📷 Камера";
        el.toggleCameraBtn.classList.toggle("is-active", cameraOff);
    }
}

function toggleCallMicrophone() {
    if (!runtime.activeCall) {
        return;
    }
    runtime.activeCall.muted = !runtime.activeCall.muted;
    updateCallControlButtons();
}

function toggleCallCamera() {
    if (!runtime.activeCall || runtime.activeCall.type !== "video") {
        return;
    }
    runtime.activeCall.cameraOff = !runtime.activeCall.cameraOff;
    updateCallControlButtons();
}

function endActiveCall(options = {}) {
    if (!runtime.activeCall) {
        const node = document.getElementById("callModal");
        if (node) {
            node.classList.add("hidden");
        }
        return;
    }

    const notify = options.notify !== false;
    const call = runtime.activeCall;
    if (runtime.callTimerId) {
        clearInterval(runtime.callTimerId);
    }
    if (runtime.callConnectTimerId) {
        clearTimeout(runtime.callConnectTimerId);
    }
    runtime.callTimerId = null;
    runtime.callConnectTimerId = null;
    runtime.activeCall = null;

    const node = document.getElementById("callModal");
    if (node) {
        node.classList.add("hidden");
    }

    const chat = state.chats.find((item) => item.id === call.chatId);
    const currentUser = getCurrentUser();
    if (chat && currentUser && chat.participants.includes(currentUser.id)) {
        const connectedSeconds = call.connectedAt
            ? Math.max(0, Math.floor((Date.now() - call.connectedAt) / 1000))
            : 0;
        const hasConnection = Boolean(call.connectedAt);
        const icon = call.type === "video" ? "🎥" : "📞";
        const label = call.type === "video" ? "Видеозвонок" : "Аудиозвонок";
        const suffix = hasConnection
            ? `• ${formatCallDuration(connectedSeconds)}`
            : "• без ответа";
        chat.messages.push({
            id: uid("m"),
            senderId: currentUser.id,
            text: `${icon} ${label} ${suffix}`,
            attachments: [],
            reactions: {},
            createdAt: Date.now()
        });
        chat.updatedAt = Date.now();
        saveState();
    }

    renderApp();
    if (notify) {
        showToast("Звонок завершен.");
    }
}

function onCreatePrivateChat() {
    const currentUser = getCurrentUser();
    const selectedUserId = el.existingContactSelect.value;
    let targetUserId = selectedUserId;

    if (!targetUserId) {
        const name = (el.newContactNameInput.value || "").trim();
        const phone = normalizePhone(el.newContactPhoneInput.value);
        if (name.length < 2 || !isValidPhone(phone)) {
            showToast("Заполните контакт или выберите существующего.");
            return;
        }

        const existingByPhone = state.users.find((user) => user.phone === phone);
        if (existingByPhone) {
            targetUserId = existingByPhone.id;
        } else {
            const newUser = {
                id: uid("u"),
                phone,
                name,
                username: ensureUniqueUsername(sanitizeUsername(name)),
                about: "Новый контакт",
                avatar: "",
                color: pickColor(state.users.length + 9),
                online: Math.random() > 0.4,
                lastSeen: Date.now() - Math.floor(Math.random() * 1000 * 60 * 120)
            };
            state.users.push(newUser);
            targetUserId = newUser.id;
        }
    }

    if (!targetUserId || targetUserId === currentUser.id) {
        showToast("Нельзя создать чат с самим собой.");
        return;
    }

    const chat = createOrGetPrivateChat(currentUser.id, targetUserId);
    chat.unreadCount = 0;
    state.activeChatId = chat.id;
    saveState();

    closeModal("newChatModal");
    el.newContactNameInput.value = "";
    el.newContactPhoneInput.value = "";
    showToast("Личный чат создан.");
    renderApp();
}

function onCreateGroup() {
    const currentUser = getCurrentUser();
    const title = (el.groupNameInput.value || "").trim();
    const description = (el.groupDescInput.value || "").trim();
    const checked = Array.from(
        el.groupMembersChecklist.querySelectorAll("input[type='checkbox']:checked")
    ).map((node) => node.value);

    if (title.length < 2) {
        showToast("Укажите название группы.");
        return;
    }

    if (checked.length === 0) {
        showToast("Добавьте хотя бы одного участника.");
        return;
    }

    const participants = unique([currentUser.id, ...checked]);
    const newChat = {
        id: uid("c"),
        type: "group",
        title,
        description: description || "Групповой чат",
        color: pickColor(state.chats.length + 4),
        participants,
        adminIds: [currentUser.id],
        messages: [
            {
                id: uid("m"),
                senderId: currentUser.id,
                text: "Группа создана.",
                attachments: [],
                reactions: {},
                createdAt: Date.now()
            }
        ],
        pinned: false,
        muted: false,
        unreadCount: 0,
        updatedAt: Date.now()
    };

    state.chats.push(newChat);
    state.activeChatId = newChat.id;
    saveState();

    closeModal("newGroupModal");
    el.groupNameInput.value = "";
    el.groupDescInput.value = "";
    showToast("Группа создана.");
    renderApp();
}

function onSaveProfile() {
    const user = getCurrentUser();
    if (!user) {
        return;
    }

    const name = (el.profileNameInput.value || "").trim();
    const username = sanitizeUsername(el.profileUsernameInput.value || "");
    const about = (el.profileAboutInput.value || "").trim();
    const selectedTheme =
        el.profileThemeSelect && el.profileThemeSelect.value === "dark"
            ? "dark"
            : "light";

    if (name.length < 2) {
        showToast("Имя должно быть минимум из 2 символов.");
        return;
    }

    if (!username) {
        showToast("Username не может быть пустым.");
        return;
    }

    const duplicate = state.users.find(
        (item) => item.username === username && item.id !== user.id
    );
    if (duplicate) {
        showToast("Этот username уже занят.");
        return;
    }

    user.name = name;
    user.username = username;
    user.about = about || user.about;
    setTheme(selectedTheme, { persist: true });
    saveState();
    closeModal("profileModal");
    showToast("Профиль обновлен.");
    renderApp();
}

async function onSendMessage(event) {
    event.preventDefault();
    const chat = getActiveChat();
    const currentUser = getCurrentUser();
    if (!chat || !currentUser) {
        return;
    }

    const text = (el.messageInput.value || "").trim();
    const attachments = runtime.pendingAttachments.slice();
    const editing = runtime.editingMessage;
    if (!text && attachments.length === 0) {
        return;
    }

    if (editing && editing.chatId !== chat.id) {
        cancelMessageEditing({ silent: true });
    }

    if (runtime.editingMessage) {
        if (!text) {
            showToast("Текст сообщения не может быть пустым.");
            return;
        }
        if (attachments.length > 0) {
            showToast("Для редактирования удалите новые вложения.");
            return;
        }
        try {
            await apiRequest("/api/messages/update", {
                method: "POST",
                body: {
                    chatId: chat.id,
                    messageId: runtime.editingMessage.messageId,
                    editorId: currentUser.id,
                    text
                }
            });
            el.messageInput.value = "";
            el.messageInput.style.height = "";
            cancelMessageEditing({ silent: true });
            await syncFromServer({ silent: true });
            renderApp();
            showToast("Сообщение изменено.");
        } catch (error) {
            showToast("Не удалось изменить сообщение.");
        }
        return;
    }

    try {
        await apiRequest("/api/messages/send", {
            method: "POST",
            body: {
                chatId: chat.id,
                senderId: currentUser.id,
                text,
                attachments
            }
        });
        runtime.pendingAttachments = [];
        el.messageInput.value = "";
        el.messageInput.style.height = "";
        renderAttachmentList();
        await syncFromServer({ silent: true });
        renderApp();
        simulateIncomingReply(chat, text);
    } catch (error) {
        showToast("Не удалось отправить сообщение через сервер.");
    }
}

function onFilesSelected(event) {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) {
        return;
    }

    const allowed = files.slice(0, 5);
    allowed.forEach((file) => {
        runtime.pendingAttachments.push({
            id: uid("f"),
            name: file.name,
            size: file.size
        });
    });
    event.target.value = "";
    renderAttachmentList();
}

function onAttachmentRemove(event) {
    const button = event.target.closest("[data-remove-attachment-id]");
    if (!button) {
        return;
    }

    const targetId = button.dataset.removeAttachmentId;
    runtime.pendingAttachments = runtime.pendingAttachments.filter(
        (file) => file.id !== targetId
    );
    renderAttachmentList();
}

function renderAttachmentList() {
    if (runtime.pendingAttachments.length === 0) {
        el.attachmentList.innerHTML = "";
        return;
    }

    el.attachmentList.innerHTML = runtime.pendingAttachments
        .map(
            (file) => `
            <div class="attachment-chip">
                <span>${esc(file.name)}</span>
                <button type="button" data-remove-attachment-id="${esc(file.id)}">×</button>
            </div>
        `
        )
        .join("");
}

function onMessagesContainerClick(event) {
    const reactionButton = event.target.closest("[data-reaction-msg-id]");
    if (reactionButton) {
        onReactionClick(event);
        return;
    }

    const trigger = event.target.closest("[data-message-menu-trigger]");
    if (!trigger) {
        return;
    }
    event.preventDefault();
    event.stopPropagation();
    clearMessageLongPress();
    openMessageActionMenu(trigger.dataset.messageChatId, trigger.dataset.messageId, {
        triggerNode: trigger
    });
}

function onMessagesPointerDown(event) {
    if (event.pointerType !== "touch") {
        return;
    }
    if (event.target.closest("[data-reaction-msg-id]")) {
        return;
    }
    const messageNode = event.target.closest("[data-message-id][data-message-chat-id]");
    if (!messageNode) {
        return;
    }
    clearMessageLongPress();
    runtime.messageLongPress = {
        messageId: messageNode.dataset.messageId || "",
        chatId: messageNode.dataset.messageChatId || "",
        startX: event.clientX,
        startY: event.clientY,
        timerId: window.setTimeout(() => {
            const pending = runtime.messageLongPress;
            runtime.messageLongPress = null;
            if (!pending) {
                return;
            }
            openMessageActionMenu(pending.chatId, pending.messageId, {
                point: { x: pending.startX, y: pending.startY }
            });
        }, 430)
    };
}

function onMessagesPointerMove(event) {
    if (!runtime.messageLongPress) {
        return;
    }
    const deltaX = Math.abs(event.clientX - runtime.messageLongPress.startX);
    const deltaY = Math.abs(event.clientY - runtime.messageLongPress.startY);
    if (deltaX > 12 || deltaY > 12) {
        clearMessageLongPress();
    }
}

function clearMessageLongPress() {
    if (!runtime.messageLongPress) {
        return;
    }
    if (runtime.messageLongPress.timerId) {
        clearTimeout(runtime.messageLongPress.timerId);
    }
    runtime.messageLongPress = null;
}

function openMessageActionMenu(chatId, messageId, options = {}) {
    const chat = state.chats.find((item) => item.id === chatId);
    if (!chat) {
        return;
    }
    const message =
        Array.isArray(chat.messages) && chat.messages.length > 0
            ? chat.messages.find((item) => item.id === messageId)
            : null;
    const currentUser = getCurrentUser();
    if (!message || !currentUser || !chat.participants.includes(currentUser.id)) {
        return;
    }

    if (
        runtime.messageMenu &&
        runtime.messageMenu.chatId === chatId &&
        runtime.messageMenu.messageId === messageId
    ) {
        closeMessageActionMenu();
        return;
    }

    runtime.messageMenu = {
        chatId,
        messageId,
        openedAt: Date.now(),
        showAllReactions: false
    };
    renderMessageActionMenu(chat, message, currentUser);
    positionMessageActionMenu(options);
}

function renderMessageActionMenu(chat, message, currentUser) {
    if (!el.messageActionMenu) {
        return;
    }
    const canEdit = message.senderId === currentUser.id;
    const canDelete =
        message.senderId === currentUser.id ||
        ((chat.adminIds || []).includes(currentUser.id) && chat.type === "group");
    const pinLabel = message.pinned ? "Открепить" : "Закрепить";
    const showAllReactions = Boolean(
        runtime.messageMenu && runtime.messageMenu.showAllReactions
    );
    const moreButtonClass = showAllReactions ? " is-active" : "";

    const popularReactionButtons = POPULAR_REACTION_SET.map(
        (emoji) => `
            <button
                class="message-reaction-quick-btn"
                type="button"
                data-message-quick-reaction="${esc(emoji)}"
                title="Поставить реакцию ${emoji}"
                aria-label="Поставить реакцию ${emoji}"
            >
                ${esc(emoji)}
            </button>
        `
    ).join("");
    const allReactionsPicker = showAllReactions ? renderAllReactionsPicker() : "";

    el.messageActionMenu.innerHTML = `
        <div class="message-reaction-strip" role="group" aria-label="Популярные реакции">
            ${popularReactionButtons}
            <button
                class="message-reaction-more-btn${moreButtonClass}"
                type="button"
                data-message-open-full-reactions="1"
                title="Открыть все реакции"
                aria-label="Открыть все реакции"
            >
                ...
            </button>
        </div>
        ${allReactionsPicker}
        <button class="message-action-btn" type="button" data-message-action="copy">Копировать</button>
        <button class="message-action-btn" type="button" data-message-action="edit" ${canEdit ? "" : "disabled"}>Изменить</button>
        <button class="message-action-btn" type="button" data-message-action="pin">${pinLabel}</button>
        <button class="message-action-btn" type="button" data-message-action="forward">Переслать</button>
        <button class="message-action-btn danger" type="button" data-message-action="delete" ${canDelete ? "" : "disabled"}>Удалить</button>
    `;
    el.messageActionMenu.classList.remove("hidden");

    const nodes = el.messagesContainer.querySelectorAll(
        "[data-message-id][data-message-chat-id]"
    );
    nodes.forEach((node) => {
        const isActive =
            node.dataset.messageId === message.id &&
            node.dataset.messageChatId === chat.id;
        node.classList.toggle("is-menu-open", isActive);
    });
}

function renderAllReactionsPicker() {
    const groupsHtml = REACTION_GROUPS.map((group) => {
        const items = Array.isArray(group.items) ? group.items : [];
        const buttons = items
            .map(
                (emoji) => `
                    <button
                        class="message-reaction-picker-btn"
                        type="button"
                        data-message-quick-reaction="${esc(emoji)}"
                        title="Поставить реакцию ${emoji}"
                        aria-label="Поставить реакцию ${emoji}"
                    >
                        ${esc(emoji)}
                    </button>
                `
            )
            .join("");
        return `
            <section class="message-reaction-group">
                <h5 class="message-reaction-group-title">${esc(group.title || "")}</h5>
                <div class="message-reaction-group-grid">
                    ${buttons}
                </div>
            </section>
        `;
    }).join("");

    return `
        <div class="message-reaction-picker" role="dialog" aria-label="Все реакции">
            ${groupsHtml}
        </div>
    `;
}

function positionMessageActionMenu(options = {}) {
    if (!el.messageActionMenu || el.messageActionMenu.classList.contains("hidden")) {
        return;
    }
    let x = 12;
    let y = 12;
    if (options.triggerNode) {
        const rect = options.triggerNode.getBoundingClientRect();
        x = rect.right + 4;
        y = rect.bottom + 8;
    } else if (
        options.point &&
        Number.isFinite(options.point.x) &&
        Number.isFinite(options.point.y)
    ) {
        x = options.point.x + 8;
        y = options.point.y + 8;
    }

    el.messageActionMenu.style.left = "0px";
    el.messageActionMenu.style.top = "0px";
    const menuWidth = el.messageActionMenu.offsetWidth || 210;
    const menuHeight = el.messageActionMenu.offsetHeight || 180;
    const margin = 8;
    const maxX = window.innerWidth - menuWidth - margin;
    const maxY = window.innerHeight - menuHeight - margin;
    const nextX = Math.max(margin, Math.min(x, maxX));
    const nextY = Math.max(margin, Math.min(y, maxY));
    el.messageActionMenu.style.left = `${nextX}px`;
    el.messageActionMenu.style.top = `${nextY}px`;
}

function keepMessageActionMenuInViewport() {
    if (!el.messageActionMenu || el.messageActionMenu.classList.contains("hidden")) {
        return;
    }
    const margin = 8;
    const menuWidth = el.messageActionMenu.offsetWidth || 210;
    const menuHeight = el.messageActionMenu.offsetHeight || 180;
    const maxX = window.innerWidth - menuWidth - margin;
    const maxY = window.innerHeight - menuHeight - margin;
    const currentX = Number.parseFloat(el.messageActionMenu.style.left || "0");
    const currentY = Number.parseFloat(el.messageActionMenu.style.top || "0");
    const safeX = Number.isFinite(currentX) ? currentX : margin;
    const safeY = Number.isFinite(currentY) ? currentY : margin;
    const nextX = Math.max(margin, Math.min(safeX, maxX));
    const nextY = Math.max(margin, Math.min(safeY, maxY));
    el.messageActionMenu.style.left = `${nextX}px`;
    el.messageActionMenu.style.top = `${nextY}px`;
}

function closeMessageActionMenu() {
    if (!el.messageActionMenu) {
        return;
    }
    el.messageActionMenu.classList.add("hidden");
    el.messageActionMenu.innerHTML = "";
    const nodes = el.messagesContainer.querySelectorAll(
        "[data-message-id][data-message-chat-id]"
    );
    nodes.forEach((node) => node.classList.remove("is-menu-open"));
    runtime.messageMenu = null;
}

async function onMessageActionMenuClick(event) {
    const openAllReactionsButton = event.target.closest(
        "[data-message-open-full-reactions]"
    );
    if (openAllReactionsButton && runtime.messageMenu) {
        event.preventDefault();
        event.stopPropagation();
        runtime.messageMenu.showAllReactions = !Boolean(
            runtime.messageMenu.showAllReactions
        );
        const chatId = runtime.messageMenu.chatId;
        const messageId = runtime.messageMenu.messageId;
        const chat = state.chats.find((item) => item.id === chatId);
        const message = chat
            ? (chat.messages || []).find((item) => item.id === messageId)
            : null;
        const currentUser = getCurrentUser();
        if (!chat || !message || !currentUser) {
            closeMessageActionMenu();
            return;
        }
        renderMessageActionMenu(chat, message, currentUser);
        keepMessageActionMenuInViewport();
        return;
    }

    const quickReactionButton = event.target.closest("[data-message-quick-reaction]");
    if (quickReactionButton && runtime.messageMenu) {
        const chatId = runtime.messageMenu.chatId;
        const messageId = runtime.messageMenu.messageId;
        const emoji = quickReactionButton.dataset.messageQuickReaction || "";
        closeMessageActionMenu();
        await onQuickReactionFromMenu(chatId, messageId, emoji);
        return;
    }

    const button = event.target.closest("[data-message-action]");
    if (!button || !runtime.messageMenu) {
        return;
    }
    event.preventDefault();
    const action = button.dataset.messageAction || "";
    const chatId = runtime.messageMenu.chatId;
    const messageId = runtime.messageMenu.messageId;

    if (action === "copy") {
        await onCopyMessage(chatId, messageId);
        closeMessageActionMenu();
        return;
    }
    if (action === "edit") {
        startMessageEditing(chatId, messageId);
        closeMessageActionMenu();
        return;
    }
    if (action === "delete") {
        closeMessageActionMenu();
        await onDeleteMessage(chatId, messageId);
        return;
    }
    if (action === "pin") {
        closeMessageActionMenu();
        await onToggleMessagePin(chatId, messageId);
        return;
    }
    if (action === "forward") {
        closeMessageActionMenu();
        openForwardModalForMessage(chatId, messageId);
    }
}

async function onQuickReactionFromMenu(chatId, messageId, emoji) {
    const currentUser = getCurrentUser();
    if (!chatId || !messageId || !emoji || !currentUser) {
        return;
    }
    try {
        await apiRequest("/api/messages/reaction", {
            method: "POST",
            body: {
                chatId,
                messageId,
                emoji,
                userId: currentUser.id
            }
        });
        await syncFromServer({ silent: true });
        renderActiveChat();
    } catch (error) {
        showToast("Не удалось поставить реакцию.");
    }
}

async function onCopyMessage(chatId, messageId) {
    const chat = state.chats.find((item) => item.id === chatId);
    if (!chat) {
        return;
    }
    const message = (chat.messages || []).find((item) => item.id === messageId);
    if (!message) {
        return;
    }
    const textParts = [];
    if (message.text) {
        textParts.push(message.text);
    }
    if (Array.isArray(message.attachments) && message.attachments.length > 0) {
        const attachmentNames = message.attachments
            .map((item) => item.name || "file")
            .join(", ");
        textParts.push(`Вложения: ${attachmentNames}`);
    }
    const content = textParts.join("\n").trim();
    if (!content) {
        showToast("Нечего копировать.");
        return;
    }
    try {
        await copyTextToClipboard(content);
        showToast("Сообщение скопировано.");
    } catch (error) {
        showToast("Не удалось скопировать сообщение.");
    }
}

async function copyTextToClipboard(text) {
    const safeText = String(text || "");
    if (
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === "function"
    ) {
        await navigator.clipboard.writeText(safeText);
        return;
    }
    const temp = document.createElement("textarea");
    temp.value = safeText;
    temp.setAttribute("readonly", "readonly");
    temp.style.position = "fixed";
    temp.style.left = "-9999px";
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
}

async function onDeleteMessage(chatId, messageId) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        return;
    }
    const confirmed = window.confirm("Удалить это сообщение?");
    if (!confirmed) {
        return;
    }
    try {
        await apiRequest("/api/messages/delete", {
            method: "POST",
            body: {
                chatId,
                messageId,
                userId: currentUser.id
            }
        });
        if (
            runtime.editingMessage &&
            runtime.editingMessage.chatId === chatId &&
            runtime.editingMessage.messageId === messageId
        ) {
            cancelMessageEditing({ silent: true });
        }
        await syncFromServer({ silent: true });
        renderApp();
        showToast("Сообщение удалено.");
    } catch (error) {
        showToast("Не удалось удалить сообщение.");
    }
}

function startMessageEditing(chatId, messageId) {
    const chat = state.chats.find((item) => item.id === chatId);
    const currentUser = getCurrentUser();
    if (!chat || !currentUser) {
        return;
    }
    const message = (chat.messages || []).find((item) => item.id === messageId);
    if (!message) {
        showToast("Сообщение не найдено.");
        return;
    }
    if (message.senderId !== currentUser.id) {
        showToast("Можно изменять только свои сообщения.");
        return;
    }
    runtime.editingMessage = { chatId, messageId };
    runtime.pendingAttachments = [];
    renderAttachmentList();
    el.messageInput.value = message.text || "";
    autoResizeComposer({ target: el.messageInput });
    updateComposerMode();
    el.messageInput.focus();
    const length = el.messageInput.value.length;
    el.messageInput.setSelectionRange(length, length);
}

function cancelMessageEditing(options = {}) {
    runtime.editingMessage = null;
    if (options.keepInput !== true) {
        el.messageInput.value = "";
        el.messageInput.style.height = "";
    }
    updateComposerMode();
    if (!options.silent) {
        showToast("Редактирование отменено.");
    }
}

function updateComposerMode() {
    const editing = runtime.editingMessage;
    if (el.sendMessageBtn) {
        el.sendMessageBtn.textContent = editing ? "Сохранить" : "Отправить";
    }
    if (el.messageInput) {
        el.messageInput.placeholder = editing
            ? "Измените сообщение..."
            : "Введите сообщение...";
    }
    if (!el.messageEditHint || !el.messageEditHintText) {
        return;
    }
    if (!editing) {
        el.messageEditHint.classList.add("hidden");
        return;
    }
    const chat = state.chats.find((item) => item.id === editing.chatId);
    const message = chat
        ? (chat.messages || []).find((item) => item.id === editing.messageId)
        : null;
    const previewText = message && message.text ? message.text : "Сообщение";
    const previewShort =
        previewText.length > 70 ? `${previewText.slice(0, 70)}...` : previewText;
    el.messageEditHintText.textContent = `Редактирование: ${previewShort}`;
    el.messageEditHint.classList.remove("hidden");
}

async function onToggleMessagePin(chatId, messageId) {
    const chat = state.chats.find((item) => item.id === chatId);
    const currentUser = getCurrentUser();
    if (!chat || !currentUser) {
        return;
    }
    const message = (chat.messages || []).find((item) => item.id === messageId);
    if (!message) {
        return;
    }
    const nextPinned = !Boolean(message.pinned);
    try {
        await apiRequest("/api/messages/pin", {
            method: "POST",
            body: {
                chatId,
                messageId,
                userId: currentUser.id,
                pinned: nextPinned
            }
        });
        await syncFromServer({ silent: true });
        renderApp();
        showToast(nextPinned ? "Сообщение закреплено." : "Сообщение откреплено.");
    } catch (error) {
        showToast("Не удалось изменить закрепление сообщения.");
    }
}

function openForwardModalForMessage(chatId, messageId) {
    const sourceChat = state.chats.find((item) => item.id === chatId);
    if (!sourceChat) {
        return;
    }
    const message = (sourceChat.messages || []).find((item) => item.id === messageId);
    if (!message) {
        return;
    }
    runtime.forwardDraft = {
        chatId,
        messageId
    };
    populateForwardChatSelect(chatId);
    const preview = message.text
        ? message.text
        : (message.attachments || []).map((item) => item.name || "file").join(", ");
    const shortPreview =
        preview && preview.length > 110 ? `${preview.slice(0, 110)}...` : preview;
    el.forwardMessagePreview.textContent = shortPreview
        ? `Сообщение: ${shortPreview}`
        : "Переслать это сообщение.";
    openModal("forwardModal");
}

function populateForwardChatSelect(sourceChatId) {
    const chats = getCurrentUserChats();
    if (!el.forwardChatSelect) {
        return;
    }
    if (!Array.isArray(chats) || chats.length === 0) {
        el.forwardChatSelect.innerHTML = '<option value="">Нет доступных чатов</option>';
        return;
    }
    el.forwardChatSelect.innerHTML = chats
        .map((chat) => {
            const info = getChatVisualInfo(chat);
            return `<option value="${esc(chat.id)}">${esc(info.title)}</option>`;
        })
        .join("");
    const fallback = chats.find((chat) => chat.id !== sourceChatId) || chats[0];
    el.forwardChatSelect.value = fallback ? fallback.id : chats[0].id;
}

async function onForwardConfirm() {
    const draft = runtime.forwardDraft;
    const currentUser = getCurrentUser();
    if (!draft || !currentUser) {
        return;
    }
    const targetChatId = el.forwardChatSelect ? el.forwardChatSelect.value : "";
    if (!targetChatId) {
        showToast("Выберите чат для пересылки.");
        return;
    }
    const sourceChat = state.chats.find((item) => item.id === draft.chatId);
    const sourceMessage = sourceChat
        ? (sourceChat.messages || []).find((item) => item.id === draft.messageId)
        : null;
    if (!sourceChat || !sourceMessage) {
        showToast("Исходное сообщение не найдено.");
        return;
    }
    const sourceSender = getUserById(sourceMessage.senderId);
    const sourceSenderName = sourceSender ? sourceSender.name : "Unknown";
    const forwardedText = sourceMessage.text
        ? `↪ Переслано от ${sourceSenderName}\n${sourceMessage.text}`
        : `↪ Переслано от ${sourceSenderName}`;
    const copiedAttachments = (sourceMessage.attachments || []).map((attachment) => ({
        id: uid("f"),
        name: attachment.name || "file",
        size: Number(attachment.size || 0)
    }));

    try {
        await apiRequest("/api/messages/send", {
            method: "POST",
            body: {
                chatId: targetChatId,
                senderId: currentUser.id,
                text: forwardedText,
                attachments: copiedAttachments
            }
        });
        runtime.forwardDraft = null;
        state.activeChatId = targetChatId;
        closeModal("forwardModal");
        await syncFromServer({ silent: true });
        renderApp();
        showToast("Сообщение переслано.");
    } catch (error) {
        showToast("Не удалось переслать сообщение.");
    }
}

async function onReactionClick(event) {
    const button = event.target.closest("[data-reaction-msg-id]");
    if (!button) {
        return;
    }

    const chatId = button.dataset.reactionChatId;
    const messageId = button.dataset.reactionMsgId;
    const emoji = button.dataset.reactionEmoji;
    const currentUser = getCurrentUser();
    if (!chatId || !messageId || !emoji || !currentUser) {
        return;
    }

    try {
        await apiRequest("/api/messages/reaction", {
            method: "POST",
            body: {
                chatId,
                messageId,
                emoji,
                userId: currentUser.id
            }
        });
        await syncFromServer({ silent: true });
        renderActiveChat();
    } catch (error) {
        showToast("Не удалось отправить реакцию.");
    }
}

function toggleChatFlag(flag) {
    const chat = getActiveChat();
    if (!chat) {
        return;
    }

    chat[flag] = !chat[flag];
    saveState();
    renderApp();
}

function openInfoPanel() {
    if (!getActiveChat()) {
        return;
    }
    renderInfoPanel();
    el.layoutRoot.classList.add("show-info");
}

function closeInfoPanel() {
    el.layoutRoot.classList.remove("show-info");
}

function toggleSidebar() {
    el.layoutRoot.classList.toggle("show-sidebar");
}

function toggleCreateMenu(event) {
    if (runtime.sidebarSection !== "chats") {
        closeCreateMenu();
        return;
    }
    if (event) {
        event.stopPropagation();
    }
    el.createMenuPopover.classList.toggle("hidden");
}

function closeCreateMenu() {
    el.createMenuPopover.classList.add("hidden");
}

function closeAllModals() {
    closeMessageActionMenu();
    clearMessageLongPress();
    endActiveCall({ notify: false });
    closeModal("newChatModal");
    closeModal("newGroupModal");
    closeModal("profileModal");
    closeModal("mediaLibraryModal");
    closeModal("forwardModal");
    closeModal("avatarCropModal");
    closeModal("avatarPreviewModal");
    closeModal("privacySettingsModal");
    closeModal("powerSettingsModal");
    closeModal("appearanceSettingsModal");
}

function onLogout() {
    if (runtime.settingsAutoSaveTimer) {
        clearTimeout(runtime.settingsAutoSaveTimer);
        runtime.settingsAutoSaveTimer = null;
    }
    closeMessageActionMenu();
    clearMessageLongPress();
    cancelMessageEditing({ silent: true });
    if (runtime.activeCall) {
        endActiveCall({ notify: false });
    }
    const user = getCurrentUser();
    if (user) {
        user.online = false;
        user.lastSeen = Date.now();
    }
    state.session.userId = null;
    state.activeChatId = null;
    saveState();
    persistSession();
    enterAuth();
}

function onAddParticipant() {
    const chat = getActiveChat();
    const currentUser = getCurrentUser();
    if (!chat || chat.type !== "group" || !currentUser) {
        return;
    }

    const canManage = (chat.adminIds || []).includes(currentUser.id);
    if (!canManage) {
        showToast("Только администратор может менять участников.");
        return;
    }

    const userId = el.addParticipantSelect.value;
    if (!userId) {
        return;
    }

    if (!chat.participants.includes(userId)) {
        chat.participants.push(userId);
        const user = getUserById(userId);
        chat.messages.push({
            id: uid("m"),
            senderId: currentUser.id,
            text: `${user ? user.name : "Участник"} добавлен(а) в группу.`,
            attachments: [],
            reactions: {},
            createdAt: Date.now()
        });
        chat.updatedAt = Date.now();
        saveState();
        renderApp();
        showToast("Участник добавлен.");
    }
}

function onRemoveParticipant(event) {
    const button = event.target.closest("[data-remove-user-id]");
    if (!button) {
        return;
    }

    const chat = getActiveChat();
    const currentUser = getCurrentUser();
    if (!chat || chat.type !== "group" || !currentUser) {
        return;
    }

    const targetUserId = button.dataset.removeUserId;
    const canManage = (chat.adminIds || []).includes(currentUser.id);
    if (!canManage) {
        showToast("Только администратор может удалять участников.");
        return;
    }

    chat.participants = chat.participants.filter((id) => id !== targetUserId);
    chat.adminIds = (chat.adminIds || []).filter((id) => id !== targetUserId);
    const user = getUserById(targetUserId);
    chat.messages.push({
        id: uid("m"),
        senderId: currentUser.id,
        text: `${user ? user.name : "Участник"} удален(а) из группы.`,
        attachments: [],
        reactions: {},
        createdAt: Date.now()
    });
    chat.updatedAt = Date.now();
    saveState();
    renderApp();
    showToast("Участник удален.");
}

function onChatListClick(event) {
    const contactActionButton = event.target.closest("[data-contact-action]");
    if (contactActionButton) {
        const userId = contactActionButton.dataset.userId || "";
        const action = contactActionButton.dataset.contactAction || "";
        const chat = getOrCreatePrivateChatWithUser(userId);
        if (!chat) {
            showToast("Не удалось открыть контакт.");
            return;
        }
        state.activeChatId = chat.id;
        saveState();
        if (action === "audio-call") {
            startCall("audio", { chatId: chat.id });
        } else if (action === "video-call") {
            startCall("video", { chatId: chat.id });
        } else {
            setSidebarSection("chats");
        }
        renderApp();
        return;
    }

    const settingsActionButton = event.target.closest("[data-settings-action]");
    if (settingsActionButton) {
        const action = settingsActionButton.dataset.settingsAction || "";
        if (action === "open-avatar-preview") {
            openAvatarPreviewModal();
            return;
        }
        if (action === "pick-avatar") {
            const avatarInput = el.chatList.querySelector("#settingsAvatarInput");
            if (avatarInput) {
                avatarInput.click();
            }
            return;
        }
        if (action === "open-privacy-settings") {
            openPrivacySettingsModal();
            return;
        }
        if (action === "open-power-settings") {
            openPowerSettingsModal();
            return;
        }
        if (action === "open-appearance-settings") {
            openAppearanceSettingsModal();
            return;
        }
        if (action === "logout") {
            onLogout();
            return;
        }
    }

    const item = event.target.closest("[data-chat-id]");
    if (!item) {
        return;
    }

    const chatId = item.dataset.chatId;
    state.activeChatId = chatId;
    if (runtime.sidebarSection !== "chats") {
        runtime.sidebarSection = "chats";
        runtime.sidebarQuery = "";
        el.chatSearchInput.value = "";
    }
    const chat = getActiveChat();
    if (chat) {
        chat.unreadCount = 0;
    }
    saveState();
    el.layoutRoot.classList.remove("show-sidebar");
    closeInfoPanel();
    renderApp();
}

function onChatListChange(event) {
    const target = event.target;
    if (!target) {
        return;
    }

    if (target.id === "settingsNameInput") {
        applySettingsFromSidebar({ silent: false, scope: "name" });
        return;
    }
    if (target.id === "settingsUsernameInput") {
        applySettingsFromSidebar({ silent: false, scope: "username" });
        return;
    }
    if (target.id === "settingsAboutInput") {
        applySettingsFromSidebar({ silent: true, scope: "about" });
        return;
    }
    if (target.id === "settingsThemeSelect") {
        applySettingsFromSidebar({ silent: true, scope: "theme" });
        return;
    }

    const avatarInput = event.target.closest("#settingsAvatarInput");
    if (!avatarInput) {
        return;
    }
    const file = avatarInput.files && avatarInput.files[0];
    avatarInput.value = "";
    if (!file) {
        return;
    }
    prepareAvatarCrop(file)
        .then(() => {
            openModal("avatarCropModal");
        })
        .catch((error) => {
            showToast(error && error.message ? error.message : "Не удалось загрузить фото.");
        });
}

function onChatListInput(event) {
    const target = event.target;
    if (!target) {
        return;
    }

    if (target.id === "settingsNameInput") {
        updateSettingsAvatarPreview();
        scheduleSidebarAutoSave();
        return;
    }
    if (target.id === "settingsUsernameInput" || target.id === "settingsAboutInput") {
        scheduleSidebarAutoSave();
    }
}

function scheduleSidebarAutoSave() {
    if (runtime.settingsAutoSaveTimer) {
        clearTimeout(runtime.settingsAutoSaveTimer);
    }
    runtime.settingsAutoSaveTimer = setTimeout(() => {
        runtime.settingsAutoSaveTimer = null;
        applySettingsFromSidebar({ silent: true });
    }, 260);
}

function applySettingsFromSidebar(options = {}) {
    const user = getCurrentUser();
    if (!user) {
        return;
    }
    const nameInput = el.chatList.querySelector("#settingsNameInput");
    const usernameInput = el.chatList.querySelector("#settingsUsernameInput");
    const aboutInput = el.chatList.querySelector("#settingsAboutInput");
    const themeSelect = el.chatList.querySelector("#settingsThemeSelect");
    if (!nameInput || !usernameInput || !aboutInput || !themeSelect) {
        return;
    }

    const scope = options.scope || "all";
    const silent = Boolean(options.silent);
    let changed = false;

    if (scope === "all" || scope === "name") {
        const name = String(nameInput.value || "").trim();
        if (name.length >= 2) {
            if (user.name !== name) {
                user.name = name;
                changed = true;
            }
        } else if (!silent) {
            showToast("Имя должно быть минимум из 2 символов.");
        }
    }

    if (scope === "all" || scope === "username") {
        const rawUsername = String(usernameInput.value || "");
        const username = sanitizeUsername(rawUsername);
        if (username !== rawUsername) {
            usernameInput.value = username;
        }
        if (username) {
            const duplicate = state.users.find(
                (item) => item.username === username && item.id !== user.id
            );
            if (duplicate) {
                if (!silent) {
                    showToast("Этот username уже занят.");
                }
            } else if (user.username !== username) {
                user.username = username;
                changed = true;
            }
        } else if (!silent) {
            showToast("Username не может быть пустым.");
        }
    }

    if (scope === "all" || scope === "about") {
        const about = String(aboutInput.value || "").trim();
        if (String(user.about || "") !== about) {
            user.about = about;
            changed = true;
        }
    }

    if (scope === "all" || scope === "theme") {
        const selectedTheme = themeSelect.value === "dark" ? "dark" : "light";
        const currentTheme = document.body.dataset.theme === "dark" ? "dark" : "light";
        if (selectedTheme !== currentTheme) {
            setTheme(selectedTheme, { persist: true });
        }
    }

    if (scope === "all" || scope === "avatar") {
        if (runtime.settingsAvatarDraft !== null) {
            const nextAvatar = String(runtime.settingsAvatarDraft || "");
            if (String(user.avatar || "") !== nextAvatar) {
                user.avatar = nextAvatar;
                changed = true;
            }
            runtime.settingsAvatarDraft = null;
        }
    }

    if (changed) {
        saveState();
    }

    updateSettingsAvatarPreview();
    syncSettingsHeaderMeta(user);
    renderCurrentUserCard();
}

function syncSettingsHeaderMeta(user) {
    const nameNode = el.chatList.querySelector(".settings-avatar-meta h4");
    if (nameNode) {
        nameNode.textContent = user.name;
    }
    const usernameNode = el.chatList.querySelector(".settings-avatar-meta p");
    if (usernameNode) {
        usernameNode.textContent = `@${user.username}`;
    }
}

function getAppearanceThemeDefaults() {
    const theme = document.body.dataset.theme === "dark" ? "dark" : "light";
    if (theme === "dark") {
        return {
            incoming: "#182641",
            outgoing: "#1a3954",
            text: "#e6edff"
        };
    }
    return {
        incoming: "#f3f7ff",
        outgoing: "#dff1ff",
        text: "#1a2550"
    };
}

function openPrivacySettingsModal() {
    const user = getCurrentUser();
    if (!user) {
        return;
    }
    const settings = getUserSettings(user);
    const hideOnlineInput = document.getElementById("privacyHideOnlineModalInput");
    const hideLastSeenInput = document.getElementById("privacyHideLastSeenModalInput");
    const readReceiptsInput = document.getElementById("privacyReadReceiptsModalInput");
    if (!hideOnlineInput || !hideLastSeenInput || !readReceiptsInput) {
        return;
    }
    hideOnlineInput.checked = Boolean(settings.privacy.hideOnlineStatus);
    hideLastSeenInput.checked = Boolean(settings.privacy.hideLastSeen);
    readReceiptsInput.checked = Boolean(settings.privacy.readReceipts);
    openModal("privacySettingsModal");
}

function onPrivacySettingsModalChange(event) {
    const target = event.target;
    if (!target) {
        return;
    }
    if (
        target.id !== "privacyHideOnlineModalInput" &&
        target.id !== "privacyHideLastSeenModalInput" &&
        target.id !== "privacyReadReceiptsModalInput"
    ) {
        return;
    }
    applyPrivacySettingsFromModal();
}

function applyPrivacySettingsFromModal() {
    const user = getCurrentUser();
    if (!user) {
        return;
    }
    const hideOnlineInput = document.getElementById("privacyHideOnlineModalInput");
    const hideLastSeenInput = document.getElementById("privacyHideLastSeenModalInput");
    const readReceiptsInput = document.getElementById("privacyReadReceiptsModalInput");
    if (!hideOnlineInput || !hideLastSeenInput || !readReceiptsInput) {
        return;
    }
    const settings = getUserSettings(user);
    let changed = false;
    const nextHideOnline = Boolean(hideOnlineInput.checked);
    const nextHideLastSeen = Boolean(hideLastSeenInput.checked);
    const nextReadReceipts = Boolean(readReceiptsInput.checked);
    if (settings.privacy.hideOnlineStatus !== nextHideOnline) {
        settings.privacy.hideOnlineStatus = nextHideOnline;
        changed = true;
    }
    if (settings.privacy.hideLastSeen !== nextHideLastSeen) {
        settings.privacy.hideLastSeen = nextHideLastSeen;
        changed = true;
    }
    if (settings.privacy.readReceipts !== nextReadReceipts) {
        settings.privacy.readReceipts = nextReadReceipts;
        changed = true;
    }
    if (changed) {
        saveState();
        renderApp();
    }
}

function openPowerSettingsModal() {
    const user = getCurrentUser();
    if (!user) {
        return;
    }
    const settings = getUserSettings(user);
    const powerSavingInput = document.getElementById("powerSavingModalInput");
    if (!powerSavingInput) {
        return;
    }
    powerSavingInput.checked = Boolean(settings.power.energySaving);
    openModal("powerSettingsModal");
}

function onPowerSettingsModalChange(event) {
    const target = event.target;
    if (!target || target.id !== "powerSavingModalInput") {
        return;
    }
    applyPowerSettingsFromModal();
}

function applyPowerSettingsFromModal() {
    const user = getCurrentUser();
    if (!user) {
        return;
    }
    const powerSavingInput = document.getElementById("powerSavingModalInput");
    if (!powerSavingInput) {
        return;
    }
    const settings = getUserSettings(user);
    const nextEnergySaving = Boolean(powerSavingInput.checked);
    if (settings.power.energySaving === nextEnergySaving) {
        return;
    }
    settings.power.energySaving = nextEnergySaving;
    saveState();
    applyCurrentUserDisplayPreferences();
    startPolling();
    showToast(nextEnergySaving ? "Энергосбережение включено." : "Энергосбережение выключено.");
}

function openAppearanceSettingsModal() {
    const user = getCurrentUser();
    if (!user) {
        return;
    }
    const settings = getUserSettings(user);
    const defaults = getAppearanceThemeDefaults();
    const appearance = settings.appearance;

    const msgInInput = document.getElementById("appearanceMsgInColorInput");
    const msgOutInput = document.getElementById("appearanceMsgOutColorInput");
    const msgTextInput = document.getElementById("appearanceMsgTextColorInput");
    const textSizeInput = document.getElementById("appearanceMsgTextSizeInput");
    const wallpaperModeInput = document.getElementById("appearanceWallpaperModeInput");
    const wallpaperPresetInput = document.getElementById("appearanceWallpaperPresetInput");
    const wallpaperColorInput = document.getElementById("appearanceWallpaperColorInput");
    if (
        !msgInInput ||
        !msgOutInput ||
        !msgTextInput ||
        !textSizeInput ||
        !wallpaperModeInput ||
        !wallpaperPresetInput ||
        !wallpaperColorInput
    ) {
        return;
    }

    msgInInput.value = appearance.messageIncomingColor || defaults.incoming;
    msgOutInput.value = appearance.messageOutgoingColor || defaults.outgoing;
    msgTextInput.value = appearance.messageTextColor || defaults.text;
    textSizeInput.value = String(
        clamp(
            Number(appearance.textSize || DEFAULT_USER_SETTINGS.appearance.textSize),
            SETTINGS_TEXT_SIZE_MIN,
            SETTINGS_TEXT_SIZE_MAX
        )
    );
    wallpaperModeInput.value = ["none", "preset", "color", "image"].includes(
        appearance.wallpaperMode
    )
        ? appearance.wallpaperMode
        : "none";
    wallpaperPresetInput.innerHTML = WALLPAPER_PRESETS.map(
        (preset) => `<option value="${esc(preset.id)}">${esc(preset.label)}</option>`
    ).join("");
    wallpaperPresetInput.value = WALLPAPER_PRESET_MAP[appearance.wallpaperPreset]
        ? appearance.wallpaperPreset
        : DEFAULT_USER_SETTINGS.appearance.wallpaperPreset;
    wallpaperColorInput.value =
        appearance.wallpaperColor || DEFAULT_USER_SETTINGS.appearance.wallpaperColor;

    updateAppearanceSettingsModalState();
    openModal("appearanceSettingsModal");
}

function updateAppearanceSettingsModalState() {
    const modalNode = document.getElementById("appearanceSettingsModal");
    if (!modalNode) {
        return;
    }
    const wallpaperModeInput = document.getElementById("appearanceWallpaperModeInput");
    if (wallpaperModeInput) {
        const mode = String(wallpaperModeInput.value || "none");
        const controls = Array.from(
            modalNode.querySelectorAll("[data-appearance-control]")
        );
        controls.forEach((node) => {
            const controlMode = node.dataset.appearanceControl || "";
            node.classList.toggle("hidden", controlMode !== mode);
        });
    }

    const textSizeInput = document.getElementById("appearanceMsgTextSizeInput");
    const textSizeValue = document.getElementById("appearanceMsgTextSizeValue");
    if (textSizeInput && textSizeValue) {
        textSizeValue.textContent = `${textSizeInput.value}px`;
    }

    const user = getCurrentUser();
    const settings = getUserSettings(user);
    const hasImage = Boolean(settings.appearance.wallpaperImage);
    const removeButton = document.getElementById("appearanceRemoveWallpaperBtn");
    if (removeButton) {
        removeButton.disabled = !hasImage;
    }
    const wallpaperState = document.getElementById("appearanceWallpaperStateText");
    if (wallpaperState) {
        wallpaperState.textContent = hasImage
            ? "Собственное фото обоев выбрано."
            : "Собственное фото обоев не выбрано.";
    }
}

function onAppearanceSettingsModalClick(event) {
    const actionButton = event.target.closest("[data-appearance-action]");
    if (!actionButton) {
        return;
    }
    const action = actionButton.dataset.appearanceAction || "";
    if (action === "pick-wallpaper") {
        const input = document.getElementById("appearanceWallpaperImageInput");
        if (input) {
            input.click();
        }
        return;
    }
    if (action === "remove-wallpaper") {
        const user = getCurrentUser();
        if (!user) {
            return;
        }
        const settings = getUserSettings(user);
        if (!settings.appearance.wallpaperImage) {
            return;
        }
        settings.appearance.wallpaperImage = "";
        if (settings.appearance.wallpaperMode === "image") {
            settings.appearance.wallpaperMode = "none";
            const modeInput = document.getElementById("appearanceWallpaperModeInput");
            if (modeInput) {
                modeInput.value = "none";
            }
        }
        saveState();
        applyCurrentUserDisplayPreferences();
        updateAppearanceSettingsModalState();
        showToast("Фото обоев удалено.");
    }
}

function onAppearanceSettingsModalInput(event) {
    const target = event.target;
    if (!target) {
        return;
    }
    if (
        target.id === "appearanceMsgInColorInput" ||
        target.id === "appearanceMsgOutColorInput" ||
        target.id === "appearanceMsgTextColorInput" ||
        target.id === "appearanceMsgTextSizeInput" ||
        target.id === "appearanceWallpaperColorInput"
    ) {
        applyAppearanceSettingsFromModal();
        updateAppearanceSettingsModalState();
    }
}

function onAppearanceSettingsModalChange(event) {
    const target = event.target;
    if (!target) {
        return;
    }
    if (target.id === "appearanceWallpaperImageInput") {
        const input = target;
        const file = input.files && input.files[0];
        input.value = "";
        if (!file) {
            return;
        }
        processWallpaperFile(file)
            .then((wallpaperData) => {
                const user = getCurrentUser();
                if (!user) {
                    return;
                }
                const settings = getUserSettings(user);
                settings.appearance.wallpaperImage = wallpaperData;
                settings.appearance.wallpaperMode = "image";
                const modeInput = document.getElementById("appearanceWallpaperModeInput");
                if (modeInput) {
                    modeInput.value = "image";
                }
                saveState();
                applyCurrentUserDisplayPreferences();
                updateAppearanceSettingsModalState();
                showToast("Обои чата обновлены.");
            })
            .catch((error) => {
                showToast(error && error.message ? error.message : "Не удалось загрузить обои.");
            });
        return;
    }

    if (
        target.id === "appearanceWallpaperModeInput" ||
        target.id === "appearanceWallpaperPresetInput" ||
        target.id === "appearanceMsgInColorInput" ||
        target.id === "appearanceMsgOutColorInput" ||
        target.id === "appearanceMsgTextColorInput" ||
        target.id === "appearanceMsgTextSizeInput" ||
        target.id === "appearanceWallpaperColorInput"
    ) {
        applyAppearanceSettingsFromModal();
        updateAppearanceSettingsModalState();
    }
}

function applyAppearanceSettingsFromModal() {
    const user = getCurrentUser();
    if (!user) {
        return;
    }
    const settings = getUserSettings(user);
    const appearance = settings.appearance;
    const defaults = getAppearanceThemeDefaults();
    const msgInInput = document.getElementById("appearanceMsgInColorInput");
    const msgOutInput = document.getElementById("appearanceMsgOutColorInput");
    const msgTextInput = document.getElementById("appearanceMsgTextColorInput");
    const textSizeInput = document.getElementById("appearanceMsgTextSizeInput");
    const wallpaperModeInput = document.getElementById("appearanceWallpaperModeInput");
    const wallpaperPresetInput = document.getElementById("appearanceWallpaperPresetInput");
    const wallpaperColorInput = document.getElementById("appearanceWallpaperColorInput");
    if (
        !msgInInput ||
        !msgOutInput ||
        !msgTextInput ||
        !textSizeInput ||
        !wallpaperModeInput ||
        !wallpaperPresetInput ||
        !wallpaperColorInput
    ) {
        return;
    }

    let changed = false;
    const nextInColor = normalizeHexColor(msgInInput.value, defaults.incoming);
    const nextOutColor = normalizeHexColor(msgOutInput.value, defaults.outgoing);
    const nextTextColor = normalizeHexColor(msgTextInput.value, defaults.text);
    const nextTextSize = clamp(
        Number(textSizeInput.value || appearance.textSize),
        SETTINGS_TEXT_SIZE_MIN,
        SETTINGS_TEXT_SIZE_MAX
    );
    const nextWallpaperMode = ["none", "preset", "color", "image"].includes(
        wallpaperModeInput.value
    )
        ? wallpaperModeInput.value
        : "none";
    const nextWallpaperPreset = WALLPAPER_PRESET_MAP[wallpaperPresetInput.value]
        ? wallpaperPresetInput.value
        : DEFAULT_USER_SETTINGS.appearance.wallpaperPreset;
    const nextWallpaperColor = normalizeHexColor(
        wallpaperColorInput.value,
        DEFAULT_USER_SETTINGS.appearance.wallpaperColor
    );
    const hasWallpaperImage = Boolean(appearance.wallpaperImage);
    const safeWallpaperMode =
        nextWallpaperMode === "image" && !hasWallpaperImage ? "none" : nextWallpaperMode;
    if (safeWallpaperMode !== nextWallpaperMode) {
        wallpaperModeInput.value = safeWallpaperMode;
    }

    if (appearance.messageIncomingColor !== nextInColor) {
        appearance.messageIncomingColor = nextInColor;
        changed = true;
    }
    if (appearance.messageOutgoingColor !== nextOutColor) {
        appearance.messageOutgoingColor = nextOutColor;
        changed = true;
    }
    if (appearance.messageTextColor !== nextTextColor) {
        appearance.messageTextColor = nextTextColor;
        changed = true;
    }
    if (appearance.textSize !== nextTextSize) {
        appearance.textSize = nextTextSize;
        changed = true;
    }
    if (appearance.wallpaperMode !== safeWallpaperMode) {
        appearance.wallpaperMode = safeWallpaperMode;
        changed = true;
    }
    if (appearance.wallpaperPreset !== nextWallpaperPreset) {
        appearance.wallpaperPreset = nextWallpaperPreset;
        changed = true;
    }
    if (appearance.wallpaperColor !== nextWallpaperColor) {
        appearance.wallpaperColor = nextWallpaperColor;
        changed = true;
    }

    if (!changed) {
        return;
    }
    saveState();
    applyCurrentUserDisplayPreferences();
}

function updateSettingsAvatarPreview() {
    const user = getCurrentUser();
    if (!user) {
        return;
    }
    const avatarNode = el.chatList.querySelector(".settings-avatar-preview");
    if (!avatarNode) {
        return;
    }
    const nextAvatar = getSettingsAvatarValue(user);
    const nameInput = el.chatList.querySelector("#settingsNameInput");
    const liveName = nameInput ? String(nameInput.value || "").trim() : user.name;
    setAvatarNode(avatarNode, nextAvatar, user.color, initials(liveName || user.name));
    const previewButton = el.chatList.querySelector(
        "[data-settings-action='open-avatar-preview']"
    );
    if (previewButton) {
        previewButton.disabled = !nextAvatar;
    }
}

function openAvatarPreviewModal() {
    const user = getCurrentUser();
    if (!user) {
        return;
    }
    const avatar = getSettingsAvatarValue(user);
    if (!avatar) {
        showToast("Фото профиля не выбрано.");
        return;
    }
    syncAvatarPreviewModal(avatar);
    openModal("avatarPreviewModal");
}

function syncAvatarPreviewModal(avatar) {
    const safeAvatar = String(avatar || "").trim();
    const hasAvatar = Boolean(safeAvatar);
    if (el.avatarPreviewImage) {
        if (hasAvatar) {
            el.avatarPreviewImage.src = safeAvatar;
            el.avatarPreviewImage.classList.remove("hidden");
        } else {
            el.avatarPreviewImage.removeAttribute("src");
            el.avatarPreviewImage.classList.add("hidden");
        }
    }
    if (el.avatarPreviewEmpty) {
        el.avatarPreviewEmpty.classList.toggle("hidden", hasAvatar);
    }
    if (el.avatarPreviewDeleteBtn) {
        el.avatarPreviewDeleteBtn.disabled = !hasAvatar;
    }
}

function resetAvatarPreviewModalState() {
    syncAvatarPreviewModal("");
}

function onAvatarPreviewDelete() {
    runtime.settingsAvatarDraft = "";
    applySettingsFromSidebar({ silent: true, scope: "avatar" });
    closeModal("avatarPreviewModal");
    showToast("Фото удалено.");
}

async function prepareAvatarCrop(file) {
    const maxSourceBytes = 8 * 1024 * 1024;
    if (!file || !String(file.type || "").startsWith("image/")) {
        throw new Error("Выберите изображение.");
    }
    if (file.size > maxSourceBytes) {
        throw new Error("Файл слишком большой. Выберите фото до 8 МБ.");
    }

    const sourceDataUrl = await readFileAsDataUrl(file);
    const image = await loadImageFromDataUrl(sourceDataUrl);
    if (!el.avatarCropCanvas || !el.avatarCropZoomInput) {
        throw new Error("Не удалось обработать изображение.");
    }

    const canvasSize = 360;
    const baseScale = Math.max(canvasSize / image.width, canvasSize / image.height);
    const zoomMin = 1;
    const zoomMax = 4;
    const zoom = 1;
    const width = image.width * baseScale * zoom;
    const height = image.height * baseScale * zoom;

    runtime.avatarCrop = {
        image,
        canvasSize,
        baseScale,
        zoom,
        zoomMin,
        zoomMax,
        offsetX: (canvasSize - width) / 2,
        offsetY: (canvasSize - height) / 2,
        dragPointerId: null,
        dragStartX: 0,
        dragStartY: 0,
        dragOffsetX: 0,
        dragOffsetY: 0
    };

    el.avatarCropZoomInput.min = String(Math.round(zoomMin * 100));
    el.avatarCropZoomInput.max = String(Math.round(zoomMax * 100));
    el.avatarCropZoomInput.value = String(Math.round(zoom * 100));
    clampAvatarCropOffset();
    drawAvatarCropCanvas();
}

function onAvatarCropZoomInput(event) {
    const crop = runtime.avatarCrop;
    if (!crop) {
        return;
    }
    const rawValue = Number(event.target.value || 100);
    const nextZoom = clamp(rawValue / 100, crop.zoomMin, crop.zoomMax);
    setAvatarCropZoom(nextZoom);
}

function onAvatarCropPointerDown(event) {
    const crop = runtime.avatarCrop;
    if (!crop || !el.avatarCropStage) {
        return;
    }
    event.preventDefault();
    crop.dragPointerId = event.pointerId;
    crop.dragStartX = event.clientX;
    crop.dragStartY = event.clientY;
    crop.dragOffsetX = crop.offsetX;
    crop.dragOffsetY = crop.offsetY;
    if (el.avatarCropStage.setPointerCapture) {
        el.avatarCropStage.setPointerCapture(event.pointerId);
    }
}

function onAvatarCropPointerMove(event) {
    const crop = runtime.avatarCrop;
    if (!crop || !el.avatarCropStage || crop.dragPointerId !== event.pointerId) {
        return;
    }
    event.preventDefault();
    const rect = el.avatarCropStage.getBoundingClientRect();
    if (!rect.width || !rect.height) {
        return;
    }
    const scaleX = crop.canvasSize / rect.width;
    const scaleY = crop.canvasSize / rect.height;
    const deltaX = (event.clientX - crop.dragStartX) * scaleX;
    const deltaY = (event.clientY - crop.dragStartY) * scaleY;
    crop.offsetX = crop.dragOffsetX + deltaX;
    crop.offsetY = crop.dragOffsetY + deltaY;
    clampAvatarCropOffset();
    drawAvatarCropCanvas();
}

function onAvatarCropPointerUp(event) {
    const crop = runtime.avatarCrop;
    if (!crop || crop.dragPointerId !== event.pointerId || !el.avatarCropStage) {
        return;
    }
    if (el.avatarCropStage.releasePointerCapture) {
        el.avatarCropStage.releasePointerCapture(event.pointerId);
    }
    crop.dragPointerId = null;
}

function setAvatarCropZoom(nextZoom) {
    const crop = runtime.avatarCrop;
    if (!crop) {
        return;
    }
    const safeZoom = clamp(nextZoom, crop.zoomMin, crop.zoomMax);
    if (Math.abs(safeZoom - crop.zoom) < 0.001) {
        return;
    }

    const previousScale = crop.baseScale * crop.zoom;
    const centerX = (crop.canvasSize * 0.5 - crop.offsetX) / previousScale;
    const centerY = (crop.canvasSize * 0.5 - crop.offsetY) / previousScale;
    crop.zoom = safeZoom;
    const nextScale = crop.baseScale * crop.zoom;
    crop.offsetX = crop.canvasSize * 0.5 - centerX * nextScale;
    crop.offsetY = crop.canvasSize * 0.5 - centerY * nextScale;

    clampAvatarCropOffset();
    drawAvatarCropCanvas();
}

function clampAvatarCropOffset() {
    const crop = runtime.avatarCrop;
    if (!crop) {
        return;
    }
    const width = crop.image.width * crop.baseScale * crop.zoom;
    const height = crop.image.height * crop.baseScale * crop.zoom;
    const minX = crop.canvasSize - width;
    const minY = crop.canvasSize - height;
    crop.offsetX = clamp(crop.offsetX, minX, 0);
    crop.offsetY = clamp(crop.offsetY, minY, 0);
}

function drawAvatarCropCanvas() {
    const crop = runtime.avatarCrop;
    if (!crop || !el.avatarCropCanvas) {
        return;
    }
    const canvas = el.avatarCropCanvas;
    const context = canvas.getContext("2d");
    if (!context) {
        return;
    }
    canvas.width = crop.canvasSize;
    canvas.height = crop.canvasSize;
    const width = crop.image.width * crop.baseScale * crop.zoom;
    const height = crop.image.height * crop.baseScale * crop.zoom;
    context.clearRect(0, 0, crop.canvasSize, crop.canvasSize);
    context.drawImage(crop.image, crop.offsetX, crop.offsetY, width, height);
}

function onAvatarCropApply() {
    const crop = runtime.avatarCrop;
    if (!crop) {
        return;
    }
    const canvas = document.createElement("canvas");
    canvas.width = crop.canvasSize;
    canvas.height = crop.canvasSize;
    const context = canvas.getContext("2d");
    if (!context) {
        showToast("Не удалось обработать изображение.");
        return;
    }
    const width = crop.image.width * crop.baseScale * crop.zoom;
    const height = crop.image.height * crop.baseScale * crop.zoom;
    context.drawImage(crop.image, crop.offsetX, crop.offsetY, width, height);

    let quality = 0.86;
    let avatarData = canvas.toDataURL("image/jpeg", quality);
    const maxResultLength = 360000;
    while (avatarData.length > maxResultLength && quality > 0.45) {
        quality -= 0.08;
        avatarData = canvas.toDataURL("image/jpeg", quality);
    }
    if (avatarData.length > maxResultLength) {
        showToast("Фото слишком большое. Выберите другое изображение.");
        return;
    }

    runtime.settingsAvatarDraft = avatarData;
    applySettingsFromSidebar({ silent: true, scope: "avatar" });
    closeModal("avatarCropModal");
    showToast("Фото профиля выбрано.");
}

async function processWallpaperFile(file) {
    const maxSourceBytes = 10 * 1024 * 1024;
    if (!file || !String(file.type || "").startsWith("image/")) {
        throw new Error("Выберите изображение.");
    }
    if (file.size > maxSourceBytes) {
        throw new Error("Файл слишком большой. Выберите фото до 10 МБ.");
    }

    const sourceDataUrl = await readFileAsDataUrl(file);
    const image = await loadImageFromDataUrl(sourceDataUrl);
    const maxSide = 1440;
    const ratio = Math.min(1, maxSide / Math.max(image.width, image.height));
    const width = Math.max(1, Math.round(image.width * ratio));
    const height = Math.max(1, Math.round(image.height * ratio));

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) {
        throw new Error("Не удалось обработать изображение.");
    }
    context.drawImage(image, 0, 0, width, height);

    let quality = 0.84;
    let result = canvas.toDataURL("image/jpeg", quality);
    const maxResultLength = 520000;
    while (result.length > maxResultLength && quality > 0.48) {
        quality -= 0.08;
        result = canvas.toDataURL("image/jpeg", quality);
    }
    if (result.length > maxResultLength) {
        throw new Error("Не удалось оптимизировать обои. Выберите другое фото.");
    }
    return result;
}

function resetAvatarCropState() {
    runtime.avatarCrop = null;
    if (el.avatarCropZoomInput) {
        el.avatarCropZoomInput.value = "100";
    }
    if (el.avatarCropCanvas) {
        const context = el.avatarCropCanvas.getContext("2d");
        if (context) {
            context.clearRect(0, 0, el.avatarCropCanvas.width, el.avatarCropCanvas.height);
        }
    }
}

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(new Error("Не удалось прочитать файл."));
        reader.readAsDataURL(file);
    });
}

function loadImageFromDataUrl(dataUrl) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error("Не удалось загрузить изображение."));
        image.src = dataUrl;
    });
}

function autoResizeComposer(event) {
    const target = event.target;
    target.style.height = "auto";
    target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
}

function onDocumentClick(event) {
    const closeButton = event.target.closest("[data-close-modal]");
    if (closeButton) {
        closeModal(closeButton.dataset.closeModal);
        return;
    }

    const modalNode = event.target.classList.contains("modal")
        ? event.target
        : null;
    if (modalNode) {
        closeModal(modalNode.id);
    }

    if (
        !event.target.closest("#createMenuBtn") &&
        !event.target.closest("#createMenuPopover")
    ) {
        closeCreateMenu();
    }

    if (!event.target.closest("#countryCombobox")) {
        closeCountryDropdown();
    }

    if (
        !event.target.closest("#messageActionMenu") &&
        !event.target.closest("[data-message-menu-trigger]")
    ) {
        if (
            runtime.messageMenu &&
            Date.now() - Number(runtime.messageMenu.openedAt || 0) < 320
        ) {
            return;
        }
        closeMessageActionMenu();
    }
}

function onGlobalKeyDown(event) {
    if (event.key !== "Escape") {
        return;
    }

    if (isCountryDropdownOpen()) {
        closeCountryDropdown();
        return;
    }

    if (runtime.messageMenu) {
        closeMessageActionMenu();
        return;
    }

    const openedModalId = getOpenedModalId();
    if (openedModalId) {
        closeModal(openedModalId);
        return;
    }

    if (runtime.editingMessage) {
        cancelMessageEditing({ silent: true });
        return;
    }

    if (el.layoutRoot.classList.contains("show-info")) {
        closeInfoPanel();
        return;
    }

    if (el.layoutRoot.classList.contains("show-sidebar")) {
        el.layoutRoot.classList.remove("show-sidebar");
        return;
    }

    closeActiveChat();
}

function onViewportResize() {
    updateMobileLayoutMode();
}

function closeActiveChat() {
    if (!state.activeChatId || el.appScreen.classList.contains("hidden")) {
        return;
    }
    closeMessageActionMenu();
    cancelMessageEditing({ silent: true });
    state.activeChatId = null;
    closeInfoPanel();
    saveState();
    renderApp();
}

function getOpenedModalId() {
    const modalIds = [
        "forwardModal",
        "callModal",
        "mediaLibraryModal",
        "profileModal",
        "newGroupModal",
        "newChatModal",
        "avatarCropModal",
        "avatarPreviewModal",
        "privacySettingsModal",
        "powerSettingsModal",
        "appearanceSettingsModal"
    ];
    return (
        modalIds.find((id) => {
            const node = document.getElementById(id);
            return node && !node.classList.contains("hidden");
        }) || null
    );
}

function onChatInfoCardClick(event) {
    const trigger = event.target.closest("[data-open-media-library]");
    if (!trigger) {
        return;
    }
    openMediaLibraryModal();
}

function openMediaLibraryModal() {
    const chat = getActiveChat();
    if (!chat) {
        showToast("Сначала выберите чат.");
        return;
    }

    const info = getChatVisualInfo(chat);
    const library = collectChatLibrary(chat);
    el.mediaLibrarySubtitle.textContent = `${info.title} · медиа: ${library.media.length}, документы: ${library.documents.length}, ссылки: ${library.links.length}`;
    el.mediaLibraryContent.innerHTML = [
        renderLibrarySection(
            "Медиа",
            library.media,
            "В этом чате пока нет медиа."
        ),
        renderLibrarySection(
            "Документы",
            library.documents,
            "В этом чате пока нет документов."
        ),
        renderLibrarySection(
            "Ссылки",
            library.links,
            "В этом чате пока нет ссылок.",
            true
        )
    ].join("");
    openModal("mediaLibraryModal");
}

function renderLibrarySection(title, items, emptyText, isLinks = false) {
    if (items.length === 0) {
        return `
            <section class="library-section">
                <h4>${esc(title)}</h4>
                <p class="muted small">${esc(emptyText)}</p>
            </section>
        `;
    }

    const listHtml = items
        .map((item) => {
            const main = isLinks
                ? `<a class="library-item-main link" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.label)}</a>`
                : `<span class="library-item-main">${esc(item.label)}</span>`;
            return `
                <li class="library-item">
                    ${main}
                    <div class="library-item-meta">${esc(item.meta)}</div>
                </li>
            `;
        })
        .join("");

    return `
        <section class="library-section">
            <h4>${esc(title)} (${items.length})</h4>
            <ul class="library-list">${listHtml}</ul>
        </section>
    `;
}

function openModal(id) {
    const node = document.getElementById(id);
    if (node) {
        node.classList.remove("hidden");
    }
}

function closeModal(id) {
    if (id === "forwardModal") {
        runtime.forwardDraft = null;
    }
    if (id === "avatarCropModal") {
        resetAvatarCropState();
    }
    if (id === "avatarPreviewModal") {
        resetAvatarPreviewModalState();
    }
    if (id === "callModal" && runtime.activeCall) {
        endActiveCall({ notify: false });
        return;
    }
    const node = document.getElementById(id);
    if (node) {
        node.classList.add("hidden");
    }
}

function populateExistingContactSelect() {
    const currentUser = getCurrentUser();
    const users = state.users.filter((user) => user.id !== currentUser.id);
    el.existingContactSelect.innerHTML =
        '<option value="">Выберите контакт</option>' +
        users
            .map((user) => `<option value="${esc(user.id)}">${esc(user.name)} (${esc(user.phone)})</option>`)
            .join("");
}

function populateGroupChecklist() {
    const currentUser = getCurrentUser();
    const users = state.users.filter((user) => user.id !== currentUser.id);
    el.groupMembersChecklist.innerHTML = users
        .map(
            (user) => `
                <label class="check-item">
                    <input type="checkbox" value="${esc(user.id)}" />
                    <span>${esc(user.name)} (${esc(user.phone)})</span>
                </label>
            `
        )
        .join("");
}

function simulateIncomingReply(chat, sentText) {
    const currentUser = getCurrentUser();
    if (!chat || !currentUser) {
        return;
    }

    const otherId = chat.participants.find((id) => id !== currentUser.id);
    if (otherId) {
        setTyping(chat.id, otherId, 1800);
    }

    const delay = 1200 + Math.floor(Math.random() * 1800);
    setTimeout(async () => {
        try {
            await apiRequest("/api/messages/auto-reply", {
                method: "POST",
                body: {
                    chatId: chat.id,
                    sourceText: sentText,
                    excludeUserId: currentUser.id,
                    isChatActive: state.activeChatId === chat.id
                }
            });
            await syncFromServer({ silent: true });
            renderApp();
        } catch (error) {
            console.error(error);
        }
    }, delay);
}

function setTyping(chatId, userId, durationMs) {
    runtime.typingByChat[chatId] = {
        userId,
        expiresAt: Date.now() + durationMs
    };
    renderActiveChat();

    window.setTimeout(() => {
        const entry = runtime.typingByChat[chatId];
        if (!entry) {
            return;
        }
        if (entry.userId === userId && entry.expiresAt <= Date.now()) {
            delete runtime.typingByChat[chatId];
            if (state.activeChatId === chatId) {
                renderActiveChat();
            }
        }
    }, durationMs + 100);
}

function getTypingUser(chatId) {
    const entry = runtime.typingByChat[chatId];
    if (!entry) {
        return null;
    }
    if (entry.expiresAt <= Date.now()) {
        delete runtime.typingByChat[chatId];
        return null;
    }
    return getUserById(entry.userId);
}

function createOrGetPrivateChat(userA, userB) {
    const existing = state.chats.find(
        (chat) =>
            chat.type === "private" &&
            chat.participants.length === 2 &&
            chat.participants.includes(userA) &&
            chat.participants.includes(userB)
    );

    if (existing) {
        return existing;
    }

    const receiver = getUserById(userB);
    const created = {
        id: uid("c"),
        type: "private",
        title: "",
        description: "Личный чат",
        color: receiver ? receiver.color : pickColor(state.chats.length + 2),
        participants: [userA, userB],
        adminIds: [userA],
        messages: [
            {
                id: uid("m"),
                senderId: userB,
                text: "Привет! Рад видеть тебя в Pulse Messenger.",
                attachments: [],
                reactions: {},
                createdAt: Date.now()
            }
        ],
        pinned: false,
        muted: false,
        unreadCount: 1,
        updatedAt: Date.now()
    };
    state.chats.push(created);
    return created;
}

function ensureOnboardingChats(userId) {
    const hasAny = state.chats.some((chat) => chat.participants.includes(userId));
    if (hasAny) {
        return;
    }

    const support = ensureDemoUser({
        id: "u_support",
        phone: "+15550000001",
        name: "Pulse Assistant",
        username: "pulse_assistant",
        about: "Помощник платформы",
        color: "#1369ff",
        online: true
    });
    const aria = ensureDemoUser({
        id: "u_aria",
        phone: "+15550000002",
        name: "Aria",
        username: "aria_design",
        about: "UX Designer",
        color: "#00b8b0",
        online: true
    });
    const niko = ensureDemoUser({
        id: "u_niko",
        phone: "+15550000003",
        name: "Niko",
        username: "niko_pm",
        about: "Product Manager",
        color: "#f97316",
        online: false
    });

    const supportChat = {
        id: uid("c"),
        type: "private",
        title: "",
        description: "Служебный чат",
        color: support.color,
        participants: [userId, support.id],
        adminIds: [support.id],
        messages: [
            {
                id: uid("m"),
                senderId: support.id,
                text: "Добро пожаловать в Pulse! Здесь можно создавать чаты и группы.",
                attachments: [],
                reactions: {},
                createdAt: Date.now() - 1000 * 60 * 8
            },
            {
                id: uid("m"),
                senderId: support.id,
                text: "Подсказка: открой меню справа, чтобы управлять участниками группы.",
                attachments: [],
                reactions: {},
                createdAt: Date.now() - 1000 * 60 * 6
            }
        ],
        pinned: true,
        muted: false,
        unreadCount: 0,
        updatedAt: Date.now() - 1000 * 60 * 6
    };

    const groupChat = {
        id: uid("c"),
        type: "group",
        title: "Launch Squad",
        description: "Подготовка нового релиза",
        color: "#0f766e",
        participants: [userId, aria.id, niko.id],
        adminIds: [userId],
        messages: [
            {
                id: uid("m"),
                senderId: aria.id,
                text: "Я закинула новый дизайн экрана чатов. Проверьте, пожалуйста.",
                attachments: [{ id: uid("f"), name: "chat-redesign.fig", size: 0 }],
                reactions: {},
                createdAt: Date.now() - 1000 * 60 * 5
            },
            {
                id: uid("m"),
                senderId: niko.id,
                text: "Сегодня в 17:00 синк по фичам группы и уведомлений.",
                attachments: [],
                reactions: {},
                createdAt: Date.now() - 1000 * 60 * 3
            }
        ],
        pinned: false,
        muted: false,
        unreadCount: 2,
        updatedAt: Date.now() - 1000 * 60 * 3
    };

    state.chats.push(supportChat, groupChat);
}

function ensureDemoUser(payload) {
    const existing = state.users.find((user) => user.phone === payload.phone);
    if (existing) {
        getUserSettings(existing);
        return existing;
    }

    const newUser = {
        id: payload.id,
        phone: payload.phone,
        name: payload.name,
        username: payload.username,
        about: payload.about,
        avatar: payload.avatar || "",
        color: payload.color,
        online: payload.online,
        lastSeen: Date.now() - 1000 * 60 * 12,
        settings: cloneDefaultUserSettings()
    };
    state.users.push(newUser);
    return newUser;
}

function getCurrentUser() {
    if (!state.session || !state.session.userId) {
        return null;
    }
    return state.users.find((user) => user.id === state.session.userId) || null;
}

function getUserById(id) {
    return state.users.find((user) => user.id === id) || null;
}

function canViewOnlineStatus(viewerId, targetUser) {
    if (!targetUser) {
        return false;
    }
    const settings = getUserSettings(targetUser);
    if (!settings.privacy.hideOnlineStatus) {
        return true;
    }
    return viewerId === targetUser.id;
}

function canViewLastSeen(viewerId, targetUser) {
    if (!targetUser) {
        return false;
    }
    const settings = getUserSettings(targetUser);
    if (!settings.privacy.hideLastSeen) {
        return true;
    }
    return viewerId === targetUser.id;
}

function getPresenceLabelForUser(targetUser, viewerId) {
    if (!targetUser) {
        return "статус неизвестен";
    }
    if (targetUser.online) {
        return canViewOnlineStatus(viewerId, targetUser) ? "в сети" : "статус скрыт";
    }
    if (canViewLastSeen(viewerId, targetUser)) {
        return "был(а) в сети " + formatTime(targetUser.lastSeen);
    }
    return "был(а) недавно";
}

function getCurrentUserChats() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        return [];
    }

    return state.chats
        .filter((chat) => chat.participants.includes(currentUser.id))
        .sort((a, b) => {
            if (a.pinned !== b.pinned) {
                return a.pinned ? -1 : 1;
            }
            return (b.updatedAt || 0) - (a.updatedAt || 0);
        });
}

function getActiveChat() {
    if (!state.activeChatId) {
        return null;
    }
    const currentUser = getCurrentUser();
    if (!currentUser) {
        return null;
    }
    const chat = state.chats.find((item) => item.id === state.activeChatId);
    if (!chat) {
        return null;
    }
    if (!chat.participants.includes(currentUser.id)) {
        return null;
    }
    return chat;
}

function isCurrentChatAccessible() {
    return Boolean(getActiveChat());
}

function getChatVisualInfo(chat) {
    const currentUser = getCurrentUser();
    if (chat.type === "group") {
        const title = chat.title || "Новая группа";
        return {
            title,
            color: chat.color || pickColor(title.length),
            initials: initials(title),
            avatar: ""
        };
    }

    const otherId = chat.participants.find((id) => id !== currentUser.id);
    const otherUser = getUserById(otherId);
    if (!otherUser) {
        return {
            title: "Новый чат",
            color: pickColor(1),
            initials: "?",
            avatar: ""
        };
    }
    return {
        title: otherUser.name,
        color: otherUser.color || pickColor(2),
        initials: initials(otherUser.name),
        avatar: otherUser.avatar || ""
    };
}

function getChatSubtitle(chat) {
    if (chat.type === "group") {
        return `${chat.participants.length} участников`;
    }

    const currentUser = getCurrentUser();
    const otherId = chat.participants.find((id) => id !== currentUser.id);
    const otherUser = getUserById(otherId);
    if (!otherUser) {
        return "Личный чат";
    }
    return getPresenceLabelForUser(otherUser, currentUser.id);
}

function filterChats(chats, query) {
    if (!query) {
        return chats;
    }

    return chats.filter((chat) => {
        const info = getChatVisualInfo(chat);
        if (info.title.toLowerCase().includes(query)) {
            return true;
        }
        return chat.messages.some((message) =>
            (message.text || "").toLowerCase().includes(query)
        );
    });
}

function filterMessages(messages, query) {
    if (!query) {
        return messages;
    }
    return messages.filter((message) => {
        const byText = (message.text || "").toLowerCase().includes(query);
        const byFile = (message.attachments || []).some((file) =>
            (file.name || "").toLowerCase().includes(query)
        );
        return byText || byFile;
    });
}

function collectChatLibrary(chat) {
    const media = [];
    const documents = [];
    const links = [];

    (chat.messages || []).forEach((message) => {
        const sender = getUserById(message.senderId);
        const senderName = sender ? sender.name : "Unknown";
        const time = formatTime(message.createdAt);
        const meta = `${senderName} · ${time}`;

        (message.attachments || []).forEach((attachment) => {
            const item = {
                label: attachment.name || "file",
                meta
            };
            if (isMediaAttachmentName(attachment.name || "")) {
                media.push(item);
            } else {
                documents.push(item);
            }
        });

        extractLinksFromText(message.text || "").forEach((linkUrl) => {
            links.push({
                label: linkUrl,
                url: linkUrl,
                meta
            });
        });
    });

    return {
        media,
        documents,
        links: dedupeLinks(links)
    };
}

function isMediaAttachmentName(fileName) {
    const name = String(fileName || "").toLowerCase();
    const extension = name.includes(".") ? name.split(".").pop() : "";
    const mediaExtensions = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "webp",
        "bmp",
        "svg",
        "mp4",
        "mov",
        "webm",
        "mkv",
        "avi",
        "mp3",
        "wav",
        "ogg",
        "m4a"
    ];
    return mediaExtensions.includes(extension || "");
}

function extractLinksFromText(text) {
    const matches = String(text || "").match(/(?:https?:\/\/|www\.)[^\s<>"']+/gi);
    if (!matches) {
        return [];
    }
    return matches
        .map((item) => normalizeDetectedUrl(item))
        .filter(Boolean)
        .map((item) => (item.startsWith("http") ? item : `https://${item}`));
}

function normalizeDetectedUrl(rawUrl) {
    let url = String(rawUrl || "").trim();
    while (/[),.;!?]$/.test(url)) {
        url = url.slice(0, -1);
    }
    if (!url) {
        return "";
    }
    return /^https?:\/\/|^www\./i.test(url) ? url : "";
}

function dedupeLinks(items) {
    const seen = new Set();
    const result = [];
    items.forEach((item) => {
        const key = item.url.toLowerCase();
        if (seen.has(key)) {
            return;
        }
        seen.add(key);
        result.push(item);
    });
    return result;
}

function getMessagePreview(message) {
    if (!message) {
        return "Нет сообщений";
    }
    if (message.text) {
        return message.text;
    }
    if (message.attachments && message.attachments.length > 0) {
        return "Вложение: " + message.attachments[0].name;
    }
    return "Сообщение";
}

function formatTime(timestamp) {
    if (!timestamp) {
        return "";
    }
    const date = new Date(timestamp);
    const now = new Date();
    const isSameDay =
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate();

    if (isSameDay) {
        return date.toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    return date.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit"
    });
}

function showToast(text) {
    if (!el.toast) {
        return;
    }
    el.toast.textContent = text;
    el.toast.classList.remove("hidden");
    if (runtime.toastTimer) {
        clearTimeout(runtime.toastTimer);
    }
    runtime.toastTimer = window.setTimeout(() => {
        el.toast.classList.add("hidden");
    }, 1900);
}

function loadState() {
    return {
        version: 1,
        revision: 0,
        session: { userId: null },
        users: [],
        chats: [],
        activeChatId: null
    };
}

function loadUiStateStore() {
    try {
        const raw = localStorage.getItem(UI_STATE_KEY);
        if (!raw) {
            return {};
        }
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") {
            return {};
        }
        return parsed;
    } catch (error) {
        return {};
    }
}

function saveUiStateStore(store) {
    try {
        localStorage.setItem(UI_STATE_KEY, JSON.stringify(store));
    } catch (error) {
        console.error(error);
    }
}

function restoreUiState() {
    const userId =
        state.session && typeof state.session.userId === "string"
            ? state.session.userId
            : null;
    if (!userId) {
        runtime.sidebarSection = "chats";
        state.activeChatId = null;
        runtime.lastUiStateSnapshot = "";
        return;
    }

    const store = loadUiStateStore();
    const entry = store[userId];
    const restoredSection =
        entry && typeof entry.sidebarSection === "string"
            ? normalizeSidebarSection(entry.sidebarSection)
            : "chats";
    const restoredChatId =
        entry && typeof entry.activeChatId === "string" ? entry.activeChatId : null;
    runtime.sidebarSection = restoredSection;
    state.activeChatId = restoredChatId;
    runtime.lastUiStateSnapshot = JSON.stringify({
        userId,
        sidebarSection: restoredSection,
        activeChatId: restoredChatId
    });
}

function persistUiState() {
    const userId =
        state.session && typeof state.session.userId === "string"
            ? state.session.userId
            : null;
    if (!userId) {
        runtime.lastUiStateSnapshot = "";
        return;
    }
    const normalizedSection = normalizeSidebarSection(runtime.sidebarSection);
    const activeChatId =
        state.activeChatId && typeof state.activeChatId === "string"
            ? state.activeChatId
            : null;
    const snapshot = JSON.stringify({
        userId,
        sidebarSection: normalizedSection,
        activeChatId
    });
    if (snapshot === runtime.lastUiStateSnapshot) {
        return;
    }
    runtime.lastUiStateSnapshot = snapshot;

    const store = loadUiStateStore();
    store[userId] = {
        sidebarSection: normalizedSection,
        activeChatId,
        updatedAt: Date.now()
    };
    const entries = Object.entries(store);
    if (entries.length > 24) {
        entries
            .sort(
                (a, b) =>
                    Number((a[1] && a[1].updatedAt) || 0) -
                    Number((b[1] && b[1].updatedAt) || 0)
            )
            .slice(0, entries.length - 24)
            .forEach((entryItem) => {
                delete store[entryItem[0]];
            });
    }
    saveUiStateStore(store);
}

function restoreSession() {
    try {
        const rememberRaw = localStorage.getItem(SESSION_REMEMBER_KEY);
        runtime.keepSignedIn = rememberRaw === null ? true : rememberRaw === "1";
    } catch (error) {
        runtime.keepSignedIn = true;
    }

    let restoredUserId = null;
    try {
        if (runtime.keepSignedIn) {
            restoredUserId = localStorage.getItem(SESSION_KEY) || null;
        } else {
            restoredUserId = sessionStorage.getItem(SESSION_TEMP_KEY) || null;
        }
    } catch (error) {
        restoredUserId = null;
    }

    state.session.userId = restoredUserId;
    restoreUiState();
    updateRememberCheckbox();
}

function persistSession() {
    try {
        persistRememberPreference();
        if (!state.session.userId) {
            localStorage.removeItem(SESSION_KEY);
            sessionStorage.removeItem(SESSION_TEMP_KEY);
            return;
        }

        if (runtime.keepSignedIn) {
            localStorage.setItem(SESSION_KEY, state.session.userId);
            sessionStorage.removeItem(SESSION_TEMP_KEY);
        } else {
            localStorage.removeItem(SESSION_KEY);
            sessionStorage.setItem(SESSION_TEMP_KEY, state.session.userId);
        }
    } catch (error) {
        console.error(error);
    }
}

function startPolling() {
    if (runtime.pollTimer) {
        clearInterval(runtime.pollTimer);
    }

    const intervalMs = getPollingIntervalMs();
    runtime.pollIntervalMs = intervalMs;
    runtime.pollTimer = window.setInterval(() => {
        if (!getCurrentUser()) {
            return;
        }
        if (runtime.pushInFlight || runtime.syncInFlight) {
            return;
        }
        syncFromServer({ silent: true })
            .then((changed) => {
                if (changed) {
                    renderApp();
                }
            })
            .catch(() => {});
    }, intervalMs);
}

async function syncFromServer(options = {}) {
    const silent = Boolean(options.silent);
    if (runtime.syncInFlight) {
        return false;
    }
    runtime.syncInFlight = true;

    try {
        const payload = await apiRequest("/api/state");
        const nextRevision = Number(payload.revision || 0);
        const needsInitialLoad = state.users.length === 0 && state.chats.length === 0;
        const shouldApply = needsInitialLoad || nextRevision !== runtime.serverRevision;
        if (!shouldApply) {
            return false;
        }

        const preservedSessionUserId = state.session.userId;
        const preservedActiveChatId = state.activeChatId;
        state = normalizeState({
            version: payload.version || 1,
            revision: nextRevision,
            session: { userId: preservedSessionUserId },
            users: payload.users || [],
            chats: payload.chats || [],
            activeChatId: preservedActiveChatId
        });
        state.session.userId = preservedSessionUserId;
        runtime.serverRevision = nextRevision;
        persistSession();
        return true;
    } catch (error) {
        if (!silent) {
            showToast("Сервер недоступен.");
        }
        throw error;
    } finally {
        runtime.syncInFlight = false;
    }
}

function queuePushState(options = {}) {
    runtime.pushPromise = runtime.pushPromise
        .then(() => pushStateToServer(options))
        .catch((error) => {
            console.error(error);
            if (!options.silent) {
                showToast("Не удалось сохранить данные на сервер.");
            }
        });
}

async function pushStateToServer() {
    runtime.pushInFlight = true;
    try {
        const result = await apiRequest("/api/state", {
            method: "POST",
            body: buildServerPayload()
        });
        runtime.serverRevision = Number(result.revision || runtime.serverRevision);
    } finally {
        runtime.pushInFlight = false;
    }
}

function buildServerPayload() {
    return {
        version: 1,
        users: state.users,
        chats: state.chats
    };
}

async function apiRequest(path, options = {}) {
    const method = options.method || "GET";
    const requestOptions = {
        method,
        headers: {}
    };
    if (options.body !== undefined) {
        requestOptions.headers["Content-Type"] = "application/json";
        requestOptions.body = JSON.stringify(options.body);
    }

    const response = await fetch(path, requestOptions);
    const text = await response.text();
    let payload = null;
    if (text) {
        try {
            payload = JSON.parse(text);
        } catch (error) {
            payload = null;
        }
    }

    if (!response.ok) {
        const message =
            payload && typeof payload.error === "string"
                ? payload.error
                : `HTTP ${response.status}`;
        throw new Error(message);
    }

    return payload;
}

function normalizeState(rawState) {
    const normalizedUsers = Array.isArray(rawState.users) ? rawState.users : [];
    const normalizedChats = Array.isArray(rawState.chats) ? rawState.chats : [];

    return {
        version: 1,
        revision: Number(rawState.revision || 0),
        session: {
            userId:
                rawState.session && typeof rawState.session.userId === "string"
                    ? rawState.session.userId
                    : null
        },
        users: normalizedUsers.map((user, index) => ({
            id: user.id || uid("u"),
            phone: user.phone || "",
            name: user.name || "User " + (index + 1),
            username: user.username || "user_" + (index + 1),
            about: user.about || "",
            avatar: user.avatar || "",
            color: user.color || pickColor(index + 2),
            online: Boolean(user.online),
            lastSeen: user.lastSeen || Date.now(),
            settings: normalizeUserSettings(user.settings)
        })),
        chats: normalizedChats.map((chat, index) => ({
            id: chat.id || uid("c"),
            type: chat.type === "group" ? "group" : "private",
            title: chat.title || "",
            description: chat.description || "",
            color: chat.color || pickColor(index + 1),
            participants: Array.isArray(chat.participants) ? chat.participants : [],
            adminIds: Array.isArray(chat.adminIds) ? chat.adminIds : [],
            messages: Array.isArray(chat.messages)
                ? chat.messages.map((message) => ({
                      id: message.id || uid("m"),
                      senderId: message.senderId || "",
                      text: message.text || "",
                      attachments: Array.isArray(message.attachments)
                          ? message.attachments
                          : [],
                      reactions:
                          message.reactions && typeof message.reactions === "object"
                              ? message.reactions
                              : {},
                      createdAt: message.createdAt || Date.now(),
                      pinned: Boolean(message.pinned),
                      editedAt: Number(message.editedAt || 0)
                  }))
                : [],
            pinned: Boolean(chat.pinned),
            muted: Boolean(chat.muted),
            unreadCount: Number(chat.unreadCount || 0),
            updatedAt: chat.updatedAt || Date.now()
        })),
        activeChatId: rawState.activeChatId || null
    };
}

function saveState() {
    persistSession();
    persistUiState();
    queuePushState();
}

function buildPhoneNumber(dialCode, localDigits) {
    const dial = String(dialCode || "").replace(/\D/g, "");
    const local = String(localDigits || "").replace(/\D/g, "");
    if (!dial || !local) {
        return "";
    }
    return `+${dial}${local}`;
}

function normalizePhone(value) {
    const cleaned = String(value || "").trim();
    const digits = cleaned.replace(/\D/g, "");
    if (!digits) {
        return "";
    }
    return "+" + digits;
}

function isValidPhone(phone) {
    return /^\+\d{10,15}$/.test(phone);
}

function sanitizeUsername(value) {
    return String(value || "")
        .toLowerCase()
        .replace(/[^a-z0-9_]/g, "_")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "")
        .slice(0, 24);
}

function ensureUniqueUsername(base) {
    const fallback = base || "user";
    let current = fallback;
    let count = 1;
    while (state.users.some((user) => user.username === current)) {
        current = `${fallback}_${count}`;
        count += 1;
    }
    return current;
}

function initials(value) {
    const text = String(value || "").trim();
    if (!text) {
        return "?";
    }
    const parts = text.split(/\s+/).slice(0, 2);
    return parts.map((part) => part[0]).join("").toUpperCase();
}

function renderAvatarMarkup(avatar, color, initialsValue, className = "avatar") {
    const safeColor = color || pickColor(0);
    const safeInitials = initialsValue || "?";
    const safeAvatar = String(avatar || "").trim();
    if (!safeAvatar) {
        return `<div class="${className}" style="background:${esc(safeColor)}">${esc(
            safeInitials
        )}</div>`;
    }
    return `<div class="${className} has-image" style="background:${esc(
        safeColor
    )}"><img src="${esc(safeAvatar)}" alt="" /></div>`;
}

function setAvatarNode(node, avatar, color, initialsValue) {
    if (!node) {
        return;
    }
    const safeColor = color || pickColor(0);
    const safeInitials = initialsValue || "?";
    const safeAvatar = String(avatar || "").trim();
    node.style.background = safeColor;
    if (!safeAvatar) {
        node.classList.remove("has-image");
        node.textContent = safeInitials;
        return;
    }
    node.classList.add("has-image");
    node.innerHTML = `<img src="${esc(safeAvatar)}" alt="" />`;
}

function pickColor(seed) {
    return AVATAR_COLORS[Math.abs(seed) % AVATAR_COLORS.length];
}

function esc(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function unique(items) {
    return Array.from(new Set(items));
}

function uid(prefix) {
    return `${prefix}_${Date.now().toString(36)}_${Math.random()
        .toString(36)
        .slice(2, 8)}`;
}
