const name = prompt("Enter your name:");
const email = prompt("Enter your email:");
const age = prompt("Enter your age:");

let isValid = true;
let errors = [];

if (name.trim() === '') {
    isValid = false;
    errors.push('Name field cannot be empty');
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    isValid = false;
    errors.push('Email format is incorrect');
}

const ageNum = parseInt(age);
if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
    isValid = false;
    errors.push('Age must be a number between 18 and 100');
}

if (isValid) {
    console.log("Form submitted successfully!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
} else {
    console.log("Validation Errors:");
    errors.forEach(err => console.log("-", err));
}
