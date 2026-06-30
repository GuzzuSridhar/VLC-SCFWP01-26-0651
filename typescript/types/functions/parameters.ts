function greet(name: string) { // the parameter name is of string type
    return `Hello ${name}` 

}
console.log(greet("John"))
// console.log(greet(123)) // compile time error

function add(a: number, b: number) { // the parameter a and b are of number type
    return a + b
}
console.log(add(1, 2))
console.log(add(187, 288))
// console.log(add("1", "2")) // compile time error