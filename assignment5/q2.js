const numbers = [45, 12, 78, 23, 56];

const largest = Math.max(...numbers);
const smallest = Math.min(...numbers);

const ascending = [...numbers].sort((a, b) => a - b);
const descending = [...numbers].sort((a, b) => b - a);

console.log("Original Array:", numbers);
console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);
console.log("Ascending Order:", ascending);
console.log("Descending Order:", descending);
