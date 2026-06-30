let numbers: number[] = [10, 20, 20]
// numbers = ["10", 20, 20] // compile time error

console.log(typeof numbers)


let names: string[] = ["John", "Doe", "Alex"]
console.log(typeof names)

let data = [10, "Hi", true, 45.5] // type inferred as any[]
data = ["a",1,"b",true] // no compile time error but may lead to runtime errors
console.log(typeof data)