/**
 * Task 1: Defining a Function
 */

// Define a function named 'greet' that takes one argument 'name'.
// The function should console.log a greeting string: "Hello, [name]!"
function greet (name) {
  console.log(`Hello, ${name}!`)
};

// Define a function that squares a given number
// Bind the function to a const variable named square
const square = function(number){
  return number * number;
};

// Define a binding named cubed whose value is a function with one parameter named num.
// The function should return the value of num cubed.
// The function should be defined using ES6 fat arrow syntax
const cubed = (num) => num * num * num;

/**
 * Task 2: Bindings and Scopes
 */

let a = 1;
function scopedFunction() {
  let b = 2;
  var c = 3;
  // modify the statement below to the value that scopedFunction returns true
  return a + b + c === 6;
}
const result = scopedFunction();

let d = 4;
// check that 'a' exists in the global scope, if it does, set d equal to 5
if (a) {
  d = 5;
}

/**
 * Task 3: Bindings and Scopes (same variable name)
 */

// Define a function named halve that takes one parameter named num.
// The function should return num halved.

const halve = (num) => num / 2;


// Declare a variable named num in global scope and assign it the value 100.

const num = 100;

// create a variable named halfOfFifty and set it to the return value of halve(50)

const halfOfFifty = halve(50);

// create a variable named halfOfNum and set it to the return value of halve(num)

const halfOfNum = halve(num);

/**
 * Task 4: Complete the breadRecipe function
 * Objective: Understand nested functions and scopes
 */

// Create a function named breadRecipe that takes one parameter named numLoaves
const breadRecipe = function (numLoaves) {;
  // Create a function named addIngredient
  // The function should take three parameters: amount, unit, ingredient
  // Calculate total required ingredient amount based on the number of loaves
  // The function should log the ingredient amount and name
  // The function should modify the unit to plural if ingredientAmount is greater than 1
  // example: 1 cup flour
  // example: 2 cups water
  // Add ingredients using the addIngredient function
  // the recipe for one loaf is: 2 cups flour,  2 cups water, 1 teaspoon salt, 0.5 teaspoon yeast
  // example. addIngredient(2, "cup", "flour");
  
const addIngredient = (amount, unit, ingredient) => {
  const ingredientAmount = amount * numLoaves;
  if (ingredientAmount > 1){
    unit += "s"
  }
  console.log (`${ingredientAmount} ${unit} ${ingredient}`)
};

addIngredient(2, "cup", "flour")
addIngredient(2, "cup", "water")
addIngredient(1, "teaspoon", "salt")
addIngredient(0.5, "teaspoon", "yeast")


};
// Call the breadRecipe function with 2 loaves

breadRecipe(2);

/**
 * Task 5: Optional Parameters
 *
 */

// create a function named minus
// the function should take two parameters: num1 and num2
// the function should return num2 - num1
// if num2 is not defined, set the default value to 0
// example: minus(2, 5) should return 3
// example: minus(5) should return -5

const minus = (num1, num2 = 0) => {
  return num2 - num1;
}

/**
 * Task 6: Rest Parameters and Spread Operator
 * Objective: Understand the rest parameter syntax
 */


// create a function named sumRest
// the function should take a rest parameter named nums
// the function should return the sum of all numbers passed in
// call the function with 1, 2, 3, 4, 5

const sumRest = function (...nums) {
let sum = 0;
for (let num of nums) {
  sum += num;
}
return sum;
};

sumRest(4,6,9,20);

// create a function named sumSpread
// the function should take one parameter name nums that is an array
// Use the spread operator to calculate the sum of all numbers in the array
// It should use the sumRest function defined above

const sumSpread = function (nums) {
return sumRest(...nums)
}

/**
 * Task 7: Closure (idGenerator)
 *
 * Objective: Understand closure
 */

// create a function named createIdGenerator
function createIdGenerator() {
  // create a variable named id and set it to 0
  let id = 0;
  // return a function that increments id and returns the new value
  return function () {
    id += 1;
    return id;
  }
  
}
// create a variable named nextId and set it to the return value of createIdGenerator

const nextId = createIdGenerator();

// create a variable named id1 and set it to the return value of nextId

let id1 = nextId();

// create a variable named id2 and set it to the return value of nextId

let id2 = nextId();

// create a variable named id3 and set it to the return value of nextId

let id3 = nextId();

/**
 * Task 8: Closure (createGreeter)
 *
 * Objective: Understand closure
 */

// create a function named createGreeter

function createGreeter(name) {
  return function() {
    console.log("Hello, " + name + "!");
  };
}


// create a variable named greetJohn and set it to the return value of createGreeter with the name "John"
const greetJohn = createGreeter("John");

// create a variable named greetJane and set it to the return value of createGreeter with the name "Jane"
const greetJane = createGreeter("Jane");


// call greetJohn

greetJohn();

// call greetJane

greetJane();


/**
 * Task 9: Closure (countDown)
 *
 * Objective: Understand closure
 */


function createCountdown(start) {
  return function () {
    if (start > 0) {
        return start --;
    } else {
      return 0;
    }
  }
};
// create a function named createCountdown
// the function should take one parameter named start
// createCountdown return a function that returns the value of start and decrements start by 1

/**
 * Task 10: Recursion
 * Objective: Understand recursion
 *
 */

// fix the function below to calculate exponents using recursion

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent -1);
  }
}

power(3,2);