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

let num1, num2, operator;

const solution = document.querySelector(".solution");
const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".numbers");
const operButtons = document.querySelectorAll(".operations");

numButtons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
  });
});