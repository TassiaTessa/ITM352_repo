
// define a variable for the month entry textbox and assign it the value from the DOM for that element
let monthInput=document.getElementById("monthInput");
// define a variable for the result to be sent to the DOM and assign it the value from the DOM for that element (which is currently nothing)
let result=document.getElementById("result");

// Add an event listener to the button - this means the code only works when the button is clicked
document.querySelector('button').addEventListener('click', function () {
    //note that the code for this program only executes when the button is clicked

    //define and assign a new month input variable as lowercase of input to make the switch statement easier to deal with
    let month=monthInput.value.toLowerCase();

    
    // Initialize num_days to -1 (default value) because ...
    let num_days = -1;

    //run through a switch statement based on the lowercase month variable
    // when the month is january, march, may, july, august, october, december, set num_days = 31
    //for february, set num_days = 28
    //for april june september november, num_days=30
    // all others, num_days = -1 to indicate an error in the input

    switch(month) {
        case "august":
        case "december":
        case "january":
        case "july":
        case "march":
        case "may":
        case "october":

            num_days=31;
            break;
        case "april":
        case "june":
        case "september":
        case "november":
            num_days=30;
            break;
        case "february":
            num_days=28; // might be 29 days depending on leap year 
            break;
        default:
            num_days=-1;
            break;
    }

    //if num_days is -1, output an error message to the DOM, otherwise send the proper result from the switch statement

    if (num_days === -1) {
        result.textContent = 'Invalid month. Please enter a valid month name.';
    } else {
        result.textContent = `There are ${num_days} days in ${month}.`;
    }
});