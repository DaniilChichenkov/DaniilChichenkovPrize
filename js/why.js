'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const contentBlocks = document.querySelectorAll('.content-block');

    //Appear animation
    function checkContentBlocksPosition() {
        //Check if content block is on the screen
        contentBlocks.forEach( (item, i) => {
            //If window width is below 320px (Mobile S)
            if (window.innerWidth <= 320) {
                //If value is below 0 => block is on the screen
                if ( (item.getBoundingClientRect().top - window.innerHeight) < -80) {
                    item.style.opacity = 1;
                }
            //If window width is between 320 and 500px (Mobile M)
            } else if (window.innerWidth >= 320 && window.innerWidth <= 500) {
                if ( (item.getBoundingClientRect().top - window.innerHeight) < -120) {
                    item.style.opacity = 1;
                }
            }
        });
    };
    document.addEventListener('scroll', checkContentBlocksPosition);
});