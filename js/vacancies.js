document.addEventListener('DOMContentLoaded', function() {
    // Подсветка строк таблицы при наведении
    const tableRows = document.querySelectorAll('.vacancies-table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transition = 'background-color 0.3s ease';
        });
    });
    
    // Фиксация шапки таблицы при прокрутке
    const tableContainer = document.querySelector('.table-responsive');
    const tableHeader = document.querySelector('.vacancies-table thead');
    
    if (tableContainer && tableHeader) {
        window.addEventListener('scroll', function() {
            const containerRect = tableContainer.getBoundingClientRect();
            
            if (containerRect.top < 0 && containerRect.bottom > 100) {
                tableHeader.style.position = 'sticky';
                tableHeader.style.top = '80px';
                tableHeader.style.zIndex = '10';
                tableHeader.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            } else {
                tableHeader.style.position = 'static';
                tableHeader.style.boxShadow = 'none';
            }
        });
    }
    
    // Анимация карточек способов подачи заявки
    const methods = document.querySelectorAll('.method');
    
    methods.forEach((method, index) => {
        method.style.opacity = '0';
        method.style.transform = 'translateY(20px)';
        method.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            method.style.opacity = '1';
            method.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});