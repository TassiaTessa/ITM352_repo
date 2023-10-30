

// Fetch the query string parameters
const params = new URL(document.location).searchParams;
// Loop through the expected quantity parameters and update the quantity array

let quantity=[];

for (let i = 0; i < itemData.length; i++) {
    let quantityValue = params.get(`quantity${i}`);
    if (quantityValue !== null) {
        quantity[itemData[i].quantityIndex] = Number(quantityValue);
    }
}

//Product Data
import { itemData, quantity } from './Products_Data.js';

//Variables for subtotal, tax, shipping charge, and total
let subtotal = 0;
let taxRate = 0.0575;
let taxAmount = 0;
let total = 0;
let shippingCharge = 0;
generateItemRows();

if (subtotal <= 50) {
  shippingCharge = 2;
} else if (subtotal <= 100) {
  shippingCharge = 5;
} else {
  shippingCharge = subtotal * 0.05;
}

//Calculate total with shipping
taxAmount = subtotal * taxRate;
total = subtotal + taxAmount + shippingCharge;

//Setting total cell
document.getElementById('total_cell').innerHTML = `$${total.toFixed(2)}`;

//Setting subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementByID('shipping_cell').innerHTML = '$' + shippingCharge.toFixed(2);


function validateQuantity (quantity) {
  if (isNaN(quantity)) {
  return "Not a good food";//I know it should be not a number but changing this to make sal happy since he is from east coast lol
  }else if (quantity < 0 && !Number.isInteger(quantity)) {
  return "Negative Inventory and not an integer";
  }else if (quantity <0){
  return "Negative Inventory";
  }else if (!Number.isInteger(quantity)){
  return "Not an integer";
  }else {
  return "";
  }
  }
  

//function to generate table rows and apply quantity validation
function generateItemRows() {
  let table = document.getElementById('invoiceTable');
  table.innerHTML = '';
  let hasErrors = false;
  
  for (let i = 0; i < itemData.length; i++) {
    let item = itemData[i];
    let itemQuantity = quantity[item.quantityIndex];

    let validationMessage = validateQuantity(itemQuantity);
    if (validationMessage !== "") {
      hasErrors = true;
      let row = table.insertRow();
      row.insertCell(0).innerHTML = item.brand;
      row.insertCell(1).innerHTML = validationMessage;
    } else if (itemQuantity > 0) {
      let extendedPrice = item.price * itemQuantity;
      subtotal += extendedPrice;

      let row = table.insertRow();
      row.insertCell(0).innerHTML = item.brand;
      row.insertCell(1).innerHTML = itemQuantity;
      row.insertCell(2).innerHTML = '$' + item.price.toFixed(2);
      row.insertCell(3).innerHTML = '$' + extendedPrice.toFixed(2);
    }
    }
    //if no error, display total
    if (!hasErrors){
      document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);
    }
  }

    
/*
let row = table.insertRow();

// Create a new row for each item
row.insertCell(0).innerHTML = `${item1}`;
row.insertCell(1).innerHTML = `${quantity1}`;
row.insertCell(2).innerHTML = '$'+`${price1}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price1}`);
row = table.insertRow(); 

// Create a new row for each item
row.insertCell(0).innerHTML = `${item2}`;
row.insertCell(1).innerHTML = `${quantity2}`;
row.insertCell(2).innerHTML = '$'+`${price2}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price2}`);
row = table.insertRow(); 

// Create a new row for each item
row.insertCell(0).innerHTML = `${item3}`;
row.insertCell(1).innerHTML = `${quantity3}`;
row.insertCell(2).innerHTML = '$'+`${price3}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price3}`);
row = table.insertRow(); 

// Create a new row for each item
row.insertCell(0).innerHTML = `${item4}`;
row.insertCell(1).innerHTML = `${quantity4}`;
row.insertCell(2).innerHTML = '$'+`${price4}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price4}`);
row = table.insertRow();

// Create a new row for each item
row.insertCell(0).innerHTML = `${item5}`;
row.insertCell(1).innerHTML = `${quantity5}`;
row.insertCell(2).innerHTML = '$'+`${price5}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price5}`);

// Set the subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById("shipping_cell").innerHTML = "$"+shipping.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);*/