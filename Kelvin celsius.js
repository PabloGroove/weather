//current temperature in Kelvin
const kelvin = 120;
//converting kelvin to celsius
const celsius = kelvin - 273;
//converting to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Round Down fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
