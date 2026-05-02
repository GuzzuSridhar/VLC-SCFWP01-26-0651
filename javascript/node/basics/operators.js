// declare 2 numeric variables
let x = 10;
let y = 5;

// using nemeric operators
console.log("-------------Nemeric Operators------------------------");
console.log("The sum of " + x + " and " + y + " is: " + (x + y));
console.log("The difference between " + x + " and " + y + " is: " + (x - y));
console.log("The product of " + x + " and " + y + " is: " + x * y);
console.log("The quotient of " + x + " and " + y + " is: " + x / y);
console.log("The reminder of " + x + " and " + y + " is: " + (x % y));

// assignment operators
console.log("-------------Assignment Operators------------------------");
console.log("The current value of x is: " + x);
// equals is the assignment operator
x = 20;
console.log("the value after adding 10 is:" + (x += 10));
console.log("the value after subtracting 5 is:" + (x -= 5));
console.log("the value after multiplying by 2 is:" + (x *= 2));
console.log("the value after dividing by 3 is:" + (x /= 3));
console.log("the reminder after dividing by 3 is:" + (x %= 3));
console.log("-------------------------------------");

// Comparision operators
console.log("-------------Comparision Operators------------------------");
console.log("The value of x is: " + x);
console.log("The value of y is: " + y);
console.log("x is equal to y: " + (x == y));
console.log("x is not equal to y: " + (x != y));
console.log("x is greater than y: " + (x > y));
console.log("x is less than y: " + (x < y));
console.log("x is greater than or equal to y: " + (x >= y));
console.log("x is less than or equal to y: " + (x <= y));
console.log("-------------------------------------");

// increment and decrement operators
console.log(
  "-------------Increment and Decrement Operators------------------------",
);
let a = 10;
console.log("The value of a is: " + a); // 10
console.log("The value of a++ is: " + a++); // 10
console.log("The value of a is: " + a); // 11
console.log("The value of ++a is: " + ++a); //12
console.log("The value of a-- is: " + a--); //12;
console.log("The value of a is: " + a); // 11
console.log("The value of --a is: " + --a); //10

// the post increment / decrement (uses the current value in the expression and then increments / decrements)
// the pre increment / decrement (increments / decrements value and then value in the expression )
console.log("-------------------------------------");
