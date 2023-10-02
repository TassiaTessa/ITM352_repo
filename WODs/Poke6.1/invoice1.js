//Product data 
/*Tassia's poke 6.1, a food store*/

//product 1
let item1 = 'Spicy ahi Poke';
let quantity1 = 10;
let price1 = 12.09;
let extended_price1 = quantity1 * price1;
//product 2
let item2 = 'Carne Asada Burrito';
 let quantity2 = 3;
 let price2 = 9.23;
let extended_price2 = quantity2 * price2;

 // Product 3
let item3 = 'Chicken Alfredo';
let quantity3 = 9;
let price3 = 22.89;
let extended_price3 = quantity3 * price3;

 // Product 4
 let item4 = 'Papa Johns Pizza';
 let quantity4 = 1;
 let price4 = .01;
let extended_price4 = quantity4 * price4;
//product 5
let item5 = 'Potato Pierogi';
let quantity5 = 10;
let price5 = 35.00;
let extended_price5 = quantity5 * price5;


     // Compute extended prices 
     /*this no worky so comment it out and im adding these to each product block
     extended_price1 = quantity1 * price1;
     extended_price2 = quantity2 * price2;
     extended_price3 = quantity3 * price3;
     extended_price4 = quantity4 * price4;
     */ 
    
     // Calculate subtotal
     let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4;

     // Calculate sales tax (5.75%)
     let taxRate = 0.0575;
     let taxAmount = subtotal * taxRate;

     //total:
     let total = subtotal + taxRate;
    //populate the table rows using DOM manipulation 
    let table=document.getElementById('invoiceTable')

     
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
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);