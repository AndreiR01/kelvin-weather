const kelvin = 280;/*This is the forecasted temperature*/
const celsius = kelvin - 273;/*This is how convert kevin to celsius  */
const fahrenheit = Math.floor(celsius * (9/5) + 32);/*This is how convert celsius to fahrenheit  */
//The maths.floor will turn any decimal to a number
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
console.log(`The temperature is ${celsius} degrees fahrenheit.`);
