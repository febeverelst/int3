export const typeQuote = () => {
    let tlQuote = gsap.timeline({
        scrollTrigger: {
            trigger: ".printing__quote",
            start: "top center+=30%",
            end: "bottom center",
            scrub: true,
            // markers: true
        }
    });


    const printingQuote = document.querySelector(".printing__quote");
    const fullQuote = printingQuote.innerText;

    tlQuote.fromTo(printingQuote,
        {
            textContent: "",

        },
        {
            opacity: "100%",
            textContent: fullQuote,
            onUpdate: function () {
                printingQuote.innerHTML = fullQuote.slice(0, Math.ceil(this.progress() * fullQuote.length));
            }
        });
}


export const printingKeywords = () => {
    const keywords = document.querySelectorAll(".printing__keyword"); // Select all keywords
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".printing__keywords",
            start: "top bottom-=30%",
            end: "bottom bottom-=35%",
            scrub: 1.5,
            // markers: true
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
                },
            );
        } else if (keyword.classList.contains("left__keyword")) {
            tl.fromTo(
                keyword,
                {
                    x: "50%",
                    opacity: 0
                }, // Start off-screen to the right
                {
                    x: "0%",
                    opacity: 1,
                }, // Animate to its final position
            );
        }
    });
};


export const bibleKeywords = () => {
    document.querySelectorAll(".bible__keyword--item").forEach((item) => {
        // Determine x based on class name
        let xValue =
            item.classList.contains("keyword__growth") ||
                item.classList.contains("keyword__innovation") ||
                item.classList.contains("keyword__opportunity")
                ? "-50%" // Move left
                : item.classList.contains("keyword__reputation") ||
                    item.classList.contains("keyword__resilience") ||
                    item.classList.contains("keyword__perseverance")
                    ? "50%" // Move right
                    : "0"; // Default (no movement)

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: item, // Use the current item as the trigger
                start: "top center+=40%",
                end: "bottom center",
                scrub: 1,
                // markers: true
            }
        });

        tl.fromTo(
            item,
            {
                opacity: 0,
                x: xValue // Use the determined x value
            },
            {
                opacity: 1,
                x: "0%", // Move back to the original position
                duration: 1
            }
        );
    });
};
