// Define 'value' from the input field 
let inputValue = document.getElementById('input-temperature');

// Variable to connect my final output into the DOM
let finalOutput = document.getElementById("converted-temperature")

// Conversion functions
function toCelsius() {
    let celsius = (Math.round((inputValue - 32) / 1.8));
    return celsius;
}

function toFahrenheit() {
    let fahrenheit = (Math.round((inputValue * 1.8) + 32));
    return fahrenheit;
}

// Get a reference to the button elements in the DOM
const button = document.getElementById("converter");
const clearButton = document.getElementById("clear");

// Change color of answer depending on temperature
function tempColor(highTemp, lowTemp, inputValue) {
    if (inputValue >= highTemp) {
        finalOutput.style.color = "red";
    } else if (inputValue <= lowTemp) {
        finalOutput.style.color = "blue";
    } else {
        finalOutput.style.color = "green";
    }
}

// This function should determine which conversion should
// happen based on which radio button is selected. And it runs it.
function determineConverter() {

    // Validation segment. If there is no input, then we get no conversion. It is placed here so
    // that it "fires off" when the convert button is clicked.
    if (document.getElementById('input-temperature').value.length == 0) {
        document.getElementById('validation-message').innerHTML = "Please enter a temperature value";
        return false;
    } else {
        document.getElementById('validation-message').innerHTML = '';
    }
    
    // Where the magic happens.
    inputValue = document.getElementById('input-temperature').value;
    if (document.getElementById('fahrenheit-to-celsius').checked) {
        theResult = toCelsius();
        finalOutput.innerHTML = inputValue + "° F converted to Celsius is " + theResult + "°";
        tempColor(90, 32, inputValue);
    } else if (document.getElementById('celsius-to-fahrenheit').checked) {
        theResult = toFahrenheit();
        finalOutput.innerHTML = inputValue + "° C converted to Fahrenheit is " + theResult + "°";
        tempColor(32, 0, inputValue);
    }
}

// This function clears out my input-temperature, and output info. 
function clearInput() {
    document.getElementById('input-temperature').value = '';
    finalOutput.innerHTML = '';
}

// Event Listeners for the buttons
button.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearInput);

// Event Listener to press return instead of having to click 'convert' button.
// e is short way to say 'event'. 13 is the key code for a carriage return.
addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
        determineConverter();
    }
});