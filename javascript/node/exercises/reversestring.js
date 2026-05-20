let originalString = "Hello, World!";
let reversedString = "";

// Iterate through the string from the last character to the first
for (let i = originalString.length - 1; i >= 0; i--) {
  reversedString += originalString[i];
}

console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);
