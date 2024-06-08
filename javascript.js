let number, number2 = -1;
let operator = "";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".numbers");
const clearButton = document.querySelector(".clear");
const operButtons = document.querySelectorAll(".operations");
const equalsButton = document.querySelector(".equals");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    display.textContent = button.textContent;

    if (number >= 0) {
        number2 = button.textContent;
    } else {
        number = button.textContent;
    }
  });
});

clearButton.addEventListener("click", () => {
    display.textContent = "0";
    number = -1;
    number2 = -1;
    operator = "";
});

operButtons.forEach((operButton) => {
  // and for each one we add a 'click' listener
  operButton.addEventListener("click", (event) => {
    let target = event.target;

    // switch either rock, paper, or scissors
    switch (target.id) {
        case "divide":
            operator = "/";
            break;
        case "multiply":
            operator = "*";
            break;
        case "subtract":
            operator = "-";
            break;
        case "add":
            operator = "+";
            break;
    }
  });
});

equalsButton.addEventListener("click", () => {
    if (number >= 0 && number2 >= 0) {
        switch (operator) {
            case "+":
                display.textContent = add(number, number2);
                break;
            case "-":
                display.textContent = subtract(number, number2);
                break;
            case "*":
                display.textContent = multiply(number, number2);
                break;
            case "/":
                display.textContent = divide(number, number2);
                break;
        }
    }
});
function add(num1, num2) {
    return Number(num1)+ Number(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}