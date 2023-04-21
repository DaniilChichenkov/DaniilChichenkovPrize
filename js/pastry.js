'use strict';

document.addEventListener('DOMContentLoaded', () => {

    //Database
    const cardsDB = [
        { position: 0 },
        { position: 1 },
        { position: 2 },
        { position: 3 },
    ];

    //Cards
    const cards = document.querySelectorAll('.product-card');

    //Pastry container
    const pastryContainer = document.querySelector('.pastry');

    //Decrement positions (Scroll to right)
    function moveToRight(arr) {
        arr.forEach(item => {
            item.position--;
        });
        changeClasses(cards);
    };

    //Increment positions (Scroll to left)
    function moveToLeft(arr) {
        arr.forEach(item => {
            item.position++;
        });
        changeClasses(cards);
    };

    //Function to change classes
    function changeClasses(arr) {
        arr.forEach((item, i) => {
            item.classList.remove(item.classList[1]);
            item.classList.add(`card-${cardsDB[i].position}`)
        });
    };

    //Function to find active card (Card with position = 0)
    function findActiveCardIndex(arr) {
        let activeCardIndex;
        arr.forEach((item, i) => {
            if (item.position == 0) {
                activeCardIndex = i;
            }
        });
        return activeCardIndex;
    };

    cards.forEach((item, i) => {
        item.addEventListener('click', e => {

            if (e.target.classList.contains('product-card')) {
                //Find active card
                let activeCardIndex = findActiveCardIndex(cardsDB);

                //Check if e.target located right to active card => Move cards to the right
                if (e.target.getBoundingClientRect().left > cards[activeCardIndex].getBoundingClientRect().left) {

                    //Position of e.target
                    let targetPosition = e.target.classList[1].at(-1);

                    //Move until e.target will be reached
                    for (let i = 0; i < targetPosition; i++) {
                        moveToRight(cardsDB);
                    };

                    //If e.target located left to active card => Move cards to the left
                } else if (e.target.getBoundingClientRect().left < cards[activeCardIndex].getBoundingClientRect().left) {

                    //Position of e.target
                    let targetPosition = e.target.classList[1].at(-1);

                    //Move until e.target will be reached
                    for (let i = 0; i < targetPosition; i++) {
                        moveToLeft(cardsDB);
                    };
                } else {
                    console.log('a')
                }
            }
        });
    });



    //Touch

    let newTouch = true;

    let touchStartPosition = 0,
        touchEndPosition = 0;

    //Touch start event 
    cards.forEach(item => {
        item.addEventListener('touchstart', e => {
            //Setting 0 point
            if (touchStartPosition == 0 && newTouch) {
                touchStartPosition = e.touches[0].pageX;
                newTouch = false;
            }
        });
    })

    //Touch move event
    cards.forEach(item => {
        item.addEventListener('touchmove', e => {
            addEventListener('touchmove', e => {

                if (!newTouch) {
                    //Setting touch end position
                    touchEndPosition = e.touches[0].pageX;
        
                    //Disable Y-scrolling 
                    document.documentElement.style.overflowY = 'hidden';
                }
            });
        });
    });

    //Touch cancel event
    cards.forEach(item => {
        item.addEventListener('touchend', e => {

            //Set new touch value to true
            newTouch = true;
    
            //If user swiped from right to left => move cards to the right
            if (touchEndPosition < touchStartPosition - 70) {
                
                //Check if there are still any cards left to swipe
                if (cardsDB[0].position !== -3) {
                    moveToRight(cardsDB);
                };
    
                //If user swiped from left to right => move cards to the left
            } else if (touchEndPosition > touchStartPosition + 70) {
                
                //Check if there are still any cards left to swipe
                if (cardsDB[cardsDB.length - 1].position !== 3) {
                    moveToLeft(cardsDB);
                }
            }
    
            //Enable Y-scrolling 
            document.documentElement.style.overflowY = 'scroll';
    
            //Set start and end values to 0
            touchStartPosition = 0;
            touchEndPosition = 0;
        });
    });
});