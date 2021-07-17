"use strict";


const header = document.getElementById('header')
const adaptive = document.getElementById('adaptive');
const menu = document.getElementById('menu');
const headerButtonContainer = document.getElementById('header__button-container');

adaptive.addEventListener('click', switchMenu);

function switchMenu() {
    header.classList.toggle('vh-bg');
    headerButtonContainer.classList.toggle('d-none');
    menu.classList.toggle('d-none');
}

function scrollingPosition(event) {
    if (event.target.id !== 'home' && event.target.tagName === 'A') {
        for (let i = 0; i < elem.length; i++) {
            elem[i].className = 'elem';
        }
        event.preventDefault();
        const blockId = event.target.getAttribute('href');
        const id = document.querySelector(blockId);
        id.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }
}
menu.addEventListener('click', scrollingPosition);

const servicesBlock = document.querySelectorAll('.services__block');
const servicePreview = document.querySelectorAll('.service-preview');
const servicesBlockHidden = document.querySelectorAll('.services__block__hidden');
// const servicesBlock1 = document.getElementById('services__block-1');
// const servicePreview1 = document.getElementById('service-preview-1');
// const servicesBlockHidden1 = document.getElementById('services__block__hidden-1');
// servicePreview1.addEventListener('click', switchHiddenBlock1);
// function switchHiddenBlock1() {
//     servicesBlock1.classList.toggle('services__block__clicked');
//     servicesBlockHidden1.classList.toggle('services__block__hidden-opened');
// }

// const servicesBlock2 = document.getElementById('services__block-2');
// const servicePreview2 = document.getElementById('service-preview-2');
// const servicesBlockHidden2 = document.getElementById('services__block__hidden-2');
// servicePreview2.addEventListener('click', switchHiddenBlock2);
// function switchHiddenBlock2() {
//     servicesBlock2.classList.toggle('services__block__clicked');
//     servicesBlockHidden2.classList.toggle('services__block__hidden-opened');
// }

// const servicesBlock3 = document.getElementById('services__block-3');
// const servicePreview3 = document.getElementById('service-preview-3');
// const servicesBlockHidden3 = document.getElementById('services__block__hidden-3');
// servicePreview3.addEventListener('click', switchHiddenBlock3);
// function switchHiddenBlock3() {
//     servicesBlock3.classList.toggle('services__block__clicked');
//     servicesBlockHidden3.classList.toggle('services__block__hidden-opened');
// }

// const servicesBlock4 = document.getElementById('services__block-4');
// const servicePreview4 = document.getElementById('service-preview-4');
// const servicesBlockHidden4 = document.getElementById('services__block__hidden-4');
// servicePreview4.addEventListener('click', switchHiddenBlock4);
// function switchHiddenBlock4() {
//     servicesBlock4.classList.toggle('services__block__clicked');
//     servicesBlockHidden4.classList.toggle('services__block__hidden-opened');
// }

// const servicesBlock5 = document.getElementById('services__block-5');
// const servicePreview5 = document.getElementById('service-preview-5');
// const servicesBlockHidden5 = document.getElementById('services__block__hidden-5');
// servicePreview5.addEventListener('click', switchHiddenBlock5);
// function switchHiddenBlock5() {
//     servicesBlock5.classList.toggle('services__block__clicked');
//     servicesBlockHidden5.classList.toggle('services__block__hidden-opened');
// }



// ERROR

// ERROR





const slides = document.getElementById('slides');
const slide = slides.querySelectorAll('.slide');
const slideTime = 2000;
const arrowPrev = document.getElementById('arrow-prev');
const arrowNext = document.getElementById('arrow-next');
const toggleRadio = document.getElementById('toggle-radio');
const toggleInput = toggleRadio.querySelectorAll('input');
const slidesMin = document.getElementById('slides-min');
const slideMin = slidesMin.querySelectorAll('.slide-min');


let currentSlide = 0;
let slideInterval;


function continueSlideInterval() {
    slideInterval = setInterval(nextSlide, slideTime);
}

function slideReset() {
    slide[currentSlide].className = 'slide';
    slideMin[currentSlide].className = 'slide-min';
}

function slideSet() {
    slide[currentSlide].className = 'slide showing';
    toggleInput[currentSlide].checked = true;
    slideMin[currentSlide].className = 'slide-min show-min';
}

function nextSlide() {
    slideReset();
    currentSlide = ++currentSlide % slide.length;
    slideSet();
}

function stopSlide() {
    clearInterval(slideInterval);
}

function showNextSlide() {
    stopSlide();
    nextSlide();
}

function showPrevSlide() {
    stopSlide();
    slideReset();
    currentSlide = (currentSlide == 0) ? slide.length - 1 : currentSlide - 1;
    slideSet();
}

function toggleSlide(event) {
    stopSlide();
    slideReset();
    currentSlide = event.target.value;
    slideSet();
}

function toggleMinSlide(event) {
    if (event.target.tagName === 'LI') {
        stopSlide();
        slideReset();
        currentSlide = event.target.dataset.id;
        slideSet();
    }
}

toggleRadio.addEventListener('input', toggleSlide);
continueSlideInterval();
slides.addEventListener('mouseover', stopSlide);
slides.addEventListener('mouseout', continueSlideInterval);
arrowNext.addEventListener('click', showNextSlide);
arrowPrev.addEventListener('click', showPrevSlide);
slidesMin.addEventListener('click', toggleMinSlide);






const parent = document.querySelectorAll('.parent');
const elem = document.querySelectorAll('.parent>.elem');

function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeights = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeights;
    let bottomVisible = coords.bottom > 0 && coords.bottom < windowHeights;
    return topVisible && bottomVisible;
}

function showElem() {
    for (let i = 0; i < parent.length; i++) {
        if (isVisible(parent[i])) {
            elem[i].className = 'elem';
        }
    }
}

window.addEventListener('scroll', showElem);



const reviewSlides = document.getElementById('get-started__slides');
const reviewSlide = reviewSlides.querySelectorAll('.get-started__slide');
const nextReviewArrow = document.getElementById('review-arrow-next');
const prevReviewArrow = document.getElementById('review-arrow-prev');

const reviewSlideTime = 3000;
let reviewCurrentSlide = 0;
let reviewSlideInterval;

function slideReview() {
    reviewSlideInterval = setInterval(nextReviewSlide, reviewSlideTime);
}

function reviewSlideReset() {
    reviewSlide[reviewCurrentSlide].className = 'get-started__slide';
}

function reviewSlideSet() {
    reviewSlide[reviewCurrentSlide].className = 'get-started__slide get-started__slide-showing nextSlideAnimation';
}

function nextReviewSlide() {
    reviewSlideReset();
    reviewCurrentSlide = ++reviewCurrentSlide % reviewSlide.length;
    reviewSlideSet();
}

function stopReviewSlide() {
    clearInterval(reviewSlideInterval);
}

function showNextReviewSlide() {
    stopReviewSlide();
    nextReviewSlide();
    reviewSlide[reviewCurrentSlide].className = 'get-started__slide get-started__slide-showing nextSlideAnimation';
}

function showPrevReviewSlide() {
    stopReviewSlide();
    reviewSlideReset();
    reviewCurrentSlide = (reviewCurrentSlide == 0) ? reviewSlide.length - 1 : reviewCurrentSlide - 1;
    reviewSlideSet();
    reviewSlide[reviewCurrentSlide].className = 'get-started__slide get-started__slide-showing prevSlideAnimation';
}

// if (showNextReviewSlide) {
//     reviewSlide.style.animation = 'nextSlide 1s 1';
// } else if (showPrevReviewSlide) {
//     reviewSlide.style.animation = 'prevSlide 1s 1';
// }


slideReview();
reviewSlides.addEventListener('mouseover', stopReviewSlide);
reviewSlides.addEventListener('mouseout', slideReview);
nextReviewArrow.addEventListener('click', showNextReviewSlide);
prevReviewArrow.addEventListener('click', showPrevReviewSlide);