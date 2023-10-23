function splitString(string, separator) {
    return string.split(separator);
}

// Define attributes
let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";

// Split the attributes and make them arrays 
let separator = ";"; 
let pieces = splitString(attributes, separator);

//go through the parts and define the data types
for (let part of pieces) {
    console.log(`Part: ${part}, Data Type: ${typeof part}`);
}
//concat the parts back into a string 
let invertedString = pieces.join(separator);
console.log("Inverted String:", invertedString);
