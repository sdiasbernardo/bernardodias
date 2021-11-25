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
const btnContactImage = document.querySelector('.bd-btn-contact img');
const contactBalloon = document.querySelector('.bd-balloon-contact');

btnContact.addEventListener('click', function() {

    contactBalloon.classList.toggle('balloon-opened');

    if (contactBalloon.classList.contains('balloon-opened')) {
        btnContactImage.src = "images/icon-close.svg";
        console.log('foi');
    }
    else {
        btnContactImage.src = "images/icon-email.svg";
        console.log('nao foi');
    }

});

// Modal
const toggleModal = document.querySelectorAll('.bd-toggle-modal');

for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        const overlay = document.querySelector('.bd-overlay');
        const modalSample = document.querySelector('#bd-modal-sample');

        overlay.classList.toggle('bd-overlay-shown');
        modalSample.classList.toggle('bd-modal-shown');
    })
};


// Waypoints scrolling animation
var myScrollDown = document.querySelector('.bd-scroll-down');
var waypoint = new Waypoint(
    {
    element: document.querySelector('.bd-scroll-down'),
    handler: function() {
        myScrollDown.classList.toggle('bd-fade-out');
    },
    offset: '80%'
  });