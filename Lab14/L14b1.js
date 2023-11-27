const fs = require('fs');

//Use require() to load and parse user_data.json into an object and assign it to user_reg_data and output this object to the console.

let filename = __dirname + '/user_data.json';

if (fs.existsSync(filename)) {
    console.log('File exists');
//Write small program that uses readFileSync(filename, 'utf-8') to read the file and assign the result to the variable data. Use JSON.parse(data) to convert the data into an object and assign it to user_reg_data. Use console.log(user_reg_data); to display data.

            let data = fs.readFileSync(filename, 'utf-8');

            let user_reg_data = JSON.parse(data);

console.log(user_reg_data);
} else {
    console.log(`File ${filename} does not exist`);
}