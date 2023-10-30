
function formSubmission() {
    // get the value from the form int the textbox, convert it to a number and assign it to a thing I can easily type 
    let quantity = Number(document.querySelector('input[name="qty_textbox"]').value);

    let validationMessage = validateQuantity(quantity);

    if (validationMessage!=="") {
        document.getElementById("invalidQuantity").innerHTML = validationMessage;
    } else {
        //redirect to the display_purchase.html page 
        let message = `Thank you for ordering ${quantity} things!`;
        document.body.innerHTML = message;
    }
    return false; // prevents form submission if it isnt correct 


}

//the (quantity) can be name other things
function validateQuantity(quantity) {
    let errorMessage = "";

    switch (true) {
        case isNaN(quantity):
            errorMessage = "Not a number. Please enter a non-negative quantity to order.";
            break;
        case quantity <= 0 && !Number.isInteger(quantity):
            errorMessage = "Negative inventory and not an Integer. Please enter a non-negative quantity to order.";
            break;
        case quantity <= 0:
            errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
            break;
        case !Number.isInteger(quantity):
            errorMessage = "Not an Integer. Please enter a non-negative quantity to order.";
            break;
        default:
            errorMessage = ""; // No errors
            break;
    }

    return errorMessage;
}