// Define the product_quantities array
let product_quantities = [2, 1, 3, 1, 1];

// array of all products
// corresponds to product_quantities array
// product_quantities[i] is the quantity for products[i]
let products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
   ];
//iterate through products_quantities and pring each of the elements in the table 
document.write("<table>");
//document.write("<tr><th>Product #</th><th> Quantity</th></tr>")
//lab 8 part 3.2

document.write("<tr><th>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></tr>");

for (let i=0; i < product_quantities.length; i++) {
    
    let quantity = product_quantities[i];
    let product = products[i];
    let extended_cost = quantity * product.price;

    document.write("<tr>");
    document.write("<td>" + (i + 1) + "</td>"); // Product #
    document.write("<td>" + product.name + "</td>"); // name
    document.write("<td>" + product.price.toFixed(2) + "</td>"); // price
    document.write("<td>" + quantity + "</td>"); // Quantities 
    document.write("<td>" + extended_cost.toFixed(2) + "</td>"); // Extended Cost
    document.write("</tr>");
}
document.write("</table>");

/* Lab8 task 4.1 has you add a row if the table is clicked, but since we have a completed table
without additional data, we just need to add a row with the appropriate number of cells.
do not need to worry about the related cell data for a new product. that is not the purpose of this
task.*/

//this creates a button that will be called delete button, will add upon this later
let deleteButton = document.createElement('button')
//let the text content of the button to "Delete Last Row." This text will be displayed on the button.
deleteButton.textContent = 'Delete Last Row';
//add a click event listener to the button. When the button is clicky, the deleteLastRow function will be executy
deleteButton.addEventListener('click', deleteLastRow);
//add (append?) the button to the document's body. 
//this pushes it to the DOM 
document.body.appendChild(deleteButton);



//lab 8 part 4
function addNewRow(){
    let table = document.querySelector('table');
    
   //made it saw yee haw because it makes me happy 
    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td> yee </td>
        <td> haw </td>
        <td> yee </td>
        <td> haw </td>
        <td> :) </td>
    `;
};
 //add a click on event listener to the table to trigger the "addNewRow" Function 
 document.addEventListener('DOMContentLoaded', function () {
    let table = document.querySelector('table');
    table.addEventListener('click', addNewRow);
});

// using functions to delete the last row of the table (poor yee haw )
function deleteLastRow() {
    alert("Please Don't Delete the Yee Haw :(")
    let table = document.querySelector('table');
    let rowCount = table.rows.length; // gives row count for table
    //alert("you monster!")
    if (rowCount >1) {
        table.deleteRow(rowCount-1);// deletes the last row
    };
};