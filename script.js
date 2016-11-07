// user input prompts

var tempType = prompt("Fahrenheit = 1, Celsius = 2, Kelvin = 3", "Temperature type goes here");

var temperature = prompt("What is today's temperature?", "Temperature in degrees goes here");

// end of user input prompts

// temperature conversion functions

var fahrenheitToCelsius = function() {
  var celsius = (temperature - 32) / 1.8;
  return celsius;
}

var fahrenheitToKelvin = function() {
  var kelvin = (temperature + 459.67) / 1.8;
  return kelvin;
}

var celsiusToFahrenheit = function() {
  var fahrenheit = (temperature * 1.8) + 32;
  return fahrenheit;
}

var celsiusToKelvin = function () {
  kelvin = temperature + 273.15;
  return kelvin;
}

var kelvinToFahrenheit = function () {
  fahrenheit = temperature * 1.8 - 459.67;
  return fahrenheit;
}

var kelvinToCelsius = function () {
  celsius = temperature - 273.15;
  return celsius;
}

// end of temperature conversion functions

// if...else conditional

if (tempType == 1) {
  console.log("Fahrenheit =" + temperature);
  console.log("Celsius =" + fahrenheitToCelsius(temperature));
  console.log("Kelvin =" + fahrenheitToKelvin(temperature));
} else if (tempType == 2) {
  console.log("Celsius =" + temperature);
  console.log("Fahrenheit =" + celsiusToFahrenheit(temperature));
  console.log("Kelvin =" + celsiusToKelvin(temperature));
} else if (tempType == 3) {
  console.log("Kelvin =" + temperature);
  console.log("Fahrenheit =" + kelvinToFahrenheit(temperature));
  console.log("Celsius =" + kelvinToCelsius(temperature));
} else {
  console.log("Error");
}

// end of if...else conditional
