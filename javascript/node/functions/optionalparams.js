// optional parameters to a function
// there has to be a default value set to a
// parameter for that to be optional

function prn(msg) {
  console.log(msg);
}

// function with optional parameters
function add(n1 = 1, n2 = 1) {
  prn(n1 + n2);
}

add(); // not passing any arguments, consuming the default values
add(10, 20);
add(10); // pass the first argument and the second is the default value
add(undefined, 20); // pass the second argument  and the first is the default
