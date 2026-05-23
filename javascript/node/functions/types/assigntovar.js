// a function can be assigned to a variable
// in such even the function becomes annonymous
// the function can be invoked with the variable name()

let greet = function () {
  console.log("Welcome to annonymous functions");
};

// invoke the variable as function
greet();

// annonymous with parameters
let sayHello = function (name) {
  console.log(`Hello ${name}`);
};

sayHello("John");
