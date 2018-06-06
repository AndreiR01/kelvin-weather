// The program below is for changing kelvin to celsius and kelvin to fahrenheit
  const kelvin = 280;/*This is the forecasted temperature*/
  const celsius = kelvin - 273;/*This is how convert kevin to celsius  */
  const fahrenheit = Math.floor(celsius * (9/5) + 32);/*This is how convert celsius to fahrenheit  */
  //The maths.floor will turn any decimal to a number
  console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
  console.log(`The temperature is ${celsius} degrees fahrenheit.`);


// The program below is for changing human years to dog years
  const myAge = 8;  //Age variable set in years
  let earlyYears = 2;
  earlyYears *= 10.5;
  let laterYears = myAge - 2;// this resembles thelater years
  laterYears *= 4;
  myAgeInDogYears = earlyYears + laterYears;
  const myName = 'Andrei'.toLowerCase();
  console.log(`My name is ${myName}, I am ${myAge} in human years. I am ${myAgeInDogYears} years old in dog years.`);


//The program below is to check if two people match their vacation location

let myPlaces = ['Boracay','Punta-Cana','India'];
let friendPlaces = ['Venezuela', 'Punta-Cana', 'Spain'];

for(let myPlacesIndex = 0;myPlacesIndex < myPlaces.length; myPlacesIndex++)
 {
   for( let friendPlacesIndex= 0; friendPlacesIndex < friendPlaces.length ; friendPlacesIndex++){
   if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
     console.log( 'The place we both have in common is ' + myPlaces[myPlacesIndex]);
   }
  }
}
/*The program below checks for vowels in a text and "translates" it to whale talk.The rules that there are only vowels and the u's and e's */

let input = 'Jasleen is beatiful!';
let vowels = ['a','e','i','o','u'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++)
{
	  for ( let vowelsIndex = 0; vowelsIndex < vowels.length ; vowelsIndex++)
    {
      if(input[inputIndex] === vowels[vowelsIndex])       {
        resultArray.push(input[inputIndex]);
      }
    }
  	if (input[inputIndex] === 'e' || input[inputIndex] === 'u' )
      {
        resultArray.push(input[inputIndex]);
      }
}
console.log(resultArray.join('').toUpperCase());
