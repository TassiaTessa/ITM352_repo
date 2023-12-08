const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const session = require('express-session');
app.use(session({ secret: "MySecretKey", resave: true, saveUninitialized: true }));

const fs = require('fs');

let filename = __dirname + '/user_data.json';

let user_reg_data;

if (fs.existsSync(filename)) {
    console.log('File exists');

    let data = fs.readFileSync(filename, 'utf-8');

    user_reg_data = JSON.parse(data);

    let user_stats = fs.statSync(filename);

    let stats_size = user_stats.size;

    console.log(`The file name ${filename} has ${stats_size} characters`);
} else {
    console.log(`File ${filename} does not exist`);
}

// Part 4
let username = 'newuser';
user_reg_data[username] = {};
user_reg_data[username].password = 'newpass';
user_reg_data[username].email = 'newuser@user.com';
fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');

app.get('/set_cookie', (request, response) => {
    response.cookie('username', 'Tae', { maxAge: 5000 });
    response.send('Cookie has been sent with your name');
});

app.get('/use_cookie', (request, response) => {
    let username = request.cookies.username;
    response.send(`Welcome to the Use Cookie Page, ${username}`);
});

app.get('/use_session', (request, response) => {
    response.send(`Welcome, your session ID is ${request.session.id}`);
});

app.get("/login", function (request, response) {
    const usernameParam = request.query.username || '';
    let str = `
        <body>
            <form action="/login" method="POST">
                <p id="welcome"></p>
                <input type="text" name="username" size="40" placeholder="enter username" value="${usernameParam}"><br />
                <input type="password" name="password" size="40" placeholder="enter password"><br />
                <input type="submit" value="Submit" id="submit">
            </form>
        </body>
    `;
    let username = request.cookies.username || '';
    if (username.length !== 0) {
        str += `<script>document.getElementById("welcome").innerHTML = "Welcome, ${username}";</script>`;
    }
    response.send(str);
});

app.post("/login", function (request, response) {
    let username_entered = request.body['username'];
    let password_entered = request.body['password'];

    let response_msg = '';
    let errors = false;

    // Check if username exists in user_reg_data
    if (typeof user_reg_data[username_entered] !== 'undefined') {
        // Check if password matches
        if (password_entered === user_reg_data[username_entered].password) {
            response.cookie('username', `${username_entered}`);
            const userSession = request.session;
            if (!userSession.lastLogin) {
                userSession.lastLogin = "First Visit";
            } else {
                userSession.lastLogin = new Date().toLocaleString();
            }
            response_msg = `${username_entered} is logged in. Last login: ${userSession.lastLogin}`;
        } else {
            response_msg = `Incorrect Password`;
            errors = true;
        }
    } else {
        response_msg = `${username_entered} does not exist`;
        errors = true;
    }

    if (!errors) {
        response.send(response_msg);
    } else {
        setTimeout(() => {
            response.redirect(`/login?username=${username_entered}&error=${response_msg}`);
        }, 3000);
    }
});

app.get("/register", function (request, response) {
    let str = `
        <body>
            <form action="/register" method="POST">
                <input type="text" name="username" size="40" placeholder="enter username"><br />
                <input type="password" name="password" size="40" placeholder="enter password"><br />
                <input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
                <input type="email" name="email" size="40" placeholder="enter email"><br />
                <input type="submit" value="Submit" id="submit">
            </form>
        </body>
    `;
    response.send(str);
});

app.post("/register", function (request, response) {
    let new_user = request.body.username;
    let errors = false;
    let resp_msg = "";

    if (typeof user_reg_data[new_user] !== 'undefined') {
        resp_msg = `${new_user} already exists`;
        errors = true;
    } else if (request.body.password == request.body.repeat_password) {
        user_reg_data[new_user] = {};
        user_reg_data[new_user].password = request.body.password;
        user_reg_data[new_user].email = request.body.email;
        user_reg_data[new_user].name = request.body.name;

        fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');
        response.redirect(`/login`);
    } else {
        resp_msg = `Passwords do not match`;
        errors = true;
    }
    if (errors) {
        response.send(resp_msg);
    }
});

app.listen(8080, () => console.log(`listening on port 8080`));
