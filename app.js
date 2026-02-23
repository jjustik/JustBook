const userIcon = document.querySelector(".nav-user-icon");
const settingsMenu = document.querySelector(".settings-menu");
const darkThemeBtn = document.getElementById("dark-btn");
const chatIcon = document.getElementById("chat-icon");
const optionsMenu = document.querySelectorAll(".post-options");
document.addEventListener("click", (e) => {

    const clickOnIcon = userIcon.contains(e.target);
    const clickOnMenu = settingsMenu.contains(e.target);

    if (clickOnIcon) {
        settingsMenu.classList.toggle("block");
    }
    else if(clickOnMenu) {
        settingsMenu.classList.add("block");
    }
    else {
        settingsMenu.classList.remove("block");
    }
});

function darkTheme() {
    const darkTheme = document.body.classList.toggle("dark-theme");
    darkThemeBtn.classList.toggle("dark-btn-on");
    localStorage.setItem("currentTheme", darkTheme ? "darkTheme" : "lightTheme");
    if (chatIcon.src.includes("images/icons8-chat-6402.png")) {
        chatIcon.src = "images/icons8-chat-64.png";
        localStorage.setItem("chatIconColor", "images/icons8-chat-64.png");
    }
    else {
        chatIcon.src = "images/icons8-chat-6402.png";
        localStorage.setItem("chatIconColor", "images/icons8-chat-6402.png");
    }
}

function applyChatIconColor() {
    const appliedChatIconColor = localStorage.getItem("chatIconColor");
    if (appliedChatIconColor === "images/icons8-chat-6402.png") {
        chatIcon.src = "images/icons8-chat-6402.png";
    }
    else {
        chatIcon.src = "images/icons8-chat-64.png";
    }
}

function applyTheme() {
    const appliedTheme = localStorage.getItem("currentTheme");
    if (appliedTheme === "darkTheme") {
        darkThemeBtn.classList.add("dark-btn-on");
        document.body.classList.add("dark-theme");
    }
}

optionsMenu.forEach(optionMenu => {
    const optionsBtn = optionMenu.previousElementSibling;
    optionsBtn.addEventListener("click", (e)=> {
        e.stopPropagation();
        const isOpen = optionMenu.classList.contains("block");
        optionsMenu.forEach(menu => {
            menu.classList.remove("block");
        })
        if (!isOpen) {
            optionMenu.classList.add("block");
        }
    })
    optionMenu.addEventListener("click", (e)=> {
        e.stopPropagation();
    })
})

document.addEventListener("click", ()=> {
    optionsMenu.forEach(menu => {
        menu.classList.remove("block");
    })
})

darkThemeBtn.addEventListener("click", darkTheme)


document.addEventListener("DOMContentLoaded", ()=> {
    applyTheme();
    applyChatIconColor();
})
