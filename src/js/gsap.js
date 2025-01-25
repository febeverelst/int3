export const typeQuote = () => {
    let tlQuote = gsap.timeline({
        scrollTrigger: {
            trigger: ".printing__quote",
            start: "top center+=30%",
            end: "bottom center",
            scrub: true,
            markers: true
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
    let tlPrintKey = gsap.timeline({
        scrollTrigger: {
            trigger: ".printing__keywords",
            start: "top bottom-=30%",
            end: "bottom bottom-=35%",
            scrub: 1.5,
            markers: true
        },
    });


    keywords.forEach((keyword) => {
        if (keyword.classList.contains("right__keyword")) {
            tlPrintKey.fromTo(
                keyword,
                { 
                    x: "-20%", 
                    opacity: 0 }, 
                { 
                    x: "0%", 
                    opacity: 1,  
                },
            );
        } else if (keyword.classList.contains("left__keyword")) {
            tlPrintKey.fromTo(
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


