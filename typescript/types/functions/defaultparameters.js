// default parameters in a ts function
function welcomePerson(name, age) {
    if (name === void 0) { name = "John"; }
    if (age === void 0) { age = 25; }
    console.log("Hello ".concat(name, ", you are ").concat(age, " years old"));
    console.log("Hello ".concat(name));
    //     if (age) {
    //     console.log(`Hello ${name}, you are ${age} years old`)
    // } else {
    //     console.log(`Hello ${name}`)
    // }
}
welcomePerson();
welcomePerson("Alex");
welcomePerson("Alice", 45);
