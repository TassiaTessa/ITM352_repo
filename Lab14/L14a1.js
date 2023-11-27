//Use require() to load and parse user_data.json into an object and assign it to user_reg_data and output this object to the console.

let filename = __dirname + '/user_data.json';

let user_reg_data = require(filename);

console.log(user_reg_data ['kazman'].password);
console.log(user_reg_data ['kazman'].email);

//Use the object to get the password information for the username
