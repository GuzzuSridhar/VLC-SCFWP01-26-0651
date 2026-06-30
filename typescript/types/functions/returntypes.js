// the return type is inferred
function add(a, b) {
    return a + b; // return type is inferred as number
    // return "test" // return type is inferred as string
}
console.log(add(1, 2)); // return type is inferred as number
// console.log(add("1", "2")) // compile error
// -------------------------------------------------------
// function with a return type specified as string
function sayHello(name) {
    return "Hello ".concat(name);
    // return 100; // compile error
}
console.log(sayHello("John"));
// -------------------------------------------------------
// function with a number return type
function addNumbers(a, b) {
    return a + b;
    // return "test" // compile error
}
console.log(addNumbers(1, 2)); // return type is number
// console.log(addNumbers("1", "2")) // compile error
// -------------------------------------------------------
