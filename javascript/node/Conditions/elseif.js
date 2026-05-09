// scenario of a salary increment based on the bracket of current salary
// if the current salary is less than equals 5K than icrement the salary by 1000
// if the current salary is greater than 5K and less than equal 10K increment the salary by 700
// if the current salary is greater than 10K  increment the salary by 500

let salary = 7000;
if (salary <= 5000) {
  salary += 1000;
} else if (salary > 5000 && salary <= 10000) {
  salary += 700;
} else {
  salary += 500;
}
console.log(salary);
