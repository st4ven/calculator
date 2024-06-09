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
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '×':
            result = multiply(num1, num2);
            break;
        case '÷':
            result = divide(num1, num2);
            break;
    }

    return result;
}

let num1, num2, operator;
let step = 0;
let numArray = [];
let secondNumArray = [];

const solution = document.querySelector(".solution");
const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".numbers");
const operButtons = document.querySelectorAll(".operations");
const clear = document.querySelector("#clear");
const equals = document.querySelector(".equals");
const decimal = document.querySelector(".decimal");


/// This block of code handles the number buttons
numButtons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    display.textContent += button.textContent;

    if (step == 0 || step == 1) {
        numArray.push(button.textContent);
        step = 1;
        num1 = Number(numArray.join(''));
    } else if (step == 2) {
        secondNumArray.push(button.textContent);
        num2 = Number(secondNumArray.join(''));
    }
  });
});

/// This block of code handles the operation buttons (+, -, /, *)
operButtons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", (event) => {
    step = 2;
    operator = button.textContent;
    display.textContent += button.textContent;
  });
});

/// This block of code handles the clear button
clear.addEventListener("click", () => {
    display.textContent = "";
    solution.textContent = "0";
    num1 = null;
    num2 = null;
    operator = null;
    step = 0;
    numArray = [];
    secondNumArray = [];
    result = 0;
});

/// Handles the equals button
equals.addEventListener("click", () => {
   solution.textContent = operate(num1, operator, num2);
});

/// Handles the decimal button
decimal.addEventListener("click", () => {
    display.textContent += decimal.textContent;

    if (step == 0 || step == 1) {
        numArray.push(decimal.textContent);
        num1 = Number(numArray.join(''));
    } else if (step == 2) {
        numArray.push(decimal.textContent);
        num2 = Number(secondNumArray.join(''));
    }
});