const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({ secret: "MySecretKey", resave: true, saveUninitialized: true }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const fs = require('fs');
const { constants } = require('buffer');

let filename = __dirname + '/user_data.json';
let user_reg_data; // Initialize user_reg_data here

if (fs.existsSync(filename)) {
    let data = fs.readFileSync(filename, 'utf-8');
    user_reg_data = JSON.parse(data);

    let user_data_stats = fs.statSync(filename);
    let stats_size = user_data_stats.size;

    console.log(`The file name ${filename} has ${stats_size} characters`);
} else {
    console.log(`The file name ${filename} does not exist.`);
}

// Part 4
let username = 'newuser';
user_reg_data[username] = {};
user_reg_data[username].password = 'newpass';
user_reg_data[username].email = 'newuser@user.com';

fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');

// Route to GET use_session
app.get('/use_session', (req, res) => {
    if (req.session && req.session.id) {
        res.send(`Welcome, your session ID is ${req.session.id}`);
    } else {
        res.send('No session found.');
    }
});

// Route to set cookie
app.get('/set_cookie', (request, response) => {
    response.cookie('username', 'Tassia', { maxAge: 60000 });
    response.send('Cookie sent!');
});

// Route to use cookie
app.get('/use_cookie', (request, response) => {
    let username = request.cookies.username;
    if (username) {
        response.send(`Welcome to the Use Cookie Page, ${username}`);
    } else {
        response.send('Cookie not set');
    }
});

// Modified for extra credit #1, second option
app.get("/login", function (request, response) {
    let username = request.query.username || '';
    let login_form = `
        <body>
        <form action="" method="POST">
        <input type="text" name="username" size="40" placeholder="enter username" value="${username}"><br />
        <input type="password" name="password" size="40" placeholder="enter password"><br />
        <input type="submit" value="Submit" id="submit">
        </form>
        </body>
    `;
    response.send(login_form);
});
app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    // Retrieve the user's entered information
    let username_entered = request.body['username'];
    let password_entered = request.body['password'];

    console.log('Request Body:', request.body); // Log the request body to console

    let response_msg = "";
    let errors = false;

    // Check if the username exists in user_reg_data
    if (username_entered && typeof user_reg_data[username_entered] !== 'undefined') {
        // Check if the password matches with the username
        if (password_entered == user_reg_data[username_entered].password) {
            response.cookie('username', username_entered);
            
            const userSession = request.session;

            // Check if this is the user's first visit
            if (!userSession.lastLogin) {
                userSession.lastLogin = 'First visit!';
            } else {
                // Update last login time to the current time
                userSession.lastLogin = new Date().toLocaleString();
            }
            response_msg = `${username_entered} is logged in. Last login: ${userSession.lastLogin}`;
        } else {
            response_msg = `Incorrect password.`;
            errors = true;
        }
    } else {
        response_msg = `${username_entered} does not exist or invalid username.`;
        errors = true;
    }

    if (!errors) {
        response.send(response_msg);
    } else {
        response.redirect(`./login?username=${encodeURIComponent(username_entered)}`);
    }
});


app.listen(8080, () => console.log(`listening on port 8080`));
