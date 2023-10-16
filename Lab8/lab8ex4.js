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