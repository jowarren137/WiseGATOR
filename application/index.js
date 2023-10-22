const { Console } = require('console');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db  = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '',
  database: 'gatorDB'
});
db.connect((err) => {
  if (err)
      {
        console.log('Error connecting to database!');
        throw err;
        }
         console.log('Connected to database!');
});

// db.query('SELECT * FROM tutors', (err, result) => {
// console.log(result)
//     })

// set the view engine to ejs
app.set('view engine', 'ejs');
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

// Route to display tutors and handle search
app.get('/search-tutors/', (req, res) => {
    let sql = 'SELECT * FROM tutors';
    let queryData = [];
    // console.log(req.query.name)
    // if (req.query.name || req.query.subject_id) {
    //     sql += ' WHERE';

    //     if (req.query.name) {
    //         sql += ' name LIKE ?';
    //         queryData.push('%' + req.query.name + '%');
    //     }

    //     if (req.query.subject_id) {
    //         if (req.query.name) {
    //             sql += ' AND';
    //         }
    //         sql += ' subject_id = ?';
    //         queryData.push(req.query.subject_id);
    //     }
    // }
    db.query('SELECT * FROM topics', (err, subjects) => {
        if (err) throw err;

    db.query(sql, queryData, (err, results) => {
        if (err) throw err;
        res.render(__dirname + '/views/search-tutors.ejs', { tutors: results, topics: subjects });
    });
});
});

module.exports = app;