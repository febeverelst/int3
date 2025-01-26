import { initHamburger } from './hamburger.js';
import { updateProgressBar, countdown } from './progress.js';
import { minigame } from './minigame.js';
import { hero, injury, fontHeadline, typeQuote, printingKeywords, bibleKeywords, investCard, turmoilPanels, stackingCards } from './gsap.js';

const flipcardContainers = document.querySelectorAll('.flipcard__container');
const carouselItems = document.querySelectorAll('.carousel__item');
const buttons = document.querySelectorAll('.pagination-btn');
const textarea = document.querySelector('.font__textarea');
const plantinButton = document.querySelector('.font__button--plantin');
const garamondButton = document.querySelector('.font__button--garamond');

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

const resetButton = () => {
    plantinButton.style.transform = 'scale(1)';
    garamondButton.style.transform = 'scale(1)';

};

const fontInteraction = () => {
    plantinButton.addEventListener('click', () => {
        textarea.style.fontFamily = 'Plantin, serif';
        resetButton();
        plantinButton.style.transform = 'scale(1.1)';
    });

    garamondButton.addEventListener('click', () => {
        textarea.style.fontFamily = "var(--garamond)";
        resetButton();
        garamondButton.style.transform = 'scale(1.1)';
    });

}

const interactSlider = () => {
    const fontInteraction = document.querySelector('.font__interaction');
    fontInteraction.addEventListener('click', (event) => {
        if (event.target !== fontInteraction) return;
        fontInteraction.classList.add('font__interaction--clicked');
        fontInteraction.classList.toggle('font__interaction--visible');
    });
}


const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener('resize', resetCarouselItems);
    resetCarouselItems();
    carouselItems[0].classList.add('active');
    buttons[0].classList.add('active');

    hero();
    injury();
    fontHeadline();
    initHamburger();
    updateProgressBar();
    countdown();
    minigame();
    typeQuote();
    printingKeywords();
    bibleKeywords();
    investCard();
    turmoilPanels();
    fontInteraction();
    interactSlider();
    stackingCards();

    console.log(gsap.version);
}

init();
