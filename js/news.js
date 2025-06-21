document.addEventListener('DOMContentLoaded', function() {
    // Фильтрация новостей
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            newsCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Плавная прокрутка при пагинации
    const paginationLinks = document.querySelectorAll('.page-btn');
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Удаляем активный класс у всех кнопок
            paginationLinks.forEach(l => l.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Прокручиваем к началу новостей
            document.querySelector('.news-grid').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Обработка формы подписки
    const subscribeForm = document.querySelector('.subscribe-form');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // Здесь можно добавить AJAX-запрос для отправки данных
            alert('Спасибо за подписку! На адрес ' + emailInput.value + ' будут приходить наши новости.');
            emailInput.value = '';
        });
    }
    
    // Анимация при скролле
    function checkScroll() {
        const cards = document.querySelectorAll('.news-card');
        const windowHeight = window.innerHeight;
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            
            if (cardPosition - windowHeight <= -100) {
                card.style.animationPlayState = 'running';
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Проверяем при загрузке
});