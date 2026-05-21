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

// Mutating Methods
// Any method that changes the original array

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
// splice method inserts an element antwhere in an array
names.splice(1, 0, "Bill");
console.log(names);

console.log("-------- using pop method---------");
// pop method removes an element from the end.
let temp = names.pop();
console.log(temp + " has been removed");
console.log(names);

console.log("--------using shift method---------");
// pop method removes an element from the front.
temp = names.shift();
console.log(temp + " has been removed");
console.log(names);

console.log("-------- using sort method---------");
// sorts the elements in an array
names.sort();
console.log(names);

console.log("-------- using reverse method---------");
// reverses the elements in an array
names.reverse();
console.log(names);

console.log("-------- using concat method---------");
//combining 2 arrays
let x = ["a", "b", "c"];
let y = ["d", "e", "f"];
let z = x.concat(y);
console.log(z);

console.log("-------- using join method---------");
// returns a string equivivalent of the array elements
const tempArray = x.join("-");
console.log(tempArray);

console.log("-------- using map method---------");
// performs operations on the array elements
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = nums.map((x) => x * 2);
console.log(res);

console.log("-------- using filter method---------");
// performs operations on the array elements
const res2 = nums.filter((x) => x % 2 == 0);
console.log(res2);
