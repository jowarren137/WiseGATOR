const express = require('express');
const app = express();
const port = 3000;

// Serve static files from a directory (e.g., CSS, images, etc.)
app.use(express.static('webpage')); // Create a 'public' directory for your static files

// Define a route to serve your main HTML page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/webpage/about-landing/aboutMe-landing.html');
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
    res.sendFile(__dirname + '/webpage/about-pages/ronnie.html');
});
// ronnie message me if you find this
app.get('/joaquin-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/joaquin.html');
});

// ronnie message me if you find this
app.get('/karl-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/karl.html');
});

// ronnie message me if you find this
app.get('/sean-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/sean.html');
});

// ronnie message me if you find this
app.get('/philip-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/philip.html');
});

// ronnie message me if you find this
app.get('/darien-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/darien.html');
});

// ronnie message me if you find this
app.get('/ronnie-page', (req,res) => {
    res.sendFile(__dirname + '/webpage/about-pages/ronnie.html');
});


//CSS routes

//app.get('/landing-base-css/', (req,res) => {
//    res.sendFile(__dirname + '/webpage/about-landing/CSS/aboutMe-landing-base.css');
//});
//app.get('/landing-grid-css/', (req,res) => {
//    res.sendFile(__dirname + '/webpage/about-landing/CSS/aboutMe-landing-grid.css');
//});


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






