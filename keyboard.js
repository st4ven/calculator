/// EXTRA: keyboard support!

document.addEventListener("keydown", (e) => {

    switch (e.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            handleNumbers(e.key);
            break;
        case 'Enter':
            equalCase();
            break;
        case '+':
        case '-':
        case '/':
        case '*':
            operations(e.key);
            break;
        case 'c':
            clearCase();
    }
});

function handleNumbers(key) {
    if (step == 0 || step == 1) {
        // add a limit so the numbers don't go outside the calculator
        if (numArray.length < 9) {
            numArray.push(key);
            step = 1;
            num1 = Number(numArray.join(''));

            display.textContent += key;
        }
    } else if (step == 2) {
        // add a limit so the numbers don't go outside the calculator
        if (secondNumArray.length < 9) {
            secondNumArray.push(key);
            num2 = Number(secondNumArray.join(''));
            display.textContent += key;
        }
    }
}

function equalCase() {
    step = 3;
    decimal.disabled = true;
    solution.textContent = operate(num1, operator, num2);
}

function operations(key) {
    if (operator == undefined && step != 0) {
        if (key == '+' || key == '-') {
            operator = key;
        } else if (key == '*') {
            operator = '×';
        } else if (key == '/') {
            operator = '÷';
        }

        step = 2;
        display.textContent += operator;
        decimal.disabled = false;
    }
}

function clearCase() {
    display.textContent = "";
    solution.textContent = "0";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    step = 0;
    numArray = [];
    secondNumArray = [];
    
    decimal.disabled = false;
}