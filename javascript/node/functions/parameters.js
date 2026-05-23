// function without a parameter / argument
function sayHello() {
  console.log("Hello");
}
sayHello();

//function with a one parameter
function greet(name) {
  // parameter name
  console.log("Hello " + name);
}

greet("John");
greet("Alex");
greet(10); // allowed in JS

// function with 2 parameters
function add(x, y) {
  console.log(x + y);
}

add(10, 20);
add(100, 200);
add(10.4, 65.5);
add("hello", "world");

// print multiplication table
function printTable(num) {
  let isValidNum = typeof num === "number";
  if (isValidNum) {
    for (let i = 1; i <= 10; i++) {
      console.log(num + " * " + i + " = " + num * i);
    }
  } else {
    console.log("Invalid Number");
  }
}

printTable("a");
printTable(4);
