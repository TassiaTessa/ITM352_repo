//Product data 


     // Product 1
     let item1 = 'Spicy ahi Poke';
     let quantity1 = 6;
     let price1 = 12.99;

     // Product 2
     let item2 = 'Carne Asada Burrito';
     let quantity2 = 3;
     let price2 = 9.23;

     // Product 3
     let item3 = 'Chicken Alfredo';
     let quantity3 = 9;
     let price3 = 22.89;

     // Product 4
     let item4 = 'Papa Johns Pizza';
     let quantity4 = 1;
     let price4 = .01;
     let extended_price1, extended_price2, extended_price3, extended_price4;

     // Compute extended prices
     extended_price1 = quantity1 * price1;
     extended_price2 = quantity2 * price2;
     extended_price3 = quantity3 * price3;
     extended_price4 = quantity4 * price4;

     // Calculate subtotal
     let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4;

     // Calculate sales tax (5.75%)
     let taxRate = 0.0575;
     let taxAmount = subtotal * taxRate;