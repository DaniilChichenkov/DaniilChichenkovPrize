'use strict'

document.addEventListener('DOMContentLoaded', () => {
    //Get 'why' and 'header' sections
    const why = document.querySelector('.why'),
          header = document.querySelector('.header'),
          headerInnerContainer = document.querySelector('[data-header-inner-content]'),
          headerAnimationBreakpoint = document.querySelector('.header_main-h');

    //Set 'why' section margin top depends on 'header' section height
    why.style.marginTop = header.scrollHeight + 'px';

    //Function to hide and show header content depends on document scroll
    function checkPosition(why, header) {
        if (why <= header) {
            //Check if header content is not already hidden
            if (!headerInnerContainer.classList.contains('hidden')) {
                headerInnerContainer.classList.add('hidden');
            }
        } else {
            if (headerInnerContainer.classList.contains('hidden')) {
                headerInnerContainer.classList.remove('hidden');
            }
        }
    };
    document.addEventListener('scroll', () => {
        let headerInnerContentPosition = headerAnimationBreakpoint.getBoundingClientRect().bottom,
            whySectionPosition = why.getBoundingClientRect().top;
        checkPosition(whySectionPosition, headerInnerContentPosition);
    });
});