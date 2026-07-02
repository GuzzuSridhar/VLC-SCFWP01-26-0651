let message: string | null; // the message can hold string with null values allowed
message = "Hi, welcome to TypeSc"
console.log(message!)
console.log(message!.length) //! indicates the developers consent that the value is not null

// TS compiler does not determine that you are telling the truth when using "!" 