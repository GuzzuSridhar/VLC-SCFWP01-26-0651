// default parameters in a ts function
function welcomePerson(name: string = "John", age: number = 25) { // age and name are optional
        console.log(`Hello ${name}, you are ${age} years old`)
        console.log(`Hello ${name}`)

    //     if (age) {
    //     console.log(`Hello ${name}, you are ${age} years old`)
    // } else {
    //     console.log(`Hello ${name}`)
    // }
}

welcomePerson();
welcomePerson("Alex")
welcomePerson("Alice", 45) 