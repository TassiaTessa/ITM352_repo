function updateQuantityMessage(textbox){
    let QuantityMessage=document.getElementById('qty_textbox_message')

    //Validate the quantity entered
    let validationmessage = validateQuantity(Number(textbox.value));

    // if there are validation errors, display error message 
    if(validationmessage !== "");{
        QuantityMessage.innerHTML =""
    } else {
        QuantityMessage.innerHTML= textbox.value;
    }
}


//the (quantity) can be name other things
function validateQuantity(quantity){
    let errorMessage = "";

    switch(true){
        case isNaN(quantity):
            errorMessage= "Not a number. Please enter a non-negative quantity to order"
        case quantity < 0 && !Number.isInteger(quantity):
            errorMessage= "Negative inventory and not an integer. Please enter a non-negative quantitiy to order"
        case quantity <= 0:
            errorMessage= "Negative inventory. Please enter a non-negative quantitiy to order"
      case quantity = "YeeHaw":
             errorMessage= "HOWDY"
        case !Number.isInteger(quantity):
            errorMessage ="Not an integer. Please enter a non-negative quantitiy to orde"
            break;
        default:
            errorMessage=""//no errors
            break;   
    }
    return errorMessage;
}