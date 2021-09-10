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


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Test - should say "Hello Rupert!"', helloName('Rupert'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // Assuming both arguments sent to the function are numbers, a simple sum
  // should be sufficient.
  return firstNumber + secondNumber;
}

console.log('Test for addNumbers 4 and 7 = ', addNumbers( 4, 7 ));
// checking for 0 and negative numbers
console.log('Test for addNumbers 0 and -12 = ', addNumbers( 0, -12 ));
// checking for important irrational mathematical constants
console.log('Test for addNumbers Pi and e = ', addNumbers( Math.PI, Math.E ));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  // If all three arguments are numeric, we can multiply all arguments in a single
  // line.
    return firstNumber * secondNumber * thirdNumber;
}
console.log('Test for multiplyThree 2, 4, and 7 = ', multiplyThree( 2, 4, 7 ));
// Checking that multiplying by zero returns zero.
console.log('Test for multiplyThree 0, 36, and -12 = ', multiplyThree( 0, 36, -12 ));
// Checking with a couple of irrational common constants
console.log('Test for multiplyThree Pi, e, and 1.62 (approx phi) = ', multiplyThree( Math.PI, Math.E, 1.62 ));
// Checking with two negative numbers
console.log('Test for multiplyThree -1, -2, and 3 = ', multiplyThree( -1, -2, 3 ));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  // For all numbers, a single line should suffice
  return number > 0;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
// Checking that zero yields false
console.log( 'isPositive - should say false', isPositive(0) );
// Checking that a negative number yields false
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array === []){ //checking for an empty array
    return 'undefined';
  } // end empty check
  return array[array.length-1]; //index of last item in array is the length - 1
} // end getLast

// Checking for an array of strings
console.log( 'getLast - should say yellow', getLast(['red', 'orange', 'yellow']));
// Checking for an array of numbers
console.log( 'getLast - should say 8', getLast([2, 4, 6, 8]));
// Checking for an empty array
console.log( 'getLast - should say undefined', getLast([]));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (item of array) { // looping through each array item
    if (item === value) { // checking the array item against value
      return true; // if I get a match, return true and end the loop
    } //end check of each array item
  } //end of loop through the array
  return false; // If all tests in the loop fail, return false
} //end of find function

// Checking with arrays of strings
console.log( 'find - should say true', find('red', ['red', 'orange', 'yellow']));
console.log( 'find - should say false', find('green', ['red', 'orange', 'yellow']));
// Checking with strings, which JS treats as arrays of letters
console.log( 'find - should say true', find('e', 'Matthew'));
console.log( 'find - should say false', find('x', 'Matthew'));
// Checking with arrays of numbers
console.log( 'find - should say true', find(12, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]));
console.log( 'find - should say false', find(13, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]));
console.log( 'find - should say false', find(12, [2, 4, 6, 8, 10]));
// Checking with an empty array
console.log( 'find - should say false', find(12, []));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  // JS treats strings as arrays of letters, so we can reference the index string[0]
  return letter === string[0];
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
// Checking for a letter that isn't in the string at all
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
// Checking for a letter that is the second in the string
console.log( 'isFirstLetter - should say false', isFirstLetter('p', 'apple') );


// 9. Function to return the sum of all numbers in an array
function sumAll( numberArray ) {
  let sum = 0; // define a sum variable and set it's default value to 0.
  // TODO: loop to add items
  for (let i = 0; i < numberArray.length; i++) {
    sum = sum + numberArray[i];
  } // end of loop through the numbers
  return sum;
} // end of sumAll function
// Note: when I tried using a for..of loop, the + function treated the array
// elements as strings instead of numbers and concatenated. Not sure why this
// happened.

console.log( 'sumAll test - should say 6', sumAll([0, 1, 2, 3]));
// Testing with negative numbers
console.log( 'sumAll test - should say 0', sumAll([0, 1, -1, 2, -2]));
console.log( 'sumAll test - should say -20', sumAll([-5, -25, 8, 2]));
// Testing with an empty array
console.log( 'sumAll test - should say 0', sumAll([]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveNumbers( numberArray ){
  let result = [];
  for (let i = 0; i < numberArray.length; i++) { // Looping through all array elements
    if (numberArray[i] > 0) { // check if the array item is positive
      result.push(numberArray[i]); // if so, adding that item to the result array
    } // end of positive number check
  } // end of loop through the array
  return result;
} // end of positiveNumbers function

console.log( 'positiveNumbers test - should say [1, 2, 3]', positiveNumbers([0, 1, 2, 3]));
console.log( 'positiveNumbers test - should say [1, 2]', positiveNumbers([0, 1, -1, 2, -2]));
console.log( 'positiveNumbers test - should say [8, 2]', positiveNumbers([-5, -25, 8, 2]));
// Checking for an empty array
console.log( 'positiveNumbers test - should say []', positiveNumbers([]));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// Challenge 1: Given a positive integer, return the sum of all smaller integers
// that are divisible by 3 or 5. If an integer is divisible by both 3 and 5, it
// should be added only once.

function specialSum(number){
  let sum = 0; // setting default sum to 0, useful if number is negative or <= 3
  for ( i = 3; i < number; i++ ) { // 3 is the first number to be added, looping for all numbers < number
    if ( i % 3 === 0 || i % 5 === 0 ){ // checking if i is divisible by either 3 or 5
      sum += i; // if so, add i to the running sum
    } // end conditional
  } //  end loop
  return sum;
}
//Testing the function
console.log( 'specialSum test - should result in 23', specialSum(10));
console.log( 'specialSum test - should result in 23', specialSum(100));

// Challenge 2: Given a string of space separated numbers, return the highest and lowest number.
// Example highAndLow("1 9 3 4 -5") should return "9 -5"

function highAndLow(numbers){
  // split the string to array of strings
  stringArray = numbers.split(' ');

  // convert strings in array to numbers
  numArray = stringArray.map(i => Number(i));

  // define highest and lowest at array[0]
  highest = numArray[0];
  lowest = numArray[0];

  // loop to change highest and lowest if needed through array
  for (i = 1; i < numArray.length; i++) {
    if (numArray[i] > highest) {
      highest = numArray[i];
    }
    if (numArray[i] < lowest) {
      lowest = numArray[i];
    }
  }
  // return appropriate string
  return `${highest} ${lowest}`
}

// Testing highAndLow

console.log('String of numbers is "8 3 -5 42 -1 0 0 -9 4 7 4 -4"');
console.log('Highest and lowest are', highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
