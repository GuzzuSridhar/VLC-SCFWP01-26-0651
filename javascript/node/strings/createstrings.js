console.log("--------Creating Strings-------------");
// using double quotes
let x = "String";
console.log(x);
// using single quotes
x = "String";
console.log(x);
// template literals
// using backticks
let name = `John`;
let msg = `Hello ${name}`;
console.log(msg);

// access inividual characters from the string
let test = "John";
console.log(test[0]);
console.log(test[1]);
console.log(test[2]);

test[0] = "d"; // no effect as strings are immutable
console.log(test);

// text in non - english language
test = "హలో ";
console.log(test);
