// import the math functions

// method 1 assign the all exports to a variable names "math"
// const math = require("./math");
// console.log(math.add(10, 20));
// console.log(math.subtract(10, 20));
// console.log(math.multiply(10, 20));
// console.log(math.divide(10, 20));

// Method 2 importing every function from the export as a different variable (name)
const { add, subtract, multiply, divide } = require("./math");
console.log(add(10, 20));
