function processArray(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    
    const multiplied = evenNumbers.map(num => num * 2);
    
    const sum = multiplied.reduce((acc, num) => acc + num, 0);
    
    return {
        original: numbers,
        evenNumbers: evenNumbers,
        multiplied: multiplied,
        sum: sum
    };
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = processArray(inputArray);

document.getElementById('result').innerHTML = `
    <p><strong>Original Array:</strong> [${result.original.join(', ')}]</p>
    <p><strong>After removing odd numbers:</strong> [${result.evenNumbers.join(', ')}]</p>
    <p><strong>After multiplying by 2:</strong> [${result.multiplied.join(', ')}]</p>
    <p><strong>Sum of resulting numbers:</strong> ${result.sum}</p>
`;
