// define a cutom type in TS
type User = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    isActive: boolean;
    phoneNumber?: string; // Optional field
}

// Usage of the custom type
const user1: User = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "[EMAIL_ADDRESS]",
    isActive: true
    // ignoring the phoneNumber as it is optional
}

console.log(user1)

// use the types in a function
function greetUser(x: User): string {
    // return `Hello ${x.firstName} ${x.lastName}!, Welcome to our platform.`
    return `Hello ${x.firstName} ${x.lastName}!, Welcome to our platform. You are ${x.age} years old.`
}

console.log(greetUser(user1))