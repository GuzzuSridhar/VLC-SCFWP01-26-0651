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

// access KV pairs from array
const users = [
  { id: 1, name: "Alex", active: true },
  { id: 2, name: "John", active: false },
  { id: 3, name: "Bob", active: true },
];

// get the user details individually
console.log("-------------Printing KV pairs (full object)--------------");
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

console.log("-------------Printing KV pairs (kv)--------------");
// print only the names of all users individually withot a loop
console.log(users[0].id + " - " + users[0].name);
console.log(users[1].id + " - " + users[1].name);
console.log(users[1].id + " - " + users[1].name);

// print all the names using a for of loop
console.log(
  "-------------Printing KV pairs (kv) using for of loop--------------",
);
for (const x of users) {
  console.log(x.id + " - " + x.name);
}
