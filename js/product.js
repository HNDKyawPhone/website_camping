  const pricePerItem = 49.99;
  const quantityInput = document.getElementById('quantity');
  const totalPriceDisplay = document.querySelector('.product-total');

  function updateTotal() {
    const quantity = parseInt(quantityInput.value);
    const total = (pricePerItem * quantity).toFixed(2);
    totalPriceDisplay.textContent = `Total: $${total}`;
  }

  quantityInput.addEventListener('input', updateTotal);

  function addToCart() {
    const quantity = parseInt(quantityInput.value);
    alert(` Total: $${(pricePerItem * quantity).toFixed(2)}`);
  }


  //carousel
  const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentSlide = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);