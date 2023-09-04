function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculator(num1, num2, oprator) {
    return oprator(num1, num2)
}

console.log(calculator(1000,400, add))