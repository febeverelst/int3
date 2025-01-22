const flipcardContainers = document.querySelectorAll('.flipcard__container');
const carouselItems = document.querySelectorAll('.carousel__item');
const buttons = document.querySelectorAll('.pagination-btn');

const flipCard = (container, event) => {
    if (!event.target.closest('.flipcard__button')) {
        container.querySelector('.flipcard').classList.toggle('flipped');
    }
};

flipcardContainers.forEach(container => {
    container.addEventListener('click', (event) => flipCard(container, event));
});

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
                item.style.transform = 'translateX(0%)';
            } else {
                item.classList.remove('active');
                item.style.transform = 'translateX(-100%)';
            }
        });
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

const resetCarouselItems = () => {
    if (window.innerWidth >= 52 * 16) { // Convert 52em to pixels (assuming 1em = 16px)
        carouselItems.forEach(item => {
            item.style.removeProperty('opacity');
            item.style.removeProperty('visibility');
            item.style.removeProperty('transform');
        });
    }
};

const startCountdown = () => {
    const dateElements = document.querySelectorAll('.carousel__item .campaign__date');

    dateElements.forEach((element, index) => {
        if (index === 0) return; // Skip the first element (label)

        const targetDate = new Date(element.textContent.trim());
        if (isNaN(targetDate)) return; // Skip if invalid date

        // Timer update function
        const updateTimer = () => {
            const currentTime = new Date();
            const timeRemaining = targetDate - currentTime;

            if (timeRemaining <= 0) {
                element.textContent = `${element.textContent.trim()} - Countdown finished!`;
                clearInterval(intervalId);
            } else {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                element.textContent = `${element.textContent.trim()} - ${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        };

        const intervalId = setInterval(updateTimer, 1000);
        updateTimer(); // Initial call to avoid 1-second delay
    });
};


const init = () =>{
    window.addEventListener('resize', resetCarouselItems);
    resetCarouselItems();
    carouselItems[0].classList.add('active');
    buttons[0].classList.add('active');
    startCountdown();

}

init();
