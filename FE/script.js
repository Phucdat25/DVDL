// Slider
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

document.querySelector('.next').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlide();
});
document.querySelector('.prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
});
function updateSlide() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
setInterval(() => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlide();
}, 5000);

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// Popup form
const popup = document.getElementById('popupForm');
document.getElementById('openForm').addEventListener('click', () => {
  popup.style.display = 'block';
});
document.getElementById('closeForm').addEventListener('click', () => {
  popup.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target == popup) popup.style.display = 'none';
});
