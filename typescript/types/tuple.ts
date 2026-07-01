// tuple in TypeScript
let emp: [number, string]

// add values to the tuple
emp = [1, "John"];

// adding value in wrong order or wrong type
// emp = ["John", 1]; // error

// emp[1] = [100, "test"]; // not an array

emp.push(100, "Alex");

console.log(emp);


