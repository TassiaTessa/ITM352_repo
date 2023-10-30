//define the quantitiy array 
let quantity = [2,9,1.5,"cat",-1.5,0];

// Define the item objects (minus image data) with brand and quantity attributes
let itemData = [
    {
      brand: 'HTC',
      price: 40,
      quantityIndex: 0, // Use index position to reference the quantity
    },
    {
      brand: 'Apple',
      price: 75.64,
      quantityIndex: 1, // Use index position to reference the quantity
    },
    {
      brand: 'Nokia',
      price: 35.99,
      quantityIndex: 2, // Use index position to reference the quantity
    },
    {
      brand: 'Samsung',
      price: 33.95,
      quantityIndex: 3, // Use index position to reference the quantity
    },
    {
      brand: 'Blackberry',
      price: 35.00,
      quantityIndex: 4, // Use index position to reference the quantity
    },
  ];
  
  export { itemData, quantity };

/*make an array of the products themselves
let itemData = [
    {
        brand: 'Spicy ahi Poke',
        price: 12.09,
        quantityIndex: 0,
    },
    {
        brand: 'Carne Asada Burrito',
        price: 9.23,
        quantityIndex: 1,
    },
    {
        brand: 'Chicken Alfredo',
        price: 22.89,
        quantityIndex: 2,
    },
    {
        brand: 'Papa Johns Pizza',
        price: 0.01,
        quantityIndex: 3,
    },
    {
        brand: 'Potato Pierogi',
        price: 35.00,
        quantityIndex: 4,
    },
];

export {itemData,quantity}*/