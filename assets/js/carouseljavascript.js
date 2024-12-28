const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let currentIndex = 0;
const totalImages = images.length;

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex >= totalImages - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex <= 0) {
    currentIndex = totalImages - 1;
  } else {
    currentIndex--;
  }
  updateCarousel();
});

function updateCarousel() {
  const width = images[currentIndex].clientWidth;
  carouselSlide.style.transform = `translateX(${-width * currentIndex}px)`;
}
