const CONFIG = {
    valentineName: "Евелин",

    pageTitle: "Имам един малък въпрос към теб 💫",

    floatingEmojis: {
        hearts: ['💖', '💝', '💗', '💓'],
        bears: ['🧸']
    },

    questions: {
        first: {
            text: "Харесва ли ти да сме заедно така, както сме? 😊",
            yesBtn: "Много",
            noBtn: "Хмм 🤔",
            secretAnswer: "И на мен ми е много хубаво с теб ❤️"
        },
        second: {
            text: "Колко ти е приятно, когато сме заедно?",
            startText: "Толкова 👉",
            nextBtn: "Продължи 💕"
        },
        third: {
            text: "Искаш ли да си ми валентинка тази година? 🌹",
            yesBtn: "Да ❤️",
            noBtn: "Нека си е както досега 😊"
        }
    },

    loveMessages: {
        extreme: "Ей, това вече е опасно сладко 🥰💫",
        high: "Май си доста навътре 😌💖",
        normal: "Това ми стига напълно 💕"
    },

    celebration: {
        title: "Усмихна ме много 💝",
        message: "Нищо не обещавам… освен хубави моменти заедно 😌",
        emojis: "💖✨😊💝🧸"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#BAB86C"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.4
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dsnias42f/video/upload/v1770207192/Wet_c7foqi.mp3",
        startText: "🎵 Пусни музиката",
        stopText: "🔇 Спри музиката",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
