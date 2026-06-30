// the return type is inferred
function sum(a: number, b: number) {
    return a + b // return type is inferred as number
    // return "test" // return type is inferred as string
}
console.log(sum(1, 2)) // return type is inferred as number
// console.log(sum("1", "2")) // compile error

// -------------------------------------------------------

// function with a return type specified as string
function sayHello(name: string): string { // compelling the return type is string
    return `Hello ${name}`
    // return 100; // compile error
}
console.log(sayHello("John"))

// -------------------------------------------------------

// function with a number return type
function addNumbers(a: number, b: number): number { // compelling the return type is number
    return a + b
    // return "test" // compile error
}
console.log(addNumbers(1, 2)) // return type is number
// console.log(addNumbers("1", "2")) // compile error

// -------------------------------------------------------


// function with a return type specified as void
// the function does not return anything
function welcome(name: string): void {
    console.log(`Hello ${name}`)
    // return "test" // compile error
}
welcome("John")

// -------------------------------------------------------

