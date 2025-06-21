document.addEventListener('DOMContentLoaded', function() {
    // Обработка формы отзыва
    const reviewForm = document.getElementById('review-form');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем данные формы
            const name = document.getElementById('review-name').value;
            const rating = document.querySelector('input[name="rating"]:checked').value;
            const reviewText = document.getElementById('review-text').value;
            const donations = document.getElementById('review-donations').value || '0';
            
            // Создаем новый отзыв
            const newReview = document.createElement('article');
            newReview.className = 'review new-review';
            
            // Генерируем HTML для нового отзыва
            newReview.innerHTML = `
                <div class="review-header">
                    <img src="img/default-avatar.jpg" alt="${name}" class="review-avatar">
                    <div class="review-author">
                        <h3>${name}</h3>
                        <div class="review-rating">
                            ${'<i class="fas fa-star"></i>'.repeat(rating)}
                            ${'<i class="far fa-star"></i>'.repeat(5 - rating)}
                        </div>
                    </div>
                </div>
                <div class="review-content">
                    <p>${reviewText}</p>
                </div>
                <div class="review-footer">
                    <time datetime="${new Date().toISOString()}">${new Date().toLocaleDateString()}</time>
                    <span class="review-donation">${donations} ${getDonationWord(donations)}</span>
                </div>
            `;
            
            // Добавляем новый отзыв в начало списка
            const reviewsContainer = document.querySelector('.reviews-container');
            reviewsContainer.prepend(newReview);
            
            // Очищаем форму
            reviewForm.reset();
            
            // Показываем сообщение об успехе
            alert('Спасибо за ваш отзыв! Он появится после модерации.');
        });
    }
    
    // Функция для правильного склонения слова "донация"
    function getDonationWord(number) {
        number = parseInt(number);
        if (number % 10 === 1 && number % 100 !== 11) {
            return 'донация';
        } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
            return 'донации';
        } else {
            return 'донаций';
        }
    }
    
    // Анимация появления отзывов при загрузке страницы
    const reviews = document.querySelectorAll('.review');
    reviews.forEach((review, index) => {
        review.style.opacity = '0';
        review.style.transform = 'translateY(20px)';
        review.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            review.style.opacity = '1';
            review.style.transform = 'translateY(0)';
        }, 150 * index);
    });
});