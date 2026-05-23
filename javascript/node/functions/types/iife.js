// iife -Immediately Invoked Function execution
// disposable
// one time use
// cannot be reused

(function () {
  console.log("Hello IIFE");
})();

(function () {
  console.log("Hello IIFE");
}); // not executed

(function () {
  console.log("Hello IIFE");
}).call();

(function (a, b) {
  console.log(a + b);
})(10, 20);
