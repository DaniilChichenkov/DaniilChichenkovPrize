'use strict'

document.addEventListener('DOMContentLoaded', () => {
    //Burger menu
    const burgerMenu = document.querySelector('.burger-menu'),
          burgerMenuOpenBtn = document.querySelector('.burger-menu_open-btn'),
          burgerMenuCloseBtn = document.querySelector('.burger-menu_close-btn');

    //Open burger menu
    function openBurgerMenu() {
        burgerMenu.style.left = 0;
        //Disable scroll
        document.documentElement.style.overflow = 'hidden';
        
    };
    burgerMenuOpenBtn.addEventListener('click', openBurgerMenu);

    //Close burger menu
    function closeBurgerMenu() {
        burgerMenu.style.left = '-150%';
        //Enable scroll
        document.documentElement.style.overflow = 'scroll';
    };
    burgerMenuCloseBtn.addEventListener('click', closeBurgerMenu);


    //Burger menu sublinks
    const burgerMenuSubMenuBtn = document.querySelectorAll('[data-submenu-open-btn]'),
          burgerMenuSubMenu = document.querySelectorAll('[data-submenu]'),
          burgerMenuShapes = document.querySelectorAll('.burger-menu_inner-link_span');
    
    function openSubMenu(index) {
        //Remove 'hidden' class from submenu or add it
        burgerMenuSubMenu[index].classList.toggle('hidden');

        //Rotate shape
        burgerMenuShapes[index].classList.toggle('burger-menu_inner-link_span_opened');
    };
    burgerMenuSubMenuBtn.forEach( (item, i) => {
        item.addEventListener('click', () => {
            openSubMenu(i);
        });
    });

    //Navigation bar appear and disappear
    const navBar = document.querySelector('.nav');

    //Scroll counter
    let scrollCounter = 0;

    function scrollCheck() {
        //Set new value to burger menu position
        burgerMenu.style.top = document.documentElement.scrollTop + 'px';
        
        //If page is being scrolled down
        if (scrollCounter < document.documentElement.scrollTop) {
            scrollCounter = document.documentElement.scrollTop;
            navBar.style.top = -200 + 'px';
        } else {
            scrollCounter = document.documentElement.scrollTop;
            navBar.style.top = 0 + 'px';
        }
    };
    document.addEventListener('scroll', scrollCheck);
});