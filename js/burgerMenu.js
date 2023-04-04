'use strict';

document.addEventListener('DOMContentLoaded', () => {
    //Burger menu
    const burgerMenu = document.querySelector('.burger-menu');

    //Open a link
    function openLink(content) {
        //Close burger menu
        burgerMenu.style.left = '-100%';
        document.documentElement.style.overflow = 'scroll';

        //Get element from page (Content)
        let contentElement = document.querySelector(`.${content}`);

        //Get element position
        let contentElementPosition = contentElement.getBoundingClientRect().top + document.documentElement.scrollTop;

        //Set document scrollTop depends on element position
        document.documentElement.scrollTop = contentElementPosition;
    };

    burgerMenu.addEventListener('click', e => {
        //About
        if (e.target.classList.contains('about-link')) {
            openLink('about');
        } else if (e.target.classList.contains('logo')) {
            burgerMenu.style.left = '-100%';
            document.documentElement.style.overflow = 'scroll';
            document.documentElement.scrollTop = 0;
        }
    });
});