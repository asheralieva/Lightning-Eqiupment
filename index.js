
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderTrack = document.querySelector('.sliders');
const slides = document.querySelectorAll('.sliders__item');
const totalSlides = slides.length;
let currentIndex = 1;

function updateSliderPosition() {
  const slideWidth = slides[0].clientWidth;
  const offset = -currentIndex * slideWidth;
  sliderTrack.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', ()=>{
    if (currentIndex > 0) {
      currentIndex--;
    //   slides[2].style.display = "none";
    } else {
      currentIndex = totalSlides - 1;

    }
    updateSliderPosition();
  });
  
  nextBtn.addEventListener('click', ()=> {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      slides[0].style.display = "none";
    } else {
      currentIndex = 0;
    //   slides[0].style.display = "none";

    }
    updateSliderPosition();
  });