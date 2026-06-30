var numbers = [10, 20, 20];
// numbers = ["10", 20, 20] // compile time error
console.log(typeof numbers);
var names = ["John", "Doe", "Alex"];
console.log(typeof names);
var data = [10, "Hi", true, 45.5]; // type inferred as any[]
data = ["a", 1, "b", true]; // no compile time error but may lead to runtime errors
console.log(typeof data);
