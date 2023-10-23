//doing the split thing I think (i hope)
function splitString(string, separator) {
    return string.split(separator);
}
//Define attributes
let attributes = "Tassia;21;MIS";

//Making an array
let attributesArray = attributes.split(";");

/* Wrong place lmao Define attributes
let attributes = "Tassia;21;MIS";
*/

//Seperating the attributes
let name = attributesArray[0];
let age = attributesArray[1];
let major = attributesArray[2];

//Print attributes
console.log("Name: " + attributesArray[0]);
console.log("Age: " + attributesArray[1]);
console.log("Major: " + attributesArray[2]);
