function convertCelsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    var calculation = celsius + " Celcius × 9/5 + 32 = " + fahrenheit.toFixed(2) + " Fahrenheit";
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("calculation").value = calculation;
}

function convertFahrenheitToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = (fahrenheit - 32) * 5/9;
    var calculation = "(" + fahrenheit + " Fahrenheit - 32) × 5/9 = " + celsius.toFixed(2) + " Celsius";
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("calculation").value = calculation;
}

function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation").value = "";
}