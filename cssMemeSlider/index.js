const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide-img');
const indicatorsContainer = document.querySelector('.indicators');

let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateIndicators(index);
}

function updateIndicators(index) {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Создаем индикаторы
slides.forEach((_, i) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
    indicatorsContainer.appendChild(indicator);
});

// Устанавливаем начальный активный индикатор
updateIndicators(currentIndex);

// Адаптивность: изменение размера слайдов при изменении размера окна
window.addEventListener('resize', () => {
    slides.forEach(slide => {
        slide.style.width = `${sliderContainer.clientWidth}px`;
    });
    showSlide(currentIndex);
});

// Инициализация ширины слайдов
slides.forEach(slide => {
    slide.style.width = `${sliderContainer.clientWidth}px`;
});