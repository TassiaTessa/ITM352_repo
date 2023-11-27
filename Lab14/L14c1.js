const fs = require('fs');

let filename = __dirname + '/user_data.json';
let user_reg_data;

if (fs.existsSync(filename)) {
    console.log('File exists');

            let data = fs.readFileSync(filename, 'utf-8');

            user_reg_data = JSON.parse(data);

            let user_stats = fs.statSync(filename);

            let stats_size = user_stats.size;

//output the user_stats object

console.log(`The file name ${filename} has ${stats_size} characters`);
} else {
    console.log(`File ${filename} does not exist`);
}



//
let express = require('express');
let app = express();


app.use(express.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

app.post("/login", function (request, response) {
//add code to the app.post() callback function to check if a username and password submitted in the form match a username and password stored in users_reg_data. If so, generate a <username> logged in page. If not, redirect back to the login page.
let username_entered = request.body['username'];
let password_entered = request.body['password'];

let response_msg = '';
let errors = false;

//Check if username and password exist in user_reg_data
if (typeof user_reg_data[username_entered] != 'undefined') {
    if (password_entered == user_reg_data[username_entered].password){
        response_msg = `${username_entered} logged in`;
    } else {
        response_msg = `Incorrect Password`;
        errors = true;
    }
}else {
    response_msg = `${username_entered} does not exist`;
    errors = true;
} if (!errors){
    response.send(response_msg);
} else {
    response.redirect(`./login?error=${response_msg}`);
}
});

app.listen(8080, () => console.log(`listening on port 8080`));