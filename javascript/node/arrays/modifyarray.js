// create an empty array
const names = [];
// add elements to Array
console.log("--------Adding using index---------");
names[0] = "John";
names[1] = "Jane";
names[2] = "Jack";
names[3] = "Jill";
names[1] = "James"; // will overrite the earlier value

console.log(names);

console.log("--------Adding using push method---------");
// push method adds an element to the end of the existing elements list
names.push("Jenny");
console.log(names);

console.log("--------Adding using unshift method---------");
// unshift  method adds an element to the front of the existing elements list
names.unshift("Bob");
names.unshift("Sara");
console.log(names);

console.log("--------Adding using splice method---------");
names.splice(1, 0, "Bill");
console.log(names);
