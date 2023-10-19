const express = require('express');
const app = express();
const port = 3000;
//const searchTutorsRouter = require("./webpage/search-tutors/search-tutors.js");
const db = require('./conf/database.js');

// Serve static files from a directory (e.g., CSS, images, etc.)
app.use(express.static('webpage')); // Create a 'public' directory for your static files

// Define a route to serve your main HTML page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/webpage/home/home.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Use EJS maybe handlebars in the future
//app.set('view engine', 'ejs');


//app.get('/', (req, res) => {res.send('HEY!')})

//Routes are going to get cluttered if we decide to leave them all in here so in 
// the future we will have to separate the routes into their own JS files but for now its ok like 
// this

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
    res.sendFile(__dirname + '/webpage/about-landing/aboutMe-landing-img/group.png');
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


// HOME NAVBAR LINKS

app.get('/home-page/', function (req, res) {
    res.sendFile(__dirname + '/webpage/home/home.html');
});
app.get('/about-us/', function (req, res) {
    res.sendFile(__dirname + '/webpage/about-landing/aboutMe-landing.html');
});
app.get('/search-tutors/', function (req, res) {
    res.sendFile(__dirname + '/webpage/search-tutors/search-tutors.html');
});

// Database calls
const searchTutorsRouter = require('./routes/db-route');

app.use('/api/search-tutors/', searchTutorsRouter);



//app.get('/search-tutors', function (req, res) {
//    res.sendFile(__dirname + '/vwebpage/search-tutors/search-tutors.html');
//});

//route middleware from search-tutors.js
// Use the search-tutors route when the user accesses /search-tutors
//app.use('/search-tutors', searchTutorsRouter);

module.exports = app;



