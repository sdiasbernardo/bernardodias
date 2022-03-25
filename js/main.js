// Preloader 
window.addEventListener('load', function(){
    const pagePreloader = document.querySelector('.bd-preloader');

    pagePreloader.classList.add('bd-fade-out');
    
    
    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 500);
});


// Button Contact Clicking
const btnContact = document.querySelector('.bd-btn-contact');
const btnContactImage = document.querySelector('.bd-btn-contact');
const contactBalloon = document.querySelector('.bd-balloon-contact');

btnContact.addEventListener('click', function() {

    contactBalloon.classList.toggle('balloon-opened');
    btnContactImage.classList.toggle('btn-contact-active');

});


// Modal
const toggleModal = document.querySelectorAll('.bd-toggle-modal');

for (let n = 0; n < toggleModal.length; n++) {
    toggleModal[n].addEventListener('click', function () {
        const overlay = document.querySelector('.bd-overlay');
        const modalSample = document.querySelector('#bd-modal-sample');

        overlay.classList.toggle('bd-overlay-shown');
        modalSample.classList.toggle('bd-modal-shown');
    })
};


// Waypoints scroll

let headerScrollDown = {
    waypoint: new Waypoint( {
        element: document.querySelector('.bd-header'),
        handler: function() {
        this.element.classList.toggle('sticky');
    },
    offset: -15
})};

let myScrollDown = {
    waypoint: new Waypoint( {
        element: document.querySelector('.bd-scroll-down'),
        handler: function() {
        this.element.classList.toggle('bd-fade-out');
    },
    offset: '80%'
})};
