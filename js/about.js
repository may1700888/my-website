document.addEventListener('DOMContentLoaded', function() {
    // Анимация счетчиков статистики
    const counters = document.querySelectorAll('.statistic-number');
    const speed = 200;
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Запускаем анимацию при попадании секции в область видимости
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statisticsSection = document.querySelector('.statistics-section');
    if (statisticsSection) {
        observer.observe(statisticsSection);
    }
    
    // Инициализация слайдера оборудования
    const slider = document.querySelector('.equipment-slider');
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }
    
    // Анимация появления элементов при загрузке
    const animateElements = (elements, animation) => {
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.animation = 'none';
            
            setTimeout(() => {
                el.style.animation = `${animation} 0.5s ease forwards ${index * 0.1}s`;
            }, 100);
        });
    };
    
    // Применяем анимацию к карточкам миссии
    const missionCards = document.querySelectorAll('.mission-card');
    animateElements(missionCards, 'fadeInUp');
    
    // Применяем анимацию к слайдам оборудования
    const equipmentSlides = document.querySelectorAll('.equipment-slide');
    animateElements(equipmentSlides, 'fadeInRight');
    
    // Применяем анимацию к партнерам
    const partners = document.querySelectorAll('.partner-item');
    animateElements(partners, 'fadeIn');
});

// Добавляем ключевые кадры для анимаций
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);