
// Check the URL for any error parameters and and quantity and display/use them
let params = (new URL(document.location)).searchParams;
let q = Number(params.get('quantity'));
let error = params.get('error');

//if there is an error, alert the user :) 
if (error) {
    alert(error);
}

// Select the div where product details should be displayed
let productDetailsDiv = document.getElementById('productDetails');
// Display the first product's details
productDetailsDiv.innerHTML = `<h3>${products[0]["brand"]} at \$${products[0]["price"]}</h3>`;

//this is the div where the product list will be deployed
let productListDiv=document.getElementById('productList');
for (let i in products) {
    productListDiv.innerHTML +=`<h4>${products[i]["total_sold"]} ${products[i]["brand"]} have been sold!</h4>`;
}