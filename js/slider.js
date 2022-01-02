// Portfolio Slider


// ============================== Declare slider variables ================================
const sliderContainer = document.querySelector('.bd-slider-container');
const sliderList = document.querySelector('.bd-slider-list');
const sliderItem = document.querySelectorAll('.bd-slider-item');
var sliderListWidth = null;

const sliderTotalItemsCounter = sliderItem.length;
var sliderCurrentItem = document.querySelectorAll('.bd-current-slide');
const sliderLastItem = document.querySelector('.bd-last-slide');

var containerWidth = sliderContainer.parentElement.offsetWidth;

const prevItem = document.querySelector('.bd-btn-prev');
const nextItem = document.querySelector('.bd-btn-next');
var sliderPos = 0;
var sliderPosCounter = 1;

const navigatorLines = document.querySelectorAll('.bd-portfolio-navigator a');


// ============================== Passing individual width ================================
sliderContainer.style.width = containerWidth + 'px';

for (let n = 0; n < sliderItem.length; n++) {
    sliderItem[n].style.width = containerWidth + 'px';
    var sliderItemWidth = sliderItem[n].offsetWidth;

    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';


// ============================== HANDLERS ================================

// Move slider Function
var moveSlider = function (sliderDir) {

    if (sliderDir === false) {
        var lastItem = sliderListWidth - containerWidth;

        if ((-1*(sliderPos) === lastItem)) {
            return;
        }

        sliderPos -= containerWidth

        anime({
            targets: sliderList,
            translateX: sliderPos
          });

        sliderPosCounter++;


    }
    else {

        if ((sliderPos === 0)) {
            return;
        }

        sliderPos += containerWidth

        anime({
            targets: sliderList,
            translateX: sliderPos
          });

          sliderPosCounter--;


    }

}

// Slider Counter Formatter
var counterFormatter = function(n) {

    if(n < 10) {
        return '0' + n;
    }

    else {
        return n;
    }
}

// Slider Current Counter
var sliderCurrentItemCounter = function() {

    for (let n = 0; n < sliderCurrentItem.length; n++) {

    sliderCurrentItem[n].innerHTML = counterFormatter(sliderPosCounter);
    }
}

// Navigator lines modifier
var navigatorLinesCounter = function() {

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