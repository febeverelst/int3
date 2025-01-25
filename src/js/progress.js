// funtion comparing total height to pos
export const updateProgressBar = () => {
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
    // console.log(scrollPercent);

    // updating progress variable
    document.querySelector('.progress__bar').style.setProperty('--progress', scrollPercent);
}


// event listener for scroll
document.addEventListener('scroll', updateProgressBar);

export const countdown = () => {
    const countDownDates = [
        { date: new Date("Feb 1, 2025 00:00:00").getTime(), selector: "1" },
        { date: new Date("Mar 1, 2025 00:00:00").getTime(), selector: "2" },
        { date: new Date("Apr 1, 2025 00:00:00").getTime(), selector: "3" },
        { date: new Date("May 1, 2025 00:00:00").getTime(), selector: "4" },
        { date: new Date("Jun 1, 2025 00:00:00").getTime(), selector: "5" },
    ];

    const updateCountdown = (now, countDownDate, selector) => {
        const offsetTime = countDownDate - now;

        // Calculate remaining time
        const days = Math.floor(offsetTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((offsetTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((offsetTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((offsetTime % (1000 * 60)) / 1000);

        // Update HTML
        document.querySelector(`.days${selector}`).innerHTML = days;
        document.querySelector(`.hours${selector}`).innerHTML = hours;
        document.querySelector(`.minutes${selector}`).innerHTML = minutes;
        document.querySelector(`.seconds${selector}`).innerHTML = seconds;
    };

    const intervalFunction = () => {
        const now = new Date().getTime();
        countDownDates.forEach(({ date, selector }) => updateCountdown(now, date, selector));
    };

    setInterval(intervalFunction, 1000);
};

