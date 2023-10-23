

//validateNonNegInt checks to see if the string is a non negative 
function validateNonNegInt(string, returnErrors=false){
    errors = []; // assume no errors at first
    if(Number(string) != string) errors.push('Not a number!'); // Check if string is a number value
    if(string < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(string) != string) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0);
}

let attributes  =  "<name>;<age>;<age + 0.5>;<0.5 - age>" ;
let pieces = attributes.split(";");

for(let i=0; i < pieces.length; i++){
console.log(pieces[i]+","+typeof(pieces[i]));

}
console.log("pieces, "+typeof(pieces));

for (let i = 0; i < pieces.length; i++) {
    console.log(`String: ${pieces[i]}, validateNonNegInt: ${validateNonNegInt(pieces[i])}`);
}


//validateNonNegInt checks to see if the string is a non negative 

