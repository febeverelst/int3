const cardContainer = document.querySelector('.card__container');

cardContainer.addEventListener('click', () => {
    cardContainer.querySelector('.card').classList.toggle('flipped');
});
