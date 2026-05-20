// create array
const names = ["James", "john", "jill", "jack", "Jenny"];
// get the length of the array
console.log("There are a total of " + names.length + " names");
// access the values individually
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

console.log("-------------Using traditional for loop--------------");

// access the names with a loop
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("-------------Using Enhanced for loop--------------");
// Enhanced for loop for arrays
// for of
for (const name of names) {
  console.log(name);
}
