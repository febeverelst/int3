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
    if (window.innerWidth >= 52 * 16) {
        carouselItems.forEach(item => {
            item.style.removeProperty('opacity');
            item.style.removeProperty('visibility');
            item.style.removeProperty('transform');
        });
    }
};


const init = () =>{
    window.addEventListener('resize', resetCarouselItems);
    resetCarouselItems();
    carouselItems[0].classList.add('active');
    buttons[0].classList.add('active');

}

init();
