describe("Task 1: Defining a function", function () {
  beforeEach(function () {
    // Set up a spy on the console.log method
    spyOn(console, "log").and.callThrough();
    spyOn(console, "error").and.callThrough();
  });

  afterEach(function () {
    // Clear all calls after each test
    console.log.calls.reset();
  });

  it("should define a function named greet that takes one parameter", function () {
    // Test if greet is defined
    expect(greet).toBeDefined();
    expect(greet.length).toEqual(1);
  });
  it("should log 'Hello, [name]!' to the console", function () {
    greet("World");
    expect(console.log).toHaveBeenCalledWith("Hello, World!");
  });
  it("should define a function named square that takes one parameter", function () {
    expect(square).toBeDefined();
    expect(square.length).toEqual(1);
  });
  it("should return the square of the given number", function () {
    const result = square(2);
    expect(result).toEqual(4);
  });
  it("should define a function named cubed that takes one paramtere", function () {
    expect(cubed).toBeDefined();
    expect(cubed.length).toEqual(1);
  });
  it("should return the cube of the given number", function () {
    const result = cubed(2);
    expect(result).toEqual(8);
  });
});

describe("Task 2: Bindings and Scope", function () {
  beforeEach(function () {
    // Set up a spy on the console.log method
    spyOn(console, "log").and.callThrough();
    spyOn(console, "error").and.callThrough();
  });
  afterEach(function () {
    // Clear all calls after each test
    console.log.calls.reset();
  });
  it("check if 'a' and 'd' exist in global scope. If yes, d = 5", function () {
    expect(a).toBeDefined();
    expect(d).toBeDefined();
    expect(d).toEqual(5);
  });
  it("should define a function named scopedFunction that takes zero paramters", function () {
    expect(scopedFunction).toBeDefined();
    expect(scopedFunction.length).toEqual(0);
  });
  it("should define a variable result that is the result of calling scopedFunction and equals true", function () {
    expect(result).toBeDefined();
    expect(result).toEqual(true);
  });
  it("typeof b and typeof c should be undefined", function () {
    expect(typeof b).toEqual("undefined");
    expect(typeof c).toEqual("undefined");
  });
});

describe("Task 3: Bindings and Scopes (same variable name)", function () {
  beforeEach(function () {
    // Set up a spy on the console.log method
    spyOn(console, "log").and.callThrough();
    spyOn(console, "error").and.callThrough();
  });
  afterEach(function () {
    // Clear all calls after each test
    console.log.calls.reset();
  });
  it("should define a function named halve that takes one parameter", function () {
    expect(halve).toBeDefined();
    expect(halve.length).toEqual(1);
  });
  it("should return the halved value of the given number", function () {
    const result = halve(100);
    expect(result).toEqual(50);
  });
  it("should define a variable named num in the global scope and assign it the value 100", function () {
    expect(num).toBeDefined();
    expect(num).toEqual(100);
  });
  it("halfOfFifty should equal 25", function () {
    expect(halfOfFifty).toEqual(25);
  });
  it("halfOfNum should equal 50", function () {
    expect(halfOfNum).toEqual(50);
  });
});

describe("Task 4: Bread Recipe (Nested Scope)", function () {
  beforeEach(function () {
    // Set up a spy on the console.log method
    spyOn(console, "log").and.callThrough();
  });

  afterEach(function () {
    // Clear all calls after each test
    console.log.calls.reset();
  });

  it("should define a function named breadRecipe that takes one parameter", function () {
    expect(breadRecipe).toBeDefined();
    expect(breadRecipe.length).toEqual(1);
  });

  it("should correctly log ingredients for 2 loaves of bread", function () {
    const layers = 2; // Number of loaves
    breadRecipe(layers);

    // Since the recipe is 2 cups flour, 2 cups water, 1 teaspoon salt, 0.5 teaspoon yeast
    // For 2 loaves, amounts will be doubled, except for ingredients that are already enough for 2 loaves
    expect(console.log).toHaveBeenCalledWith("4 cups flour");
    expect(console.log).toHaveBeenCalledWith("4 cups water");
    expect(console.log).toHaveBeenCalledWith("2 teaspoons salt");
    expect(console.log).toHaveBeenCalledWith("1 teaspoon yeast");
  });
});

/**
 * Task 5: Optional Parameters
 *
 */

// create a function named minus
// the function should take two parameters: num1 and num2
// the function should return the difference of the two numbers
// if num2 is not defined, set the default value to 0

// call the function with num1 = 10 and num2 = 5

// call the function with num1 = 10 and num2 undefined

describe("Task 5: Optional Parameters", function () {
  beforeEach(function () {
    // Set up a spy on the console.log method
    spyOn(console, "log").and.callThrough();
  });

  afterEach(function () {
    // Clear all calls after each test
    console.log.calls.reset();
  });

  it("should define a function named minus", function () {
    expect(minus).toBeDefined();
  });

  it("should return the difference of the two numbers when both parameters are provided", function () {
    const result = minus(10, 5);
    expect(result).toEqual(5);
  });

  it("should return the first number when the second parameter is not provided", function () {
    const result = minus(10);
    expect(result).toEqual(10);
  });
});

describe("Task 6: Rest Parameters and Spread Operator Assignment", function () {
  describe("sumRest function", function () {
    // Test if the sumRest function is defined
    it("should define a function named sumRest", function () {
      expect(sumRest).toBeDefined();
    });

    // Test if the sumRest function calculates the sum correctly
    it("should correctly calculate the sum of all numbers passed in", function () {
      const result = sumRest(1, 2, 3, 4, 5);
      expect(result).toEqual(15); // 1 + 2 + 3 + 4 + 5 = 15
    });
    it("handle different number of parameters", function () {
      const result = sumRest(10, 20, 30);
      expect(result).toEqual(60); // 10 + 20 + 30 = 60
    });
  });

  describe("sumSpread function", function () {
    // Test if the sumSpread function is defined
    it("should define a function named sumSpread", function () {
      expect(sumSpread).toBeDefined();
    });

    // Test if the sumSpread function correctly uses the spread operator and sumRest
    it("should correctly calculate the sum of numbers in an array using the spread operator", function () {
      const nums = [1, 2, 3, 4, 5];
      const result = sumSpread(nums);
      expect(result).toEqual(15); // The sum should be 15
    });
  });
});

describe("Task 7: Closure -- createIdGenerator", function () {
  // Test if the createIdGenerator function is defined
  it("should define a function named createIdGenerator", function () {
    expect(createIdGenerator).toBeDefined();
  });

  // Test if createIdGenerator returns a function
  it("should return a function when called", function () {
    const nextId = createIdGenerator();
    expect(typeof nextId).toBe("function");
  });

  // Test the behavior of the returned function
  describe("incrementing ID function", function () {
    let nextId;

    beforeEach(function () {
      nextId = createIdGenerator();
    });

    it("should increment and return a new ID value each time it is called", function () {
      expect(id1).toEqual(1); // First call, should return 1
      expect(id2).toEqual(2); // Second call, should return 2
      expect(id3).toEqual(3); // Third call, should return 3
    });

    it("should correctly calculate the sum of generated IDs", function () {
      const sum = id1 + id2 + id3;
      expect(sum).toEqual(6); // The sum of 1, 2, and 3 is 6
    });
  });
});

describe("Task 8: Closure -- createGreeter", function () {
  // Test if the createGreeter function is defined
  it("should define a function named createGreeter", function () {
    expect(createGreeter).toBeDefined();
  });

  // Test if createGreeter returns a function
  it("should return a function when called with a name", function () {
    const greetJohn = createGreeter("John");
    expect(typeof greetJohn).toBe("function");
  });

  // Test the behavior of the returned greeting function
  describe("returned greeting function", function () {
    let greetJohn, greetJane;

    beforeEach(function () {
      // Set up a spy on the console.log method
      spyOn(console, "log").and.callThrough();

      greetJohn = createGreeter("John");
      greetJane = createGreeter("Jane");
    });

    afterEach(function () {
      // Clear all calls after each test
      console.log.calls.reset();
    });

    it("should log 'Hello, John!' when greetJohn is called", function () {
      greetJohn();
      expect(console.log).toHaveBeenCalledWith("Hello, John!");
    });

    it("should log 'Hello, Jane!' when greetJane is called", function () {
      greetJane();
      expect(console.log).toHaveBeenCalledWith("Hello, Jane!");
    });
  });
});

describe("Task 9: Closure -- createCountdown", function () {
  // Test if the createCountdown function is defined
  it("should define a function named createCountdown", function () {
    expect(createCountdown).toBeDefined();
  });

  // Test if createCountdown returns a function
  it("should return a function when called", function () {
    const countdown = createCountdown(3);
    expect(typeof countdown).toBe("function");
  });

  // Test the behavior of the returned function
  describe("returned countdown function", function () {
    let countdown;

    beforeEach(function () {
      countdown = createCountdown(3);
    });

    it("should return the current start value and then decrement it", function () {
      expect(countdown()).toEqual(3); // First call, should return 3
      expect(countdown()).toEqual(2); // Second call, should return 2
      expect(countdown()).toEqual(1); // Third call, should return 1
    });

    it("should return 0 when start is less than or equal to 0", function () {
      // Call the function more times than the initial value
      countdown(); // 3
      countdown(); // 2
      countdown(); // 1
      expect(countdown()).toEqual(0); // Should return 0 now
      expect(countdown()).toEqual(0); // Subsequent calls should still return 0
    });
  });
});

describe("Task 10: Recursion", function () {
  // Test if the power function is defined
  it("should define a function named power", function () {
    expect(power).toBeDefined();
  });

  // Test the base case of the recursion
  it("should return 1 when the exponent is 0", function () {
    expect(power(5, 0)).toEqual(1);
  });

  // Test other cases
  it("should correctly calculate the power of a number", function () {
    expect(power(2, 3)).toEqual(8); // 2^3 = 8
    expect(power(3, 2)).toEqual(9); // 3^2 = 9
    expect(power(5, 3)).toEqual(125); // 5^3 = 125
  });
});
