// Portfolio Slider


// ============================== Declare slider variables ================================
const sliderContainer = document.querySelector('.bd-slider-container');
const sliderList = document.querySelector('.bd-slider-list');
const sliderItem = document.querySelectorAll('.bd-slider-item');
let sliderListWidth = null;

const sliderTotalItemsCounter = sliderItem.length;
let sliderCurrentItem = document.querySelectorAll('.bd-current-slide');
const sliderLastItem = document.querySelector('.bd-last-slide');
let sliderimagesThumb = document.querySelectorAll('.bd-portfolio-slider-thumb');
let sliderimagesThumbBox = document.querySelectorAll('.bd-portfolio-slider-thumb-box');

let containerWidth = sliderContainer.parentElement.offsetWidth;

const prevItem = document.querySelector('.bd-btn-prev');
const nextItem = document.querySelector('.bd-btn-next');
let sliderPos = 0;
let sliderPosCounter = 1;

const navigatorLines = document.querySelectorAll('.bd-portfolio-navigator a');


// ============================== Passing individual width ================================
sliderContainer.style.width = containerWidth + 'px';

for (let n = 0; n < sliderItem.length; n++) {
    sliderItem[n].style.width = containerWidth + 'px';
    let sliderItemWidth = sliderItem[n].offsetWidth;

    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';


// ============================== HANDLERS ================================

// Move slider Function
let moveSlider = function (sliderDir) {

    if (sliderDir === false) {
        let lastItem = sliderListWidth - containerWidth;

        if ((-1*(sliderPos) === lastItem)) {
            return;
        }

        sliderPos -= containerWidth

        // Moving effect
        anime({
            targets: sliderList,
            easing: 'spring(1, 100, 20, 0)',
            translateX: sliderPos
          });

        // Thumb effect
        anime({
            targets: sliderimagesThumb[sliderPosCounter],
            easing: 'spring(1, 80, 10, 0)',
            scale: [1.5, 1],
            duration: '300'
        });
        anime({
            targets: sliderimagesThumbBox[sliderPosCounter],
            easing: 'easeOutElastic(1, .6)',
            width: ['10%', '90%'],
            duration: '200',
            delay: 100
        });

        sliderPosCounter++;


    }
    else {

        if ((sliderPos === 0)) {
            return;
        }

        sliderPos += containerWidth

        // Moving effect
        anime({
            targets: sliderList,
            easing: 'spring(1, 100, 20, 0)',
            translateX: sliderPos
          });

        sliderPosCounter--;

        // Thumb effect
        anime({
            targets: sliderimagesThumb[sliderPosCounter-1],
            easing: 'spring(1, 80, 10, 0)',
            scale: [1.5, 1],
            duration: '300'
        });
        anime({
            targets: sliderimagesThumbBox[sliderPosCounter-1],
            easing: 'easeOutElastic(1, .6)',
            width: ['10%', '90%'],
            duration: '200',
            delay: 100
        });


    }

}

// Slider Counter Formatter
let counterFormatter = function(n) {

    if(n < 10) {
        return '0' + n;
    }

    else {
        return n;
    }
}

// Slider Current Counter
let sliderCurrentItemCounter = function() {

    for (let n = 0; n < sliderCurrentItem.length; n++) {

    sliderCurrentItem[n].innerHTML = counterFormatter(sliderPosCounter);
    }
}

// Navigator lines modifier
let navigatorLinesCounter = function() {

    for (let n = 0; n < navigatorLines.length; n++) {

        if(n === (sliderPosCounter-1)) {
            navigatorLines[n].classList.add('bd-item-active');
            anime({
                targets: '.bd-item-active',
                width: 90
              });
        }

        else {
            navigatorLines[n].classList.remove('bd-item-active');
            anime({
                targets: navigatorLines[n],
                width: 20
              });
        }

    }
    
}



// ============================== ACTIONS ================================

// Slider onClick Animations
nextItem.addEventListener('click', function() {
    moveSlider(false);
    sliderCurrentItemCounter();
    navigatorLinesCounter();
});

prevItem.addEventListener('click', function() {
    moveSlider(true);
    sliderCurrentItemCounter();
    navigatorLinesCounter();
});

// Check counter below number 10 then add 0
sliderLastItem.innerHTML = counterFormatter(sliderTotalItemsCounter);

// Apply Navigator Line size on page load
anime({
    targets: '.bd-item-active',
    width: 90
});