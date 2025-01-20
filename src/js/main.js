const flipcardContainers = document.querySelectorAll('.flipcard__container');

flipcardContainers.forEach(container => {
    container.addEventListener('click', () => {
        container.querySelector('.flipcard').classList.toggle('flipped');
    });
});

