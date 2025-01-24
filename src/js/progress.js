// funtion comparing total height to pos
function updateProgressBar() {
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
    console.log(scrollPercent);

    // updating progress variable
    document.querySelector('.progress__bar').style.setProperty('--progress', scrollPercent);
}


// event listener for scroll
document.addEventListener('scroll', updateProgressBar)
