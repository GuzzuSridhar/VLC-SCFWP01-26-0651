// technically there are 3 ways of creating a variable
// var
// let
// const

// Starting ES15 the use of var has been discouraged

// use let when the variables value can be changed later
// use const when there is no need of a value of variable to be changed after declaration
// while declaring const variable it has to initialized

let name; // declare without initializing
let lName = "Sara"; // declare and initialize

// const fName; // not allowed
const myName = "John";

// Scope of variables
// block scope
// block is code written insed {}

// {} -- Curly braces
// [] -- sqaure brackets
// () -- round brackets
// <> -- diamond brackets
let test = 10;
let loopVar = 10;
while (loopVar < 20) {
  let test = 0;
  console.log("Inside the bloclk " + test);
  loopVar++;
}

console.log("Here" + loopVar);
console.log("Outside the block " + test);
