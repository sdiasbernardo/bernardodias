// Portfolio Slideshow


// ============================== Declare slider variables ================================
const slideshowNavItems = document.querySelectorAll('.bd-slideshow-nav-items');
const slideshowNavItemsBtn = document.querySelectorAll('.bd-slideshow-nav-items button');
const slideshowWorkItems = document.querySelectorAll('.bd-slideshow-works');
const slideshowWorkItemsMobile = document.querySelectorAll('.bd-slideshow-works-mobile');


// ============================== FUNCTIONS ================================

// clear slideshow Function
let clearSlideshow = function () {

    for (let n = 0; n < slideshowNavItemsBtn.length; n++) {
        slideshowNavItems[n].classList.remove('bd-slideshow-item-active');
        slideshowWorkItems[n].classList.remove('bd-slideshow-works-active');
        slideshowWorkItemsMobile[n].classList.remove('bd-slideshow-works-mobile-active');
    };
    
};




// ============================== ACTIONS ================================


// Slideshow onClick Actions
  for (let m = 0; m < slideshowNavItemsBtn.length; m++) {
    slideshowNavItemsBtn[m].addEventListener('click', function () {

        clearSlideshow();
        slideshowNavItems[m].classList.toggle('bd-slideshow-item-active');
        slideshowWorkItems[m].classList.toggle('bd-slideshow-works-active');
        slideshowWorkItemsMobile[m].classList.toggle('bd-slideshow-works-mobile-active');

    })
};