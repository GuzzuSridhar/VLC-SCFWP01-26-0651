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

// for every employee either in sales or  having current salary more than 5000, increment by 1000

if (salary > 5000 || dept === "Sales") {
  salary += 1000;
}
console.log(salary);

// Not opearator
let x = 10,
  y = 20;
console.log(x < y); // true
console.log(!(x < y)); //false
