// Define 'value' from the input field 
const inputValue = document.getElementById('input-temperature');

// Conversion functions
function toCelsius (fahrenheitValue) {
  let celsius = (fahrenheit-32)/1.8;
  return celsius;
}

function toFahrenheit (celsiusValue) {
  let fahrenheit = (celsius*1.8)+32;
  return fahrenheit;
}

// Get a reference to the button element in the DOM
const button = document.getElementById("converter");


// This function should determine which conversion should
// happen based on which radio button is selected. And it runs it.
function determineConverter () {
  if (document.getElementById('fahrenheit-to-celsius').checked) {
    const theResult = toCelsius(inputValue);
    let newString = ``;
    newString += `<div id="the-result">`;
    newString +=  `<p>${inputValue} + "° converted to Celsius is " + ${theResult} + "°."</p>`;

  } else if (document.getElementById('celsius-to-fahrenheit').checked) {
    const theResult = toFahrenheit(inputValue);
    let newString = ``;
    newString += `<div id="the-result">`;
    newString += `<p>${inputValue} + "° converted to Fahrenheit is " + ${theResult} + "°."</p>`;
  }
}

// Event Listeners
button.addEventListener("click", determineConverter);

