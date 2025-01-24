const checkboxes = document.querySelectorAll(".book__binding--checkbox");
let currentStep = 1; // Start with the first step
let inactivityTimer; // Timer to track inactivity
let pulsateInterval; // Interval for pulsating

// Function to start pulsating
const startPulsating = () => {
    const currentCheckbox = document.querySelector(
        `.book__binding--checkbox[data-step="${currentStep}"]`
    );
    if (currentCheckbox) {
        const button = currentCheckbox.closest("label").querySelector(".book__binding--button");
        button.classList.add("pulsate");

        // Stop pulsating after 2 seconds
        setTimeout(() => {
            button.classList.remove("pulsate");
        }, 2000); // 2 seconds of pulsating
    }
}

// Function to start the pulsating cycle after 3 seconds of inactivity
const cycle = () => {
    inactivityTimer = setTimeout(() => {
        startPulsating(); // Start pulsating for 2 seconds
        pulsateInterval = setInterval(() => {
            startPulsating(); // Repeat pulsating every 5 seconds (3 seconds wait + 2 seconds pulsate)
        }, 8000); // 5 seconds total cycle
    }, 5000); // 3 seconds delay before starting
}

// Function to reset the inactivity timer and stop pulsating
const resetInactivityTimer = () => {
    clearTimeout(inactivityTimer); // Clear the inactivity timer
    clearInterval(pulsateInterval); // Clear the pulsating interval
    const currentCheckbox = document.querySelector(
        `.book__binding--checkbox[data-step="${currentStep}"]`
    );
    if (currentCheckbox) {
        const button = currentCheckbox.closest("label").querySelector(".book__binding--button");
        button.classList.remove("pulsate"); // Stop pulsating immediately
    }
    cycle(); // Restart the cycle
}

// Add event listeners to checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", e => {
        const clickedStep = parseInt(e.target.getAttribute("data-step"), 10);

        // Check if the previous checkbox is checked
        if (clickedStep > 1) {
            const previousCheckbox = document.querySelector(
                `.book__binding--checkbox[data-step="${clickedStep - 1}"]`
            );

            if (!previousCheckbox.checked) {
                e.target.checked = false;
                cycle();
                const button = e.target.closest("label").querySelector(".book__binding--button");
                button.classList.add("shake");
                button.addEventListener("animationend", () => {
                    button.classList.remove("shake");
                }, { once: true });
                resetInactivityTimer(); // Reset the timer on incorrect interaction
                return; // Exit the function if the wrong checkbox is checked
            }
        }

        // If the correct checkbox is checked, move to the next step
        if (clickedStep === currentStep) {
            currentStep++;
            resetInactivityTimer(); // Reset the timer on correct interaction
        }
    });
});

// Reset the inactivity timer on any user interaction
document.addEventListener("click", () => {
    resetInactivityTimer();
});