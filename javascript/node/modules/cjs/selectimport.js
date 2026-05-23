const { add } = require("./selectexport");
console.log(add(10, 20));

// importing alias
const { a } = require("./selectexport");
console.log(a(10, 20));
