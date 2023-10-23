

//validateNonNegInt checks to see if the string is a non negative 
function validateNonNegInt(input, returnErrors = false) {
    let errors = [];
  
    if (Number(input) != input) errors.push('Not a number!');
    if (input < 0) errors.push('Negative value!');
    if (parseInt(input) != input) errors.push('Not an integer!');
  
    return returnErrors ? errors : (errors.length === 0);
  }

function checkIt(item, index){
    console.log(`part ${index} is ${(validateNonNegInt(item)?'a':'not a')} quantity`);
}

let attributes  =  "<name>;<age>;<age + 0.5>;<0.5 - age>" ;
let pieces = attributes.split(";");

for(let i=0; i < pieces.length; i++){
console.log(pieces[i]+","+typeof(pieces[i]));

}


console.log("pieces, "+typeof(pieces));

// Loop the pieces
for (let i = 0; i < pieces.length; i++) {
    let validationResult = validateNonNegInt(pieces[i], true);
    console.log(`Validation result for element "${pieces[i]}": ${validationResult}`);
  }
 

// Define the checkIt function
function checkIt(item, index) {
   // this will remove "<>" symbols from the item
   item = item.replace(/<|>/g, '');
   console.log(item);
  console.log(`part ${index} is ${(validateNonNegInt(item) ? 'a' : 'not a')} quantity`);
}

// Use checkIt as a callback
pieces.forEach(checkIt);


/*function checkIt(item, index){
    console.log(`part ${index} is ${(validateNonNegInt(item)?'a':'not a')} quantity`);
}*/

/*function download(url) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        picture_data = "image data:XOXOXO";
        return picture_data;
    }, 3* 1000);
    
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.com/big_pic.jpg';
process( download(url) );*/