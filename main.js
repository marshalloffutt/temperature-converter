// Define 'value' from the input field 
let inputValue = document.getElementById('input-temperature');

// Conversion functions
function toCelsius() {
    inputValue = document.getElementById('input-temperature').value;
    let celsius = (Math.round((inputValue - 32) / 1.8));
    return celsius;
}

function toFahrenheit() {
    inputValue = document.getElementById('input-temperature').value;
    let fahrenheit = (Math.round((inputValue * 1.8) + 32));
    return fahrenheit;
}

// Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// Variable to connect my final output into the DOM
let finalOutput = document.getElementById("converted-temperature")

// This function should determine which conversion should
// happen based on which radio button is selected. And it runs it.
function determineConverter() {
    if (document.getElementById('fahrenheit-to-celsius').checked) {
        theResult = toCelsius();
        finalOutput.innerHTML = inputValue + "° Fahrenheit converted to Celsius is " + theResult + "°.";
        if (theResult >= 32) {
            finalOutput.style.color = "red";
        } else if (theResult <= 0) {
            finalOutput.style.color = "blue";
        } else {
            finalOutput.style.color = "green";
        }
    } else if (document.getElementById('celsius-to-fahrenheit').checked) {
        theResult = toFahrenheit();
        finalOutput.innerHTML = inputValue +  "° Celsius converted to Fahrenheit is " + theResult + "°.";
        if (theResult >= 90) {
            finalOutput.style.color = "red";
        } else if (theResult <= 32) {
            finalOutput.style.color = "blue";
        } else {
            finalOutput.style.color = "green";
        }
    }
}

// Event Listener for the button
button.addEventListener("click", determineConverter);