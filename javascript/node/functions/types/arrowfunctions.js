// Arrow functions
// simple arrow function without a argument and no return
// one line of code in the function no {} needed for body
const greet = () => console.log("Hello");
greet();
// equivivalent to
// function greet(){console.log("hello")}

// simple arrow function with a argument and return
const square = (a) => a * a;
//equvivalent to
// function square(a){ return a*a}
console.log(square(10)); // console.log consuming the return
square(10); // not consuming the return
// let res = square(10);
// console.log(res);

// simple arrow function with multiple arguments and return
const add = (n, m) => n + m;
console.log(add(10, 20));
