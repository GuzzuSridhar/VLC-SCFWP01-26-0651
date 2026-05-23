// a function can have a return value
// if return is omitted then the function is called void function
//  (not returning anything)
// the return statement in a function is the last statement to be executed
// any statement after the return statement is not executed.

// add function with a return statement
function add(x, y) {
  return x + y;
  console.log("test"); // dead code or unreachable
}

add(10, 20);
// the returned value is not consumed;

console.log(add(10, 20));
// the returned value is consumed by the console.log)

let res = add(100, 200);
// the return value is consumed by the variable
console.log(res);

// nesting functions
res = add(add(10, 20), add(30, 40));
console.log(res);

res = add(10, 20, 30); // consumes the first 2 params / args only
console.log(res);
