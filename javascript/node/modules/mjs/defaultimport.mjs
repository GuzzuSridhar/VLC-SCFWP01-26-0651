import x from "./defaultexport.mjs";
console.log(x(10, 9));

import anything, {
  diff as something,
  prod as everything,
} from "./defaultexport.mjs";
console.log(anything(10, 9));
console.log(something(10, 9));
console.log(everything(10, 9));
