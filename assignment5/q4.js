const student = {
    name: "John Doe",
    age: 20,
    grades: [85, 90, 78, 92, 88]
};

student.class = "Computer Science";

student.grades = [85, 90, 95, 92, 88];

const resultDiv = document.getElementById('result');
resultDiv.innerHTML = `
    <h2>Student Information</h2>
    <p><strong>Name:</strong> ${student.name}</p>
    <p><strong>Age:</strong> ${student.age}</p>
    <p><strong>Class:</strong> ${student.class}</p>
    <p><strong>Grades:</strong> [${student.grades.join(', ')}]</p>
`;
