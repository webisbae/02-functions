/**
 * Task 1: Defining a Function
 */

// Define a function named 'greet' that takes one argument 'name'.
// The function should console.log a greeting string: "Hello, [name]!"

// Your code here

// Define a function that squares a given number
// Bind the function to a const variable named square

// Your code here

// 5. Define a binding named cubed whose value is a function with one parameter named num.
// The function should return the value of num cubed.
// The function should be defined using ES6 fat arrow syntax

/**
 * Task 2: Bindings and Scopes
 */

let a = 1;
function scopedFunction() {
  let b = 2;
  var c = 3;
  // modify the statement below to the value that scopedFunction returns true
  return a + b + c === 99;
}
const result = scopedFunction();
// check that a exists in the global scope, if it does, set the value of a to 99
// Your code here

// check that b is defined in the global scope
// if it does, set the value of b to 99
// if it does not, console.error("b is not defined in the global scope")

// check that c is defined in the global scope
// if it does, set the value of c to 99
// if it does not, console.error("c is not defined in the global scope")

/**
 * Task 3: Bindings and Scopes (same variable name)
 */

// Define a function named halve that takes one parameter named num.
// The function should return num halved.

// Your code here

// Declare a variable named num in global scope and assign it the value 100.

// Your code here

// console.log the value of 50 halved (using the halve function)

// Your code here

// console.log the value of num

/**
 * Task 4: Complete the breadRecipe function
 * Objective: Understand nested functions and scopes
 */

// Create a function named breadRecipe that takes one parameter named numLoaves
const breadRecipe = function (numLoaves) {
  // Create a function named addIngredient
  // The function should take three parameters: amount, unit, ingredient
  // Calculate total required ingredient amount based on the number of loaves
  // The function should log the ingredient amount and name
  // The function should modify the unit to plural if ingredientAmount is greater than 1
  // example: 1 cup flour
  // example: 2 cups water
  // Add ingredients using the addIngredient function
  // the recipe for one loaf is: 2 cups flour,  2 cups water, 1 teaspoon salt, 0.5 teaspoon yeast
  // addIngredient(2, "cup", "flour");
};

// Call the breadRecipe function with 2 loaves

/**
 * Task 5: Optional Parameters
 *
 */

// create a function named minus
// the function should take two parameters: num1 and num2
// the function should return num1 - num2
// if num2 is not defined, set the default value to 0

// call the function with two parameters

// call the function with one parameter

/**
 * Task 6: Rest Parameters and Spread Operator
 * Objective: Understand the rest parameter syntax
 */

// create a function named sumRest
// the function should take a rest parameter named nums
// the function should return the sum of all numbers passed in
// call the function with 1, 2, 3, 4, 5

// create a function named sumSpread
// the function should take one parameter name nums that is an array
// Use the spread operator to calculate the sum of all numbers in the array
// If should use the sumRest function defined above

/**
 * Task 7: Closure (idGenerator)
 *
 * Objective: Understand closure
 */

// create a function named createIdGenerator
function createIdGenerator() {
  // create a variable named id and set it to 0
  // return a function that increments id and returns the new value
}

// create a variable named nextId and set it to the return value of createIdGenerator

// create a variable named id1 and set it to the return value of nextId
let id1;

// create a variable named id2 and set it to the return value of nextId
let id2;

// create a variable named id3 and set it to the return value of nextId
let id3;

// log the value of id1 + id2 + id3 to the console. What is the value?

/**
 * Task 8: Closure (createGreeter)
 *
 * Objective: Understand closure
 */

// create a function named createGreeter
function createGreeter(name) {
  // return a function that logs "Hello, [name]!" to the console
}

// create a variable named greetJohn and set it to the return value of createGreeter with the name "John"
// create a variable named greetJane and set it to the return value of createGreeter with the name "Jane"
// call greetJohn
// call greetJane

/**
 * Task 9: Closure (countDown)
 *
 * Objective: Understand closure
 */

// create a function named createCountdown
// the function should take one parameter named start
// createCountdown return a function that returns the value of start and decrements start by 1
function createCountdown(start) {
  return function () {
    if (start > 0) {
      // Your code here
    } else {
      // Your code here
    }
  };
}

/**
 * Task 10: Recursion
 * Objective: Understand recursion
 *
 */

// create a function named power
// the function should take two parameters: base and exponent
// the function should return the value of base raised to the power of exponent
// the function should use recursion
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    // Your code here
  }
}
