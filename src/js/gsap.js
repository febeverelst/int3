export const hero = () => {
    gsap.fromTo(
        ".hero__wrapper",
        {
            scale: 0
        },
        {
            scale: 1,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                const accentText = document.querySelectorAll(".accent__text");
                accentText.forEach((e, index) => {
                    gsap.fromTo(
                        e,
                        { opacity: 0, x: index === 0 ? 100 : -100 },
                        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
                    );
                });
            }
        }
    );
};

export const injury = () => {
    const injuryText = document.querySelectorAll(".injury__section--text");
    const injuryTitle = document.querySelectorAll(".injury__header");
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".injury__section",
            start: "top top",
            end: "bottom center+=20%",
            scrub: true,
            // markers: true,
        }
    });
    tl.fromTo(
        injuryTitle,
        {
            scale: 0
        },
        {
            scale: 1
        }
    );

    tl.fromTo(
        injuryText,
        {
            x: "-30%",
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 1
        }
    );
};

export const typeQuote = () => {
    let tlQuote = gsap.timeline({
        scrollTrigger: {
            trigger: ".printing__quote",
            start: "top center",
            end: "bottom center-=30%",
            scrub: true,
        }
    });

    const printingQuote = document.querySelector(".printing__quote");
    const fullQuote = printingQuote.innerText;

    tlQuote.fromTo(
        printingQuote,
        {
            textContent: "",
        },
        {
            opacity: "100%",
            textContent: fullQuote,
            onUpdate: function () {
                printingQuote.innerHTML = fullQuote.slice(0, Math.ceil(this.progress() * fullQuote.length));
            }
        }
    );
};

export const printingKeywords = () => {
    const keywords = document.querySelectorAll(".printing__keyword");
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".printing__keywords",
            start: "top top+=15%",
            end: "bottom top+=15%",
            scrub: 1.5,
        },
    });

    keywords.forEach((keyword) => {
        if (keyword.classList.contains("right__keyword")) {
            tl.fromTo(
                keyword,
                {
                    x: "-20%",
                    opacity: 0
                },
                {
                    x: "0%",
                    opacity: 1,
                }
            );
        } else if (keyword.classList.contains("left__keyword")) {
            tl.fromTo(
                keyword,
                {
                    x: "50%",
                    opacity: 0
                },
                {
                    x: "0%",
                    opacity: 1,
                }
            );
        }
    });
};

export const fontHeadline = () => {
    const text = document.querySelector(".font__content")
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: text,
            start: "top bottom-=40%",
            end: "bottom top+=40%",
            scrub: true,
            // markers: true,
        }
    });
    tl.fromTo(
        text,
        {
            x: "-40%",
            opacity: 0
        },
        {
            x: 0,
            opacity: 1
        }
    );
}

export const bibleKeywords = () => {
    document.querySelectorAll(".bible__keyword--item").forEach((item) => {
        let xValue =
            item.classList.contains("keyword__growth") ||
                item.classList.contains("keyword__innovation") ||
                item.classList.contains("keyword__opportunity")
                ? "-50%"
                : item.classList.contains("keyword__reputation") ||
                    item.classList.contains("keyword__resilience") ||
                    item.classList.contains("keyword__perseverance")
                    ? "50%"
                    : "0";

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center+=40%",
                end: "bottom center",
                scrub: 1,
            }
        });

        tl.fromTo(
            item,
            {
                opacity: 0,
                x: xValue
            },
            {
                opacity: 1,
                x: "0%",
                duration: 1
            }
        );
    });
};

export const investCard = () =>{
    const card = document.querySelector(".bible__card--block");
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".bible__content--flipcard",
            start: "top+=50% center",
            end: "bottom+=100% center+=40%",
            scrub: true,
            // markers: true,
        }
    });
    tl.fromTo(
        card,
        {
            opacity: 0,
            scale: 0
        },
        {
            opacity: 1,
            scale: 1
        }
    );
}

export const turmoilPanels = () => {
    const mediaQuery = window.matchMedia("(max-width: 51em)");
    let scrollTriggers = [];

    if (mediaQuery.matches) {
        const panels = document.querySelectorAll(".turmoil__item");

        panels.forEach((panel) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    start: "top bottom-=10%",
                    end: "bottom bottom-=20%",
                    scrub: 1.5,
                },
            });

            tl.fromTo(
                panel,
                {
                    opacity: 0,
                    x: "-50%"
                },
                {
                    opacity: 1,
                    x: 0
                }
            );

            scrollTriggers.push(tl.scrollTrigger);
        });
    } else {
        scrollTriggers.forEach((trigger) => trigger.kill());
        scrollTriggers = [];
    }
};

export const stackingCards = () => {
    const pinningSection = document.querySelector(".stacking__cards--section");
    const cards = document.querySelectorAll(".stacking__card");

    if (pinningSection) {
        ScrollTrigger.create({
            trigger: pinningSection,
            start: "top top",
            end: "bottom center",
            pin: true,
            pinSpacing: true,
        });
    }

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: pinningSection,
            start: "top top",
            end: "bottom center",
            scrub: true,
        },
    });

    tl.fromTo(
        cards,
        {
            y: "100%",
            opacity: 0
        },
        {
            y: "0%",
            opacity: 1,
            duration: 5,
            stagger: 10
        }
    );
};
