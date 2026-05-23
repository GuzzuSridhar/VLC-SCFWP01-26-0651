import { add, diff } from "./namedexports.mjs";
console.log(add(10, 9));
console.log(diff(10, 9));

// importing using alisses
import { add as x, diff as d } from "./namedexports.mjs";
console.log(x(10, 9));
console.log(d(10, 9));
