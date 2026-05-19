// 3 types of loops in JS

// while Loop
// do While Loop
//  for loop

// Loops variable
// exit condition
// iteration of the loop variable's value

// using all 3 loops types, print numbers from 1 to 10

// while Loop
let i = 1, // loop variable
  res = "";
console.log("----------While Loop----------");
while (i <= 10) {
  // exit condition (i<= 10)
  console.log(i);
  res += i + " ";
  i++; // increment of the variable
}
console.log(res);

console.log("----------Do While Loop----------");
// do while loop
let j = 1; // loop variable
do {
  console.log(j);
  j++; // increment of loop variable
} while (j <= 10); // condition

// for loop
console.log("----------For Loop----------");
for (let k = 1; k <= 10; k++) {
  console.log(k);
}
// console.log(k); // no more in scope
