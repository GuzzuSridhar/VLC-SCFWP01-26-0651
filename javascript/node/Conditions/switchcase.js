// Switch case demo
const dow = 9;

switch (dow) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
    break;
}

// get the status of work of a given day (Weekday or weekend)
switch (dow) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid Day - Enter a value between 1-7 ");
}
// get the status of work of a given day (WFH or WFO)
switch (dow) {
  case 1:
  case 3:
    console.log("Work from home");
    break;
  case 2:
  case 5:
  case 4:
    console.log("Work from office");
    break;
  case 6:
  case 7:
    console.log("Holiday");
    break;
  default:
    console.log("Invalid Day");
}
