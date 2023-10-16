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
//create a new row for the products and add the hover effect 
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${i + 1}</td>
        <td>${product.name}</td>
        <td>${product.price.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>${extended_cost.toFixed(2)}</td>
`;
//add new row to the table
document.querySelector('table').appendChild(newRow);
     newRow.addEventListener('mouseover', function () {
        newRow.style.backgroundColor = 'yellow';
    });
    newRow.addEventListener('mouseout', function() {
        newRow.style.backgroundColor = '';
    });
    newRow.addEventListener('click', function() {
        document.querySelector('table').deleteRow(newRow.rowIndex);
    });
}



/*this creates a button that will be called delete button, will add upon this later
let deleteButton = document.createElement('button')
//let the text content of the button to "Delete Last Row." This text will be displayed on the button.
deleteButton.textContent = 'Delete Last Row';
//add a click event listener to the button. When the button is clicky, the deleteLastRow function will be executy
deleteButton.addEventListener('click', deleteLastRow);
//add (append?) the button to the document's body. 
//this pushes it to the DOM 
document.body.appendChild(deleteButton);
*/ 

//Basically redoing the code above but making it add things 
let addButton = document.createElement('button');
addButton.textContent = 'Add New Row';
addButton.addEventListener('click', addNewRow);
document.body.appendChild(addButton);





//lab 8 part 4
function addNewRow(){
    let table = document.querySelector('table');
    
   //made it say yee haw because it makes me happy 
    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td> yee </td>
        <td> haw </td>
        <td> yee </td>
        <td> haw </td>
        <td> :) </td>
    `;
        newRow.addEventListener('mouseover', function () {
            newRow.style.backgroundColor = 'yellow';
        });
        newRow.addEventListener('mouseout', function() {
            newRow.style.backgroundColor = '';
        });
        newRow.addEventListener('click', function() {
            table.deleteRow(newRow.rowIndex);
        });
};

 /*add a click on event listener to the table to trigger the "addNewRow" Function 
 document.addEventListener('DOMContentLoaded', function () {
    let table = document.querySelector('table');
    table.addEventListener('click', addNewRow);
});

 using functions to delete the last row of the table (poor yee haw )
function deleteLastRow() {
    //commenting the alert out bc its only funny like the first three time
   // alert("Please Don't Delete the Yee Haw :(")
    let table = document.querySelector('table');
    let rowCount = table.rows.length; // gives row count for table
    //alert("you monster!")
    if (rowCount >1) {
        table.deleteRow(rowCount-1);// deletes the last row
    };
};
*/