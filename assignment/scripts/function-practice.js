console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Test - should say "Hello Rupert!"', helloName('Rupert'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log('Test for addNumbers 4 and 7 = ', addNumbers( 4, 7 ));
console.log('Test for addNumbers 0 and -12 = ', addNumbers( 0, -12 ));
console.log('Test for addNumbers 3.14 and 2.72 = ', addNumbers( 3.14, 2.72 ));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  return firstNumber * secondNumber * thirdNumber;
}
console.log('Test for multiplyThree 2, 4, and 7 = ', multiplyThree( 2, 4, 7 ));
console.log('Test for multiplyThree 0, 36, and -12 = ', multiplyThree( 0, 36, -12 ));
console.log('Test for multiplyThree 3.14, 2.72, and 1.62 = ', multiplyThree( 3.14, 2.72, 1.62 ));
console.log('Test for multiplyThree -1, -2, and 3 = ', multiplyThree( -1, -2, 3 ));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array === []){
    return 'undefined';
  } // end empty check
  return array[array.length-1];
} // end getLast

console.log( 'getLast - should say yellow', getLast(['red', 'orange', 'yellow']));
console.log( 'getLast - should say 8', getLast([2, 4, 6, 8]));
console.log( 'getLast - should say undefined', getLast([]));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  let returnValue = false;
  for (item of array) {
    if (item === value) {
      returnValue = true;
    } //end check of each array item
  } //end of loop through the array
  return returnValue;
} //end of find function

console.log( 'find - should say true', find('red', ['red', 'orange', 'yellow']));
console.log( 'find - should say false', find('green', ['red', 'orange', 'yellow']));
console.log( 'find - should say true', find('e', 'Matthew'));
console.log( 'find - should say false', find('x', 'Matthew'));
console.log( 'find - should say true', find(12, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]));
console.log( 'find - should say false', find(13, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]));
console.log( 'find - should say false', find(12, [2, 4, 6, 8, 10]));
console.log( 'find - should say false', find(12, []));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let returnValue = false;
  for (item of string) {
    if (item === letter) {
      returnValue = true;
    } //end check of each string letter
  } //end of loop through the string
  return returnValue;
} // end of function isFirstLetter
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( numberArray ) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < numberArray.length; i++) {
    sum = sum + numberArray[i];
  } // end of loop through the numbers
  return sum;
} // end of sumAll function
// Note: when I tried using a for of loop, the sum function concatenated instead
// of adding the numbers. Not seeing exactly why this happens, but when I use
// an index, the array items are treated as numbers.

console.log( 'sumAll test - should say 6', sumAll([0, 1, 2, 3]));
console.log( 'sumAll test - should say 0', sumAll([0, 1, -1, 2, -2]));
console.log( 'sumAll test - should say -20', sumAll([-5, -25, 8, 2]));
console.log( 'sumAll test - should say 0', sumAll([]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveNumbers( numberArray ){
  let result = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      result.push(numberArray[i]);
    } // end of positive number check
  } // end of loop through the array
  return result;
} // end of positiveNumbers function

console.log( 'positiveNumbers test - should say [1, 2, 3]', positiveNumbers([0, 1, 2, 3]));
console.log( 'positiveNumbers test - should say [1, 2]', positiveNumbers([0, 1, -1, 2, -2]));
console.log( 'positiveNumbers test - should say [8, 2]', positiveNumbers([-5, -25, 8, 2]));
console.log( 'positiveNumbers test - should say []', positiveNumbers([]));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
