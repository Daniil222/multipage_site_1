window.onload = () => {
    let mainMenu = document.querySelector('.header-navigation-menu-burger_menu');
    let burgerMenu = document.querySelector('.header-navigation-menu-burger_menu-button');
    let navigationList = document.querySelector('.header-navigation-menu-burger_menu-nav');
    let overlay = document.querySelector('.header-navigation-menu-burger_menu-overlay');
    let collapseMenu = () => {
        if (mainMenu.className.match(/burger_menu-active/g)) {
            navigationList.style.display = 'none';
        } else {
            navigationList.style.display = 'flex';
        }
        mainMenu.classList.toggle("burger_menu-active");
    }
    let hideMenu = () => {
        if (mainMenu.className.match(/burger_menu-active/g)) {
            navigationList.style.display = 'none';
            mainMenu.classList.toggle("burger_menu-active");
        }
    }
    overlay.addEventListener('click', hideMenu);
    burgerMenu.addEventListener('click', collapseMenu);
}