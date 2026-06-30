// optional parameter in a function
function welcomeUser(name, age) {
    if (age) {
        console.log("Hello ".concat(name, ", you are ").concat(age, " years old"));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
welcomeUser("John");
welcomeUser("John", 25);
