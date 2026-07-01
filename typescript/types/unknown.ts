let data: unknown;

data = 100;
data = "Hello"

// before using the variable of unknown type check the same

if(typeof data === "string") 
    console.log(data.toUpperCase());
else 
    console.log("Data is not a string")