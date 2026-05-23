// function Overloading
// function overload is the concept of having multiple functions
//  1. With same name
//  different number of arguments
//  only the last function declared will be active

console.log("hello");

function add(x, y) {
  console.log(x + y);
}

function add(x, y, z) {
  console.log(x + y + z);
}

function add(x, y, z, a) {
  console.log(x + y + z + a);
}

function add(x, y, z, a, b) {
  console.log(x + y + z + a + b);
}

// using Rest parameters
function add(...n) {
  // varargs representing an array
  // n[]
  // sum the elements in array
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  console.log(sum);
}

p("--------Overloaded Functions---------");
add(10, 20);
add(10, 20, 30);
add(10, 20, 30, 40);
add(10, 20, 30, 40, 50);
add(10, 20, 30, 40, 50, 60);
add(10, 20, 30, 40, 50, 60, 70, 80, 90);
add(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

function p(msg) {
  console.log(msg);
}
