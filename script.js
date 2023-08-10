function toFahrenheit(celsius) {
  return (1.8 * celsius + 32).toFixed(2);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));