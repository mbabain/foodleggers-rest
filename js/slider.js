const dots = document.querySelectorAll('.slider-dot');
const dotsArea = document.querySelector('.slider-dots');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.arrow-prev');
const nextBtn = document.querySelector('.arrow-next');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
    }
    for (let i = 0; i < slides.length; i++) {
        dots[i].classList.remove('dot-active');
    }
    slides[slideIndex - 1].style.opacity = '1';
    dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides(slideIndex = n);
}
prevBtn.addEventListener('click', () => {
    plusSlides(-1);
});
nextBtn.addEventListener('click', () => {
    plusSlides(1);
});
dotsArea.addEventListener('click', (e) => {
    for (i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('slider-dot') && e.target == dots[i - 1] ) {
            currentSlide(i);
        }
    }
})