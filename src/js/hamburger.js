
// Event listeners
document.querySelector('.hamburger').addEventListener('click', toggleMenu);
document.querySelector('.close-btn').addEventListener('click', toggleMenu);

export function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
