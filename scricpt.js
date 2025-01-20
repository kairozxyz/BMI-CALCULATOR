// script.js

document.getElementById('bmi-form').addEventListener('submit', function(event) {
    // Prevent page reload
    event.preventDefault();

    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate input
    const resultDiv = document.getElementById('bmi-result');

    if (!weight || !height || weight <= 0 || height <= 0) {
        displayResult('Please enter valid weight and height.', 'error');
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters ** 2)).toFixed(2);

    // Determine category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Display result
    displayResult(`Your BMI is ${bmi} (${category}).`, 'success');
});

function displayResult(message, type) {
    const resultDiv = document.getElementById('bmi-result');
    resultDiv.className = `result ${type}`;
    resultDiv.innerHTML = `<
