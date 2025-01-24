const checkboxes = document.querySelectorAll(".book__binding--checkbox");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", e => {
    console.log(`Checkbox with data-step="${e.target.getAttribute("data-step")}" was clicked!`);

    const currentStep = parseInt(e.target.getAttribute("data-step"), 10);

    // Check if the previous checkbox is checked
    if (currentStep > 1) {
      const previousCheckbox = document.querySelector(
        `.book__binding--checkbox[data-step="${currentStep - 1}"]`
      );

      if (!previousCheckbox.checked) {
        e.target.checked = false; // Uncheck the current checkbox
        alert("Please complete the previous step first!");
      }
    }
  });
});