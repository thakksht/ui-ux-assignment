const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

document.getElementById('result').innerHTML = `
    <p>Number 1: ${num1}</p>
    <p>Number 2: ${num2}</p>
    <p>Sum: ${sum}</p>
    <p>Difference: ${difference}</p>
    <p>Product: ${product}</p>
    <p>Quotient: ${quotient}</p>
`;
