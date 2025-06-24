const display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = '';
let resetDisplay = false;

function appendToDisplay(value) {
    if (display.value === '0' || resetDisplay) {
        display.value = value;
        resetDisplay = false;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
    currentInput = '0';
    operator = null;
    previousInput = '';
    resetDisplay = false;
}

function backspace() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function calculateResult() {
    try {
        const expression = display.value.replace(/%/g, '/100');
        display.value = eval(expression);
        resetDisplay = true;
    } catch (error) {
        display.value = 'Error';
        resetDisplay = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    display.value = '0';
});