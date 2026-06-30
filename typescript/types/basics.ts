// typescript is not understood by browsers
// ts files have to compiled to js to run in browsers
// tsc <filename>.ts --> compiles ts file to js file
// node <filename>.js --> runs js file
// tsc -w <filename>.ts --> watches ts file for changes and compiles it

//  when running the ts files, they are actually converted to JS
// So in node, we can run the js files
// but browsers understand html, css, and js

// JS can run on node runtime(v8 engine)
// TS can run on its own compiler

let cust: string = "John";
console.log(cust);
cust = "Alex";
console.log(cust);
console.log(typeof cust)
//cust = 90; // compile time error
//console.log(cust)

let sal: number = 9999;
console.log(sal);
//sal = "Hello"; // compile time error
//console.log(sal)

let isActive: boolean = true;
console.log(isActive);
//isActive = "Hello"; // compile time error
//console.log(isActive)
//console.log(isActive)


