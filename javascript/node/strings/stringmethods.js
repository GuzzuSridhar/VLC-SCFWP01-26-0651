console.log("-------------String Methods---------------");
let str = "singapore";
// toUpperCase()
console.log(str.toUpperCase());
console.log(str); // does not change the content of the string

// to change the content permanently
// str = str.toUpperCase();
// console.log(str);

// toLowerCase()
console.log(str.toLowerCase());

// boolean methods
console.log(str.startsWith("sing"));
console.log(str.endsWith("pore"));
console.log(str.includes("sing"));

console.log(str.indexOf("a")); //4
console.log(str.indexOf("z")); //-1
console.log(str.indexOf("s")); //-1

str = "Helllo";
console.log(str.indexOf("l")); //-1
console.log(str.lastIndexOf("l")); //

str = "Hello World";
console.log(str.slice(0, 5));
console.log(str.substring(0, 5));

console.log(str.replace("Hello", "Hi"));

str = "  Hello  ";
console.log(str.length);
console.log(str.trim().length);
// convert string to array
console.log([...str]);
console.log(str);

str = "x,y,z";
console.log(str.split(","));
str = "x y z";
console.log(str.split(" "));

// compare Strings
console.log("hello" > "world");

// get the ascii code of a character
str = "Hello";
console.log(str.charCodeAt(0));
