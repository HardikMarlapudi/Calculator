document.addEventListener("DOMContentLoaded", function() {
    let inputDisplay = document.getElementById("buttonDisplay");
    let buttons = document.querySelectorAll(".button");

    let currentInput = "";
    let operator = "";
    let firstOperand = "";

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            let value = this.textContent;

            if(!isNaN(value) || value === ".") {
                currentInput += value;
                inputDisplay.textContent = currentInput;
            } else if (value === "C") {
                currentInput = "";
                operator = "";
                inputDisplay.textContent = "0";
            } else if (value === "CE") {
                currentInput = "";
                inputDisplay.textContent = "0";
            } else if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput !== "") {
                    operator = value;
                    firstOperand = currentInput;
                    currentInput = "";
                }
            } else if (value === "=") {
                if (currentInput !== "" && operator !== "") {
                    let result;
                    switch (operator) {
                        case "+":
                            result = parseFloat(firstOperand) + parseFloat(currentInput);
                            break;
                        case "-":
                            result = parseFloat(firstOperand) - parseFloat(currentInput);
                            break;
                        case "*":
                            result = parseFloat(firstOperand) * parseFloat(currentInput);
                            break;
                        case "/":
                            result = parseFloat(firstOperand) / parseFloat(currentInput);
                            break;
                    }
                    inputDisplay.textContent = result;
                    currentInput = result.toString();
                    operator = "";
                }
            }
        })
    })
});
