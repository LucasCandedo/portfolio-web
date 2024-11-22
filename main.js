const btnMenu = document.querySelector("#btnMenu");
const btnMenuContent = document.querySelector("#menu_button_content")
const menu = document.querySelector(".menu")

btnMenu.addEventListener("click", openMenu);

let isOpenned = true;

function openMenu() {
    if (isOpenned) {
        menu.style.left = "0"
        btnMenuContent.className = "bi bi-x-lg"
        isOpenned = false;
    } else {
        menu.style.left = "-100%"
        btnMenuContent.className = "bi bi-list"
        isOpenned = true;
    }
};