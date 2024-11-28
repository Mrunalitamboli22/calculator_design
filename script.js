const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let previousInput = "";
let operator = null;

buttons.forEach(button => {
    
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "C") {
      // Clear input
      currentInput = "";
      previousInput = "";
      operator = null;
      display.textContent = "0";
    } else if (value === "=") {
      // Calculate result
      if (operator && currentInput && previousInput) {
        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
        display.textContent = currentInput;
        operator = null;
        previousInput = "";
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Set operator
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    } else {
      // Append number or dot
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
