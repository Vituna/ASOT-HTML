document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const slideTrack = document.querySelector('.slide-track');
    const slider = document.querySelector('.slider');
    let animationPaused = false;
  
    // Функция для остановки анимации
    function stopAnimation() {
      slideTrack.style.animationPlayState = 'paused';
      animationPaused = true;
    }
  
    // Функция для возобновления анимации
    function startAnimation() {
      slideTrack.style.animationPlayState = 'running';
      animationPaused = false;
    }
  
    slides.forEach(slide => {
      // При наведении курсора на слайд
      slide.addEventListener('mouseover', function() {
        stopAnimation();
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
      });
  
      // Когда курсор покидает слайд
      slide.addEventListener('mouseleave', function() {
        if (animationPaused) {
          startAnimation();
        }
        this.style.transform = 'scale(1)';
      });
  
      // При клике на слайд
      slide.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src; // Получаем источник изображения
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.left = 0;
        modal.style.top = 0;
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.zIndex = '10000';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.cursor = 'zoom-out';
        modal.innerHTML = `<img src="${imgSrc}" style="max-width: 90%; max-height: 90%;">`;
        document.body.appendChild(modal);
  
        // Удаление модального окна при клике
        modal.addEventListener('click', function() {
          document.body.removeChild(modal);
        });
      });
    });
  
    // Центрирование слайда при наведении
    function centerSlide(slide) {
      const slideWidth = slide.offsetWidth;
      const sliderWidth = slider.offsetWidth;
      const slideOffset = slide.offsetLeft;
      const shift = (sliderWidth / 2) - (slideWidth / 2) - slideOffset;
      
      slideTrack.style.transform = `translateX(${shift}px)`;
      slideTrack.style.transition = 'transform 0.5s ease';
    }
  });
  