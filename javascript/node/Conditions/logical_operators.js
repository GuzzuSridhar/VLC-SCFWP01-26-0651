// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)

let salary = 10000;
let dept = "Ops";

// for every employee in sales having current salary more than 5000, increment by 1000

if (salary > 5000 && dept === "Sales") {
  salary += 1000;
}
console.log(salary);
