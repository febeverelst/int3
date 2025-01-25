const typewriterEffect = (selector) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const text = element.innerText;
    const words = text.split(" ");
    element.innerHTML = words.map((word) => `<span>${word}</span>`).join(" ");

    gsap.from(`${selector} span`, {
        duration: 1,
        opacity: 0,
        x: -20,
        stagger: {
            each: 0.05,
            from: "start",
        },
        ease: "power4.inOut",
    });
};

export const typeQuote = () => {
    ScrollTrigger.create({
        trigger: ".printing__quote",
        start: "bottom bottom",
        onEnter: () => typewriterEffect(".printing__quote"),
        once: true
    });
}

