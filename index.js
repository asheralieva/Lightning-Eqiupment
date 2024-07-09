const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  const sliders = document.querySelector('.sliders');
  let currentIndex = 0;

  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= sliders.children.length) {
      currentIndex = 0;
    }
    sliders.style.transform = `translateX(-${currentIndex * 540}px)`;
  });

  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = sliders.children.length - 1;
    }
    sliders.style.transform = `translateX(-${currentIndex * 540}px)`;
  });