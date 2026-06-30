// optional parameter in a function
function welcomeUser(name: string, age?: number) { // age is optional (?)
    if (age) {
        console.log(`Hello ${name}, you are ${age} years old`)
    } else {
        console.log(`Hello ${name}`)
    }
}
welcomeUser("John")
welcomeUser("John", 25)