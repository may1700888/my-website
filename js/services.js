document.addEventListener('DOMContentLoaded', function() {
    // Подсветка строк таблицы при наведении
    const tableRows = document.querySelectorAll('.price-table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transition = 'background-color 0.3s ease';
        });
    });
    
    // Фиксация шапки таблицы при прокрутке
    const tables = document.querySelectorAll('.table-responsive');
    
    tables.forEach(table => {
        const thead = table.querySelector('thead');
        
        window.addEventListener('scroll', function() {
            const tableRect = table.getBoundingClientRect();
            
            if (tableRect.top < 0 && tableRect.bottom > 100) {
                thead.style.position = 'sticky';
                thead.style.top = '80px';
                thead.style.zIndex = '10';
                thead.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            } else {
                thead.style.position = 'static';
                thead.style.boxShadow = 'none';
            }
        });
    });
    
    // Плавная прокрутка к таблицам
    document.querySelectorAll('.price-table').forEach(table => {
        table.addEventListener('click', function(e) {
            if (e.target.tagName === 'TD') {
                this.querySelector('thead').scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        });
    });
    
    // Анимация карточек преимуществ
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});