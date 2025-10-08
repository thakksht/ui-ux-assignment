document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    
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
    
    const resultDiv = document.getElementById('result');
    
    if (isValid) {
        resultDiv.innerHTML = `<p style="color: green;">Form submitted successfully!</p>
                               <p>Name: ${name}</p>
                               <p>Email: ${email}</p>
                               <p>Age: ${age}</p>`;
    } else {
        resultDiv.innerHTML = `<p style="color: red;">Validation Errors:</p>
                               <ul>${errors.map(err => `<li>${err}</li>`).join('')}</ul>`;
    }
});
