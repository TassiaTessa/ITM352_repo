
let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/test', function (req, res) {
    res.send('app.get for test was executed');
    console.log('app.get for test was executed'); 
}); 

let products = require(__dirname + '/products.json');
products.forEach( (prod,i) => {prod.total_sold = 0});


app.get("/products.js", function (request, response, next) {
   response.type('.js');
   let products_str = `let products = ${JSON.stringify(products)};`;
   response.send(products_str);
});

app.use(express.urlencoded({ extended: true }));

app.post("/process_form", function (request, response) {
    let receipt = '';
    let qtys = request.body[`quantity_textbox`];
    console.log(qtys);
    for (let i in qtys) {
        let q = Number(qtys[i]);
        console.log("the quantity value is "+q);
        let validationMessage = validateQuantity(q);
        let brand = products[i]['brand'];
        let brand_price = products[i]['price'];
        if (validateQuantity(q)==="") {
            products[i]['total_sold'] += Number(q);
            receipt += `<h3>Thank you for purchasing: ${q} ${brand}. Your total is \$${q * brand_price}!</h3>`; // render template string
        } else {
            receipt += `<h3><font color="red">${q} is not a valid quantity for ${brand}!<br>${validationMessage}</font></h3>`;
        }
    }
    response.send(receipt);
    response.end();

});

app.all('*', function (request, response, next) {
    //response.send(request.method + ' to path ' + request.path);
    console.log(request.method + ' to path ' + request.path);
});


app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback

function validateQuantity(quantity) {
    let errorMessage = "";
  
    switch (true) {
        case isNaN(quantity):
            errorMessage = "Not a number. Please enter a non-negative quantity to order.";
            break;
        case quantity < 0 && !Number.isInteger(quantity):
            errorMessage = "Negative inventory and not an Integer. Please enter a non-negative quantity to order.";
            break;
        case quantity < 0:
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