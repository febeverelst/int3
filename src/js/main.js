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
        carouselItems.forEach(item => item.style.transform = `translateX(-${index * 100}%)`);
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

const init = () =>{
    buttons[0].classList.add('active');
}

init();
