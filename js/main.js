// Preloader 
window.addEventListener('load', function(){
    var pagePreloader = document.querySelector('.bd-preloader');

    pagePreloader.classList.add('bd-preloader-done');
    
    
    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 500);
});

// Button Contact Clicking
var btnContact = document.querySelector('.bd-btn-contact');
var btnContactImage = document.querySelector('.bd-btn-contact img');
var contactBalloon = document.querySelector('.bd-balloon-contact');

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

