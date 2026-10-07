"use strict";

/* =========================================
   BIRTHDAY WEBSITE
   FINAL MAIN JAVASCRIPT
========================================= */


/* =========================================
   CUSTOM SETTINGS
========================================= */

const birthdayName = "Mamta Mam";

const birthdayMessage =
    "May this beautiful day bring you endless happiness, good health, peace, and countless reasons to smile. ❤️ Your kindness, patience, guidance, and the way you inspire everyone around you make you truly special.";


/* =========================================
   GLOBAL VARIABLES
========================================= */

let partyMode = false;

let giftRainScreen = null;

let giftRainContainer = null;

let giftRainInterval = null;

/* =========================================
   NEW:
   NEXT SURPRISE BUTTON TIMER
========================================= */

let giftRainButtonTimer = null;


/* =========================================
   NEW:
   GIFT RAIN AUDIO
========================================= */

let giftRainAudio = null;


/* =========================================
   INITIALIZATION
========================================= */

function initBirthdayWebsite() {

    /* -----------------------------------------
       CREATE RAIN SCREEN FIRST
    ----------------------------------------- */

    createGiftRainScreen();


    /* -----------------------------------------
       GET GIFT RAIN AUDIO
    ----------------------------------------- */

    giftRainAudio =
        document.getElementById(
            "giftRainAudio"
        );


    if (giftRainAudio) {

        giftRainAudio.volume = 0.8;

        giftRainAudio.loop = true;

    }


    /* -----------------------------------------
       INITIAL PAGE STATE
    ----------------------------------------- */

    const intro =
        document.getElementById("intro");

    const birthdayPage =
        document.getElementById("birthdayPage");


    if (intro) {

        intro.style.display = "flex";

        intro.style.visibility = "visible";

        intro.style.opacity = "1";

        intro.style.pointerEvents = "auto";

        intro.classList.remove("hide");

    }


    if (birthdayPage) {

        birthdayPage.style.display = "none";

    }


    hideAllPartyScreens();

    stopGiftRain();

    stopBirthdayEffects();


    /* =========================================
       BIRTHDAY NAME / MESSAGE
    ========================================= */

    const nameText =
        document.getElementById("nameText");

    const messageText =
        document.getElementById("messageText");


    if (nameText) {

        nameText.textContent = "";

    }


    if (messageText) {

        messageText.textContent = "";

    }


    /* =========================================
       BUTTON EVENTS
    ========================================= */

    bindMainButtons();

    bindPartyButtons();

    bindRainButton();


    /* =========================================
       PHOTO
    ========================================= */

    setupBirthdayPhoto();


    /* =========================================
       RESIZE
    ========================================= */

    window.addEventListener(
        "resize",
        resetMovingButtons
    );

}


/* =========================================
   MAIN BUTTONS
========================================= */

function bindMainButtons() {

    const openBtn =
        document.getElementById("openBtn");

    const celebrateBtn =
        document.getElementById("celebrateBtn");


    /* -----------------------------------------
       OPEN BIRTHDAY
    ----------------------------------------- */

    if (openBtn) {

        openBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                openBirthdaySurprise();

            }
        );

    }


    /* -----------------------------------------
       CELEBRATE
    ----------------------------------------- */

    if (celebrateBtn) {

        celebrateBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                showPartyQuestion();

            }
        );

    }

}


/* =========================================
   PARTY BUTTONS
========================================= */

function bindPartyButtons() {

    const yesPartyBtn =
        document.getElementById("yesPartyBtn");

    const noPartyBtn =
        document.getElementById("noPartyBtn");

    const cafeBtn =
        document.getElementById("cafeBtn");

    const restaurantBtn =
        document.getElementById("restaurantBtn");

    const pizzaBtn =
        document.getElementById("pizzaBtn");

    const biryaniBtn =
        document.getElementById("biryaniBtn");

    const coldDrinkBtn =
        document.getElementById("coldDrinkBtn");

    const whiskyBtn =
        document.getElementById("whiskyBtn");

    const dontLaughBtn =
        document.getElementById("dontLaughBtn");

    const mangoBtn =
        document.getElementById("mangoBtn");

    const goFirstScreenBtn =
        document.getElementById("goFirstScreenBtn");

    const backHomeBtn =
        document.getElementById("backHomeBtn");


    /* =========================================
       YES PARTY
    ========================================= */

    if (yesPartyBtn) {

        yesPartyBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                showPartyPlace();

            }
        );

    }


    /* =========================================
       NO PARTY
    ========================================= */

    if (noPartyBtn) {

        setupMovingButton(
            noPartyBtn,
            "partyQuestion",
            "no-moving"
        );

    }


    /* =========================================
       CAFE
    ========================================= */

    if (cafeBtn) {

        cafeBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                showPartyFood();

            }
        );

    }


    /* =========================================
       RESTAURANT
    ========================================= */

    if (restaurantBtn) {

        setupMovingButton(
            restaurantBtn,
            "partyPlace",
            "restaurant-moving"
        );

    }


    /* =========================================
       BIRYANI
    ========================================= */

    if (biryaniBtn) {

        biryaniBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                showPartyDrink();

            }
        );

    }


    /* =========================================
       PIZZA
    ========================================= */

    if (pizzaBtn) {

        setupMovingButton(
            pizzaBtn,
            "partyFood",
            "pizza-moving"
        );

    }


    /* =========================================
       COLD DRINK
    ========================================= */

    if (coldDrinkBtn) {

        coldDrinkBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                showDontLaughScreen();

            }
        );

    }


    /* =========================================
       WHISKY
    ========================================= */

    if (whiskyBtn) {

        setupMovingButton(
            whiskyBtn,
            "partyDrink",
            "whisky-moving"
        );

    }


    /* =========================================
       DON'T LAUGH
    ========================================= */

    if (dontLaughBtn) {

        dontLaughBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                showMangoScreen();

            }
        );

    }


    /* =========================================
       MANGO
    ========================================= */

    if (mangoBtn) {

        mangoBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                showByeScreen();

            }
        );

    }


    /* =========================================
       START AGAIN

       ONLY OPENS GIFT RAIN
    ========================================= */

    if (goFirstScreenBtn) {

        goFirstScreenBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                event.stopImmediatePropagation();

                showGiftRainScreen();

            }
        );

    }


    /* =========================================
       BACK HOME
    ========================================= */

    if (backHomeBtn) {

        backHomeBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                goToBirthdayPage();

            }
        );

    }

}


/* =========================================
   BIND RAIN BUTTON
========================================= */

function bindRainButton() {

    if (!giftRainScreen) {

        return;

    }


    giftRainScreen.addEventListener(
        "click",
        function (event) {

            const nextButton =
                event.target.closest(
                    "#giftRainNextBtn"
                );


            if (!nextButton) {

                return;

            }


            event.preventDefault();

            event.stopPropagation();


            showPartyFinal(
                "Surprise Complete! 🎉",
                "अब पार्टी officially confirm है। 😜🎂❤️"
            );

        }
    );

}


/* =========================================
   OPEN BIRTHDAY
========================================= */

function openBirthdaySurprise() {

    partyMode = false;

    document.body.classList.remove(
        "party-mode"
    );


    stopGiftRain();

    hideAllPartyScreens();


    const intro =
        document.getElementById("intro");

    const birthdayPage =
        document.getElementById("birthdayPage");


    /* -----------------------------------------
       HIDE INTRO
    ----------------------------------------- */

    if (intro) {

        intro.classList.add("hide");

        intro.style.display = "none";

        intro.style.visibility = "hidden";

        intro.style.opacity = "0";

        intro.style.pointerEvents = "none";

    }


    /* -----------------------------------------
       SHOW BIRTHDAY PAGE
    ----------------------------------------- */

    if (birthdayPage) {

        birthdayPage.style.display = "block";

        birthdayPage.style.visibility = "visible";

        birthdayPage.style.opacity = "1";

        birthdayPage.style.pointerEvents = "auto";

    }


    showBirthdayEffects();


    setTimeout(
        typeBirthdayText,
        100
    );


    createConfetti();

    createFireworks();


    window.scrollTo({

        top: 0,

        left: 0,

        behavior: "smooth"

    });

}


/* =========================================
   TYPEWRITER
========================================= */

function typeBirthdayText() {

    const nameText =
        document.getElementById("nameText");

    const messageText =
        document.getElementById("messageText");


    if (!nameText || !messageText) {

        return;

    }


    nameText.textContent = "";

    messageText.textContent = "";


    let nameIndex = 0;

    let messageIndex = 0;


    function typeName() {

        if (
            nameIndex <
            birthdayName.length
        ) {

            nameText.textContent +=
                birthdayName.charAt(
                    nameIndex
                );

            nameIndex++;


            setTimeout(
                typeName,
                80
            );

        } else {

            setTimeout(
                typeMessage,
                250
            );

        }

    }


    function typeMessage() {

        if (
            messageIndex <
            birthdayMessage.length
        ) {

            messageText.textContent +=
                birthdayMessage.charAt(
                    messageIndex
                );

            messageIndex++;


            setTimeout(
                typeMessage,
                15
            );

        }

    }


    typeName();

}


/* =========================================
   PHOTO
========================================= */

function setupBirthdayPhoto() {

    const photo =
        document.getElementById(
            "birthdayPhoto"
        );

    const placeholder =
        document.getElementById(
            "photoPlaceholder"
        );


    if (!photo) {

        return;

    }


    photo.addEventListener(
        "load",
        function () {

            photo.style.display = "block";

            photo.style.visibility = "visible";

            photo.style.opacity = "1";


            if (placeholder) {

                placeholder.style.display =
                    "none";

            }

        }
    );


    photo.addEventListener(
        "error",
        function () {

            if (placeholder) {

                placeholder.style.display =
                    "block";

            }

        }
    );

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    const symbols = [

        "🎉",
        "✨",
        "🎊",
        "💕",
        "💖",
        "⭐"

    ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const item =
            document.createElement("div");


        item.className =
            "confetti";


        item.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        item.style.left =
            Math.random() * 100 +
            "%";


        item.style.fontSize =
            10 +
            Math.random() * 16 +
            "px";


        item.style.animationDuration =
            4 +
            Math.random() * 5 +
            "s";


        item.style.animationDelay =
            Math.random() * 2 +
            "s";


        container.appendChild(
            item
        );

    }

}


/* =========================================
   FIREWORKS
========================================= */

function createFireworks() {

    const container =
        document.getElementById(
            "fireworks-container"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const firework =
            document.createElement("div");


        firework.className =
            "firework";


        firework.style.position =
            "absolute";


        firework.style.left =
            10 +
            Math.random() * 80 +
            "%";


        firework.style.top =
            10 +
            Math.random() * 60 +
            "%";


        container.appendChild(
            firework
        );

    }

}


/* =========================================
   STOP BIRTHDAY EFFECTS
========================================= */

function stopBirthdayEffects() {

    const confetti =
        document.getElementById(
            "confetti-container"
        );

    const fireworks =
        document.getElementById(
            "fireworks-container"
        );


    if (confetti) {

        confetti.style.display =
            "none";

    }


    if (fireworks) {

        fireworks.style.display =
            "none";

    }

}


/* =========================================
   SHOW BIRTHDAY EFFECTS
========================================= */

function showBirthdayEffects() {

    const confetti =
        document.getElementById(
            "confetti-container"
        );

    const fireworks =
        document.getElementById(
            "fireworks-container"
        );


    if (confetti) {

        confetti.style.display =
            "block";

    }


    if (fireworks) {

        fireworks.style.display =
            "block";

    }

}


/* =========================================
   PARTY QUESTION
========================================= */

function showPartyQuestion() {

    partyMode = true;

    document.body.classList.add(
        "party-mode"
    );


    stopBirthdayEffects();

    stopGiftRain();

    hideAllPartyScreens();


    const screen =
        document.getElementById(
            "partyQuestion"
        );


    if (screen) {

        screen.style.display =
            "flex";

        screen.classList.add(
            "active"
        );

    }


    resetMovingButtons();

}


/* =========================================
   PARTY PLACE
========================================= */

function showPartyPlace() {

    hideAllPartyScreens();


    const screen =
        document.getElementById(
            "partyPlace"
        );


    if (screen) {

        screen.style.display =
            "flex";

        screen.classList.add(
            "active"
        );

    }


    resetMovingButtons();

}


/* =========================================
   PARTY FOOD
========================================= */

function showPartyFood() {

    hideAllPartyScreens();


    const screen =
        document.getElementById(
            "partyFood"
        );


    if (screen) {

        screen.style.display =
            "flex";

        screen.classList.add(
            "active"
        );

    }


    resetMovingButtons();

}


/* =========================================
   PARTY DRINK
========================================= */

function showPartyDrink() {

    hideAllPartyScreens();


    const screen =
        document.getElementById(
            "partyDrink"
        );


    if (screen) {

        screen.style.display =
            "flex";

        screen.classList.add(
            "active"
        );

    }


    resetMovingButtons();

}


/* =========================================
   DON'T LAUGH
========================================= */

function showDontLaughScreen() {

    hideAllPartyScreens();


    const screen =
        document.getElementById(
            "dontLaughScreen"
        );


    if (screen) {

        screen.style.display =
            "flex";

        screen.classList.add(
            "active"
        );

    }

}


/* =========================================
   MANGO
========================================= */

function showMangoScreen() {

    hideAllPartyScreens();


    const screen =
        document.getElementById(
            "mangoScreen"
        );


    if (screen) {

        screen.style.display =
            "flex";

        screen.classList.add(
            "active"
        );

    }

}


/* =========================================
   BYE SCREEN
========================================= */

function showByeScreen() {

    hideAllPartyScreens();


    const screen =
        document.getElementById(
            "byeScreen"
        );


    if (screen) {

        screen.style.display =
            "flex";

        screen.classList.add(
            "active"
        );

    }

}


/* =========================================
   HIDE PARTY SCREENS
========================================= */

function hideAllPartyScreens() {

    const ids = [

        "partyQuestion",

        "partyPlace",

        "partyFood",

        "partyDrink",

        "dontLaughScreen",

        "mangoScreen",

        "byeScreen",

        "partyFinal"

    ];


    ids.forEach(
        function (id) {

            const screen =
                document.getElementById(id);


            if (!screen) {

                return;

            }


            screen.classList.remove(
                "active"
            );


            screen.style.display =
                "none";

        }
    );

}


/* =========================================
   MOVING BUTTON
========================================= */

function setupMovingButton(
    button,
    screenId,
    movingClass
) {

    const screen =
        document.getElementById(
            screenId
        );


    if (!button || !screen) {

        return;

    }


    const box =
        screen.querySelector(
            ".question-box"
        );


    if (!box) {

        return;

    }


    function moveButton(event) {

        if (
            !screen.classList.contains(
                "active"
            )
        ) {

            return;

        }


        const boxRect =
            box.getBoundingClientRect();


        const buttonRect =
            button.getBoundingClientRect();


        const maxX =
            Math.max(
                10,
                boxRect.width -
                buttonRect.width -
                20
            );


        const maxY =
            Math.max(
                10,
                boxRect.height -
                buttonRect.height -
                20
            );


        let x =
            Math.random() *
            maxX;


        let y =
            Math.random() *
            maxY;


        /* -----------------------------------------
           AVOID POINTER AREA
        ----------------------------------------- */

        if (event) {

            const pointerX =
                event.clientX;

            const pointerY =
                event.clientY;


            if (
                pointerX &&
                pointerY
            ) {

                const localX =
                    pointerX -
                    boxRect.left;

                const localY =
                    pointerY -
                    boxRect.top;


                if (
                    Math.abs(
                        x - localX
                    ) < 100 &&
                    Math.abs(
                        y - localY
                    ) < 80
                ) {

                    x =
                        Math.random() *
                        maxX;

                    y =
                        Math.random() *
                        maxY;

                }

            }

        }


        button.classList.add(
            movingClass
        );


        button.style.position =
            "absolute";


        button.style.left =
            x + "px";


        button.style.top =
            y + "px";


        button.style.transform =
            "none";

    }


    button.addEventListener(
        "mouseenter",
        moveButton
    );


    button.addEventListener(
        "pointerenter",
        moveButton
    );


    button.addEventListener(
        "touchstart",
        function (event) {

            event.preventDefault();

            moveButton(event);

        },
        {
            passive: false
        }
    );


    button.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            moveButton(event);

        }
    );

}


/* =========================================
   RESET MOVING BUTTONS
========================================= */

function resetMovingButtons() {

    const buttons = [

        [
            "noPartyBtn",
            "no-moving"
        ],

        [
            "restaurantBtn",
            "restaurant-moving"
        ],

        [
            "pizzaBtn",
            "pizza-moving"
        ],

        [
            "whiskyBtn",
            "whisky-moving"
        ]

    ];


    buttons.forEach(
        function (data) {

            const button =
                document.getElementById(
                    data[0]
                );


            if (!button) {

                return;

            }


            button.classList.remove(
                data[1]
            );


            button.style.left = "";

            button.style.top = "";

            button.style.transform = "";

        }
    );

}


/* =========================================
   CREATE GIFT RAIN SCREEN
========================================= */

function createGiftRainScreen() {

    /* -----------------------------------------
       CHECK EXISTING SCREEN
    ----------------------------------------- */

    const existing =
        document.getElementById(
            "giftRainScreen"
        );


    if (existing) {

        giftRainScreen =
            existing;

        giftRainContainer =
            document.getElementById(
                "giftRainContainer"
            );


        /* =========================================
           FIND EXISTING NEXT BUTTON
        ========================================= */

        const existingNextButton =
            document.getElementById(
                "giftRainNextBtn"
            );


        if (existingNextButton) {

            existingNextButton.style.display =
                "none";

            existingNextButton.style.opacity =
                "0";

            existingNextButton.style.visibility =
                "hidden";

            existingNextButton.style.pointerEvents =
                "none";

            existingNextButton.style.position =
                "relative";

            existingNextButton.style.zIndex =
                "10";

            existingNextButton.style.cursor =
                "pointer";

        }


        /* =========================================
           FIND EXISTING AUDIO
        ========================================= */

        giftRainAudio =
            document.getElementById(
                "giftRainAudio"
            );


        if (giftRainAudio) {

            giftRainAudio.volume = 0.8;

            giftRainAudio.loop = true;

        }


        /* =========================================
           SAFETY STYLES FOR EXISTING SCREEN
        ========================================= */

        giftRainScreen.style.position =
            "fixed";

        giftRainScreen.style.inset =
            "0";

        giftRainScreen.style.width =
            "100vw";

        giftRainScreen.style.height =
            "100vh";

        giftRainScreen.style.zIndex =
            "999999";

        giftRainScreen.style.display =
            "none";

        giftRainScreen.style.visibility =
            "hidden";

        giftRainScreen.style.opacity =
            "0";

        giftRainScreen.style.pointerEvents =
            "none";

        giftRainScreen.style.alignItems =
            "center";

        giftRainScreen.style.justifyContent =
            "center";

        giftRainScreen.style.overflow =
            "hidden";


        if (giftRainContainer) {

            giftRainContainer.style.position =
                "absolute";

            giftRainContainer.style.inset =
                "0";

            giftRainContainer.style.width =
                "100%";

            giftRainContainer.style.height =
                "100%";

            giftRainContainer.style.overflow =
                "hidden";

            giftRainContainer.style.pointerEvents =
                "none";

            giftRainContainer.style.zIndex =
                "1";

        }


        return;

    }


    /* =========================================
       CREATE SCREEN

       ONLY:
       - GIFT RAIN
       - NEXT BUTTON
       - AUDIO
       
       NO CENTER BOX
       NO HEADING
       NO MESSAGE
       NO EMOJI BOX
    ========================================= */

    giftRainScreen =
        document.createElement(
            "section"
        );


    giftRainScreen.id =
        "giftRainScreen";


    giftRainScreen.innerHTML = `

        <audio
            id="giftRainAudio"
            src="happy-birthday.mp3"
            preload="auto"
            loop>
        </audio>

        <div id="giftRainContainer"></div>

        <button
            id="giftRainNextBtn"
            type="button"
        >
            आगे और भी Surprise ❤️
        </button>

    `;


    /* =========================================
       APPEND DIRECTLY TO BODY
    ========================================= */

    document.body.appendChild(
        giftRainScreen
    );


    giftRainContainer =
        document.getElementById(
            "giftRainContainer"
        );


    giftRainAudio =
        document.getElementById(
            "giftRainAudio"
        );


    if (giftRainAudio) {

        giftRainAudio.volume = 0.8;

        giftRainAudio.loop = true;

    }


    /* =========================================
       SCREEN SAFETY STYLES
    ========================================= */

    giftRainScreen.style.position =
        "fixed";

    giftRainScreen.style.inset =
        "0";

    giftRainScreen.style.width =
        "100vw";

    giftRainScreen.style.height =
        "100vh";

    giftRainScreen.style.zIndex =
        "999999";

    giftRainScreen.style.display =
        "none";

    giftRainScreen.style.visibility =
        "hidden";

    giftRainScreen.style.opacity =
        "0";

    giftRainScreen.style.pointerEvents =
        "none";

    giftRainScreen.style.alignItems =
        "center";

    giftRainScreen.style.justifyContent =
        "center";

    giftRainScreen.style.overflow =
        "hidden";


    /* =========================================
       RAIN CONTAINER
    ========================================= */

    if (giftRainContainer) {

        giftRainContainer.style.position =
            "absolute";

        giftRainContainer.style.inset =
            "0";

        giftRainContainer.style.width =
            "100%";

        giftRainContainer.style.height =
            "100%";

        giftRainContainer.style.overflow =
            "hidden";

        giftRainContainer.style.pointerEvents =
            "none";

        giftRainContainer.style.zIndex =
            "1";

    }


    /* =========================================
       NEXT BUTTON

       HIDDEN INITIALLY
       WILL APPEAR AFTER 30 SECONDS
    ========================================= */

    const nextButton =
        document.getElementById(
            "giftRainNextBtn"
        );


    if (nextButton) {

        nextButton.style.position =
            "relative";

        nextButton.style.zIndex =
            "10";

        nextButton.style.pointerEvents =
            "none";

        nextButton.style.cursor =
            "pointer";

        nextButton.style.display =
            "none";

        nextButton.style.opacity =
            "0";

        nextButton.style.visibility =
            "hidden";

    }

}


/* =========================================
   SHOW GIFT RAIN SCREEN
========================================= */

function showGiftRainScreen() {

    /* =========================================
       CREATE IF MISSING
    ========================================= */

    if (!giftRainScreen) {

        createGiftRainScreen();

    }


    if (!giftRainScreen) {

        return;

    }


    /* =========================================
       PARTY MODE
    ========================================= */

    partyMode = true;

    document.body.classList.add(
        "party-mode"
    );


    /* =========================================
       STOP PREVIOUS SCREENS
    ========================================= */

    stopBirthdayEffects();

    stopGiftRain();

    hideAllPartyScreens();


    /* =========================================
       HIDE INTRO
    ========================================= */

    const intro =
        document.getElementById(
            "intro"
        );


    const birthdayPage =
        document.getElementById(
            "birthdayPage"
        );


    if (intro) {

        intro.classList.add("hide");

        intro.style.display =
            "none";

        intro.style.visibility =
            "hidden";

        intro.style.opacity =
            "0";

        intro.style.pointerEvents =
            "none";

    }


    if (birthdayPage) {

        birthdayPage.style.display =
            "none";

        birthdayPage.style.visibility =
            "hidden";

        birthdayPage.style.opacity =
            "0";

        birthdayPage.style.pointerEvents =
            "none";

    }


    /* =========================================
       SHOW RAIN SCREEN
    ========================================= */

    giftRainScreen.style.display =
        "flex";

    giftRainScreen.style.visibility =
        "visible";

    giftRainScreen.style.opacity =
        "1";

    giftRainScreen.style.pointerEvents =
        "auto";

    giftRainScreen.classList.add(
        "active"
    );


    /* =========================================
       🎵 START HAPPY BIRTHDAY AUDIO
    ========================================= */

    if (!giftRainAudio) {

        giftRainAudio =
            document.getElementById(
                "giftRainAudio"
            );

    }


    if (giftRainAudio) {

        giftRainAudio.pause();

        giftRainAudio.currentTime = 0;

        giftRainAudio.volume = 0.8;

        giftRainAudio.loop = true;


        const playPromise =
            giftRainAudio.play();


        if (
            playPromise !== undefined
        ) {

            playPromise.catch(
                function () {

                    /* Browser autoplay
                       restriction safety */

                }
            );

        }

    }


    /* =========================================
       NEXT SURPRISE BUTTON
       
       HIDDEN FOR 30 SECONDS
    ========================================= */

    const nextButton =
        document.getElementById(
            "giftRainNextBtn"
        );


    if (nextButton) {

        nextButton.style.display =
            "none";

        nextButton.style.opacity =
            "0";

        nextButton.style.visibility =
            "hidden";

        nextButton.style.pointerEvents =
            "none";

    }


    /* =========================================
       CLEAR OLD BUTTON TIMER
    ========================================= */

    clearTimeout(
        giftRainButtonTimer
    );

    giftRainButtonTimer = null;


    /* =========================================
       START 30 SECOND TIMER
    ========================================= */

    giftRainButtonTimer =
        setTimeout(
            function () {

                /* ---------------------------------
                   CHECK SCREEN IS STILL ACTIVE
                --------------------------------- */

                if (
                    !giftRainScreen ||
                    giftRainScreen.style.display !==
                    "flex" ||
                    !giftRainScreen.classList.contains(
                        "active"
                    )
                ) {

                    return;

                }


                const button =
                    document.getElementById(
                        "giftRainNextBtn"
                    );


                if (!button) {

                    return;

                }


                /* ---------------------------------
                   SHOW BUTTON
                --------------------------------- */

                button.style.display =
                    "block";

                button.style.visibility =
                    "visible";

                button.style.pointerEvents =
                    "auto";


                /* ---------------------------------
                   SMALL FADE-IN
                --------------------------------- */

                setTimeout(
                    function () {

                        button.style.opacity =
                            "1";

                    },
                    50
                );


                giftRainButtonTimer =
                    null;

            },
            10000
        );


    /* =========================================
       START RAIN
    ========================================= */

    startGiftRain();


    /* =========================================
       SCROLL TOP
    ========================================= */

    window.scrollTo({

        top: 0,

        left: 0,

        behavior: "instant"

    });

}


/* =========================================
   START GIFT RAIN
========================================= */

function startGiftRain() {

    if (!giftRainContainer) {

        giftRainContainer =
            document.getElementById(
                "giftRainContainer"
            );

    }


    if (!giftRainContainer) {

        return;

    }


    /* -----------------------------------------
       STOP OLD INTERVAL
    ----------------------------------------- */

    if (giftRainInterval) {

        clearInterval(
            giftRainInterval
        );

        giftRainInterval =
            null;

    }


    /* -----------------------------------------
       CLEAR OLD RAIN
    ----------------------------------------- */

    giftRainContainer.innerHTML =
        "";


    /* =========================================
       INITIAL ITEMS
    ========================================= */

    for (
        let i = 0;
        i < 55;
        i++
    ) {

        setTimeout(
            function () {

                createRainItem();

            },
            i * 70
        );

    }


    /* =========================================
       CONTINUOUS RAIN
    ========================================= */

    giftRainInterval =
        setInterval(
            function () {

                if (
                    giftRainScreen &&
                    giftRainScreen.style.display ===
                    "flex"
                ) {

                    createRainItem();

                    createRainItem();

                    createRainItem();

                    createRainItem();

                }

            },
            450
        );

}


/* =========================================
   CREATE RAIN ITEM
========================================= */

function createRainItem() {

    if (!giftRainContainer) {

        return;

    }


    if (
        !giftRainScreen ||
        giftRainScreen.style.display !==
        "flex"
    ) {

        return;

    }


    const item =
        document.createElement(
            "div"
        );


    item.className =
        "gift-rain-item";


    /* =========================================
       SYMBOLS
    ========================================= */

    const symbols = [

        "💰",
        "💵",
        "💸",

        "🎁",
        "🎁",
        "🎀",

        "🍫",
        "🍫",
        "🍬",
        "🍭",

        "💎",

        "💖",
        "💕",
        "❤️",

        "✨",
        "⭐",

        "🎉",
        "🎊"

    ];


    item.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    /* =========================================
       POSITION
    ========================================= */

    item.style.left =
        Math.random() * 100 +
        "%";


    /* =========================================
       SIZE
    ========================================= */

    item.style.fontSize =
        24 +
        Math.random() * 28 +
        "px";


    /* =========================================
       SPEED
    ========================================= */

    const duration =
        4 +
        Math.random() * 5;


    item.style.animationDuration =
        duration +
        "s";


    /* =========================================
       ROTATION
    ========================================= */

    item.style.transform =
        "rotate(" +
        (
            Math.random() * 60 -
            10
        ) +
        "deg)";


    /* =========================================
       ADD
    ========================================= */

    giftRainContainer.appendChild(
        item
    );


    /* =========================================
       REMOVE
    ========================================= */

    setTimeout(
        function () {

            if (item.parentNode) {

                item.parentNode.removeChild(
                    item
                );

            }

        },
        (
            duration +
            1
        ) * 1000
    );

}


/* =========================================
   STOP GIFT RAIN
========================================= */

function stopGiftRain() {

    /* =========================================
       STOP RAIN INTERVAL
    ========================================= */

    if (giftRainInterval) {

        clearInterval(
            giftRainInterval
        );

        giftRainInterval =
            null;

    }


    /* =========================================
       STOP 30 SECOND BUTTON TIMER
    ========================================= */

    if (giftRainButtonTimer) {

        clearTimeout(
            giftRainButtonTimer
        );

        giftRainButtonTimer =
            null;

    }


    /* =========================================
       🎵 STOP HAPPY BIRTHDAY AUDIO
    ========================================= */

    if (!giftRainAudio) {

        giftRainAudio =
            document.getElementById(
                "giftRainAudio"
            );

    }


    if (giftRainAudio) {

        giftRainAudio.pause();

        giftRainAudio.currentTime = 0;

    }


    /* =========================================
       CLEAR RAIN
    ========================================= */

    if (giftRainContainer) {

        giftRainContainer.innerHTML =
            "";

    }


    /* =========================================
       HIDE NEXT BUTTON
    ========================================= */

    const nextButton =
        document.getElementById(
            "giftRainNextBtn"
        );


    if (nextButton) {

        nextButton.style.display =
            "none";

        nextButton.style.visibility =
            "hidden";

        nextButton.style.opacity =
            "0";

        nextButton.style.pointerEvents =
            "none";

    }


    /* =========================================
       HIDE RAIN SCREEN
    ========================================= */

    if (giftRainScreen) {

        giftRainScreen.classList.remove(
            "active"
        );

        giftRainScreen.style.display =
            "none";

        giftRainScreen.style.visibility =
            "hidden";

        giftRainScreen.style.opacity =
            "0";

        giftRainScreen.style.pointerEvents =
            "none";

    }

}


/* =========================================
   FINAL PARTY SCREEN
========================================= */

function showPartyFinal(
    title,
    text
) {

    stopGiftRain();

    hideAllPartyScreens();


    const screen =
        document.getElementById(
            "partyFinal"
        );


    const titleElement =
        document.getElementById(
            "finalPartyTitle"
        );


    const textElement =
        document.getElementById(
            "finalPartyText"
        );


    if (titleElement) {

        titleElement.textContent =
            title ||
            "Party Confirmed! 🎉";

    }


    if (textElement) {

        textElement.textContent =
            text ||
            "Ab party pakki! 😜🎂❤️";

    }


    if (screen) {

        screen.style.display =
            "flex";

        screen.style.visibility =
            "visible";

        screen.style.opacity =
            "1";

        screen.style.pointerEvents =
            "auto";

        screen.classList.add(
            "active"
        );

    }

}


/* =========================================
   BACK TO BIRTHDAY PAGE
========================================= */

function goToBirthdayPage() {

    partyMode = false;

    document.body.classList.remove(
        "party-mode"
    );


    stopGiftRain();

    hideAllPartyScreens();


    const intro =
        document.getElementById(
            "intro"
        );


    const birthdayPage =
        document.getElementById(
            "birthdayPage"
        );


    /* -----------------------------------------
       INTRO MUST STAY HIDDEN
    ----------------------------------------- */

    if (intro) {

        intro.classList.add(
            "hide"
        );

        intro.style.display =
            "none";

        intro.style.visibility =
            "hidden";

        intro.style.opacity =
            "0";

        intro.style.pointerEvents =
            "none";

    }


    /* -----------------------------------------
       BIRTHDAY PAGE
    ----------------------------------------- */

    if (birthdayPage) {

        birthdayPage.style.display =
            "block";

        birthdayPage.style.visibility =
            "visible";

        birthdayPage.style.opacity =
            "1";

        birthdayPage.style.pointerEvents =
            "auto";

    }


    showBirthdayEffects();


    window.scrollTo({

        top: 0,

        left: 0,

        behavior: "smooth"

    });

}


/* =========================================
   FIRST SCREEN FUNCTION

   NOTE:
   START AGAIN DOES NOT CALL THIS FUNCTION.
========================================= */

function goToFirstScreen() {

    partyMode = false;

    document.body.classList.remove(
        "party-mode"
    );


    stopGiftRain();

    hideAllPartyScreens();

    stopBirthdayEffects();


    const birthdayPage =
        document.getElementById(
            "birthdayPage"
        );


    const intro =
        document.getElementById(
            "intro"
        );


    if (birthdayPage) {

        birthdayPage.style.display =
            "none";

    }


    if (intro) {

        intro.classList.remove(
            "hide"
        );

        intro.style.display =
            "flex";

        intro.style.visibility =
            "visible";

        intro.style.opacity =
            "1";

        intro.style.pointerEvents =
            "auto";

    }

}


/* =========================================
   PAGE VISIBILITY
========================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (document.hidden) {

            if (giftRainInterval) {

                clearInterval(
                    giftRainInterval
                );

                giftRainInterval =
                    null;

            }

        } else {

            if (
                giftRainScreen &&
                giftRainScreen.style.display ===
                "flex"
            ) {

                startGiftRain();

            }

        }

    }
);


/* =========================================
   START WEBSITE
========================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initBirthdayWebsite
    );

} else {

    initBirthdayWebsite();

}