let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.getAttribute('data-value');

        if (button.classList.contains('number')) {
            currentInput += value;
            display.innerText = currentInput;
        } else if (button.classList.contains('operator')) {
            if (currentInput === '') return;
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else if (button.id === 'equals') {
            if (previousInput === '' || currentInput === '') return;
            calculate();
        } else if (button.id === 'clear') {
            clear();
        }
    });
});

function calculate() {
    let result;
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    display.innerText = result;
    currentInput = result;
    previousInput = '';
    operator = '';
}

function clear() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '';
}
