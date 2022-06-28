let btn  = document.getElementById("btn-menu");
let menu  = document.getElementById("sm-nav-links");
function toggleMenu() {
    if (menu.classList.contains("hidden-list")){
        menu.classList.remove("hidden-list");
        menu.classList.add("show-list");
    } else {
        menu.classList.remove("show-list");
        menu.classList.add("hidden-list");
    }
}

btn.onclick = toggleMenu;