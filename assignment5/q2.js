const numbers = [45, 12, 78, 23, 56];

const largest = Math.max(...numbers);
const smallest = Math.min(...numbers);

const ascending = [...numbers].sort((a, b) => a - b);
const descending = [...numbers].sort((a, b) => b - a);

document.getElementById('result').innerHTML = `
    <p>Original Array: [${numbers.join(', ')}]</p>
    <p>Largest Number: ${largest}</p>
    <p>Smallest Number: ${smallest}</p>
    <p>Ascending Order: [${ascending.join(', ')}]</p>
    <p>Descending Order: [${descending.join(', ')}]</p>
`;
