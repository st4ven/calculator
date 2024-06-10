function add(num1, num2) {
    return Math.round((num1 + num2) * 1000) / 1000;
}

function subtract(num1, num2) {
    return Math.round((num1 - num2) * 1000) / 1000;
}

function multiply(num1, num2) {
    return Math.round((num1 * num2) * 1000) / 1000;
}

function divide(num1, num2) {
    // cannot divide by zero
    if (num2 == 0) {
        return "Error";
    }

    return Math.round((num1 / num2) * 1000) / 1000;
}

/// This function calls the operator functions depending on the operator given
function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '×':
            return multiply(num1, num2);
            break;
        case '÷':
            return divide(num1, num2);
            break;
    }
}

/// variables
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
const plusMinus = document.querySelector(".plusminus");
const percent = document.querySelector(".percentage");

/// This block of code handles the number buttons
numButtons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (step == 0 || step == 1) {
        // add a limit so the numbers don't go outside the calculator
        if (numArray.length < 9) {
            numArray.push(button.textContent);
            step = 1;
            num1 = Number(numArray.join(''));

            display.textContent += button.textContent;
        }
    } else if (step == 2) {
        // add a limit so the numbers don't go outside the calculator
        if (secondNumArray.length < 9) {
            secondNumArray.push(button.textContent);
            num2 = Number(secondNumArray.join(''));
            display.textContent += button.textContent;
        }
    }
  });
});

/// This block of code handles the operation buttons (+, -, /, *)
operButtons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", (event) => {
    if (operator == undefined && step != 0) {
        step = 2;
        operator = button.textContent;
        display.textContent += button.textContent;
        decimal.disabled = false;
    }

    // chaining operations
    if (step == 3) {
        num1 = solution.textContent;
        num2 = undefined;
        operator = button.textContent;
        secondNumArray = [];
        numArray = [];
        decimal.disabled = false;

        step = 2;
        for (var i = 0; i < num1.length; i++) {
            numArray.push(num1[i]);
        }

        num1 = Number(numArray.join(''));
        display.textContent = num1 + operator;
    }
  });
});

/// This block of code handles the clear button
clear.addEventListener("click", () => {
    clearCase();
});

/// Handles the equals button
equals.addEventListener("click", () => {
    equalCase();
});

/// Handles the decimal button
decimal.addEventListener("click", () => {
    display.textContent += decimal.textContent;

    if (step == 0 || step == 1) {
        numArray.push(decimal.textContent);
        num1 = Number(numArray.join(''));
        decimal.disabled = true;
    } else if (step == 2) {
        secondNumArray.push(decimal.textContent);
        num2 = Number(secondNumArray.join(''));
        decimal.disabled = true;
    }
});

/// Handles the plus/minus button
/// (positive turns to negative, negative turns to positive)
plusMinus.addEventListener("click", () => {
    if (step == 0 || step == 1) {
        // positive number
        if (num1 > 0) {
            numArray.unshift('-');
        } else if (num1 < 0) {
            numArray.shift();
        }

        num1 = Number(numArray.join(''));
        display.textContent = num1;
    } else if (step == 2) {
        if (num2 > 0) {
            secondNumArray.unshift('-');
        } else if (num2 < 0) {
            secondNumArray.shift();
        }

        num2 = Number(secondNumArray.join(''));
        display.textContent = num1 + operator + num2;
    }
});

/// Handles the percentage button
/// changes the number to percentage value
percent.addEventListener("click", () => {
    if (step == 0 || step == 1) {
        num1 /= 100;
        num1 = num1.toString();

        numArray = [];

        for (var i = 0; i < num1.length; i++) {
            numArray.push(num1[i]);
        }

        display.textContent = num1;
    } else if (step == 2) {
        num2 /= 100;
        num2 = num2.toString();

        secondNumArray = [];

        for (var i = 0; i < num2.length; i++) {
            numArray.push(num2[i]);
        }

        display.textContent = num1 + operator + num2;
    }
});