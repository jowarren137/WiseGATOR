const { Console } = require('console');
const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js");
const indexRouter = require("./routes/index.js");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require('express-session');
//Body parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(session({
  secret: 'process.env.secretkey', // Secret key to sign the session ID cookie
  resave: false, // Forces the session to be saved back to the session store
  saveUninitialized: false, // Forces a session that is "uninitialized" to be saved to the store
  // Optional settings like cookie: { maxAge: ... } can be added here
}));


// set the view engine to ejs
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');



// Serve static files from a directory (e.g., CSS, images, etc.)
// Create a 'public' directory for your static files
app.use("/webpage", express.static(path.join(__dirname, "webpage")));



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Routes

app.get('/ronnie-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/ronnie.html');
});

app.get('/joaquin-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/joaquin.html');
});

app.get('/karl-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/karl.html');
});

app.get('/sean-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/sean.html');
});

app.get('/philip-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/philip.html');
});

app.get('/darien-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/darien.html');
});

//IMG routes

app.get('/landing-group-img/', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/abt-imgs/group.png');
});

app.get('/ronnie-about-img/', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/abt-imgs/ronnieAbt.jpg');
});
app.get('/joaquin-about-img/', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/abt-imgs/joaquinAbt.jpg');
});

app.get('/philip-about-img/', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/abt-imgs/philipAbt.jpg');
});
app.get('/darien-about-img/', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/abt-imgs/darienAbt.jpg');
});
app.get('/default-about-img/', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/abt-imgs/defaultAbt.jpg');
});


// Page routes

// app.get('/home-page/', function (req, res) {
//     res.sendFile(__dirname + '/webpage/home/home.html');
// });

app.use("/users", usersRouter);
app.use("/", indexRouter);



module.exports = app;