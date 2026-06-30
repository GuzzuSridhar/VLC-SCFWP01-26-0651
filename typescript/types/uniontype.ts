// union type in ts
let userId: string | number
userId = 1001
userId = "abc"
console.log(userId)
// userId = false // compile time error

function printUserId(id: string | number) {
    console.log(id)
}
printUserId(1001)
printUserId("abc")
// printUserId(false) // compile time error