// Arrow functions
// simple arrow function without a argument and no return
// one line of code in the function no {} needed for body
const greet = () => console.log("Hello");
greet();
// equivivalent to
// function greet(){console.log("hello")}

// simple arrow function with a argument and return
const square = (a) => a * a;
//equvivalent to
// function square(a){ return a*a}
console.log(square(10)); // console.log consuming the return
square(10); // not consuming the return
// let res = square(10);
// console.log(res);

// simple arrow function with multiple arguments and return
const add = (n, m) => n + m;
console.log(add(10, 20));
// equivivalent to
// function add(n,m){return n+m;}

// multiple statments
const calculate = (...n) => {
  let res = 0;
  for (i = 0; i < n.length; i++) {
    res += n[i];
  }
  return res;
};

console.log(calculate(10, 20, 30, 40));

// string use case
const up = (str) => str.toUpperCase();
console.log(up("hello"));

const salaries = [2000, 3000, 4000, 5000];
const salIncrement = salaries.map((salary) => salary + 0);
console.log(salIncrement);

const totalSalarySpend = salaries.reduce(
  (total, salary) => total + salary,
  1000,
);
console.log(totalSalarySpend);

const filterSalaries = salaries.filter((salary) => salary > 3000);
console.log(filterSalaries);

const cities = ["Delhi", "Singapore", "NY"];
cities.forEach((city) => console.log(city));
