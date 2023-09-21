const carousel = document.querySelector('.carousel');

// Clona los elementos para hacer el carrusel infinito
const items = carousel.querySelectorAll('.carousel-item');
items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
});

// Inicia el carrusel
let position = 0;
const speed = 1;
function updateCarousel() {
    position -= speed;
    carousel.style.transform = `translateX(${position}%)`;
    requestAnimationFrame(updateCarousel);
}
updateCarousel();