

function isNonNegInt(q){
    errors = []; 
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a numbe
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return errors.length == 0;
}
let attributes  =  "<name>;<age>;<age + 0.5>;<0.5 - age>" ;
let pieces = attributes.split(";");


for (let i = 0; i < pieces.length; i++) {
    console.log(`String: ${pieces[i]}, isNonNegInt: ${isNonNegInt(pieces[i])}`);
}

