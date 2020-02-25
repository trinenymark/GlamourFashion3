const karoselSlide = document.querySelector('.karosel-slide');
const karoselImages = document.querySelectorAll('.karosel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = karoselImages[0].clientWidth;

karoselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//button Listeners

nextBtn.addEventListener('click',()=>{
    if (counter >= karoselImages.length -1) return;
    karoselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    karoselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    

})
prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    karoselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    karoselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    

})

karoselSlide.addEventListener('transitionend', ()=>{
    if (karoselImages[counter].id === 'lastClone'){
        karoselSlide.style.transition = "none";
        counter = karoselImages.length - 2 ;
        karoselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
        if (karoselImages[counter].id === 'firstClone'){
        karoselSlide.style.transition = "none";
        counter = karoselImages.length - counter ;
        karoselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }

})


//TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TESTTEST TEST TEST TEST TEST TEST -----------------------

var karosel = document.querySelector(".karosel-container");
var musika = document.getElementById("playAudio");
var videoo = document.getElementById("videon");

window.addEventListener("scroll", function () {
    if (videoo.getBoundingClientRect().top < innerHeight || karosel.getBoundingClientRect().bottom < window.innerHeight ) {
        musika.pause();
    }
    else musika.play();
    

})

const parallax = document.getElementById ("storbillede");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})


















