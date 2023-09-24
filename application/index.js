const express = require('express');
const app = express();
const port = 3000;

// Serve static files from a directory (e.g., CSS, images, etc.)
app.use(express.static('webpage')); // Create a 'public' directory for your static files

// Define a route to serve your main HTML page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/webpage/aboutMe-landing.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//app.get('/', (req, res) => {res.send('HEY!')})

//Routes are going to get cluttered if we decide to leave them all in here so in 
// the future we will have to separate the routes into their own JS files but for now its ok like 
// this

app.get('/ronnie-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/ronnie.html');
});
// ronnie message me if you find this
app.get('/joaquin-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/joaquin.html');
});

// ronnie message me if you find this
app.get('/karl-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/karl.html');
});

// ronnie message me if you find this
app.get('/sean-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/sean.html');
});

// ronnie message me if you find this
app.get('/philip-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/philip.html');
});

// ronnie message me if you find this
app.get('/darien-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/darien.html');
});

// ronnie message me if you find this
app.get('/ronnie-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/ronnie.html');
});










