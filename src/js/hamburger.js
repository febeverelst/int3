export const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
};


export const initHamburger = () => {
    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close-btn');

    if (hamburger && closeBtn) {
        hamburger.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
    } else {
        console.warn('Hamburger or close button not found in the DOM.');
    }
};