const fs = require('fs');

let filename = __dirname + '/user_data.json';

if (fs.existsSync(filename)) {
    console.log('File exists');

            let data = fs.readFileSync(filename, 'utf-8');

            let user_reg_data = JSON.parse(data);

            let user_stats = fs.statSync(filename);

            let stats_size = user_stats.size;

//. Have it output to the console user_data.json has xxx characters where xxx is the filesize.
console.log(`The file name ${filename} has ${stats_size} characters`);
} else {
    console.log(`File ${filename} does not exist`);
}
//Modify program in the previous part to print out the size of your user_data.json file using fs.statSync(filename). Have it output to the console user_data.json has xxx characters where xxx is the filesize.