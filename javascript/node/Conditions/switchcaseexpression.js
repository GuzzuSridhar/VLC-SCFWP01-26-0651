// switch case demo
const salary = 10000;
// categorize the salary band using switch statment
switch (true) {
  case salary < 1000:
    console.log("Low");
    break;
  case salary < 5000:
    console.log("Medium");
    break;
  case salary < 10000:
    console.log("High");
    break;
  case salary >= 10000:
    console.log("Very High");
    break;
  default:
    break;
}
