const express = require('express');
const app = express();
const port = 3000;

// Serve static files from a directory (e.g., CSS, images, etc.)
app.use(express.static('application')); // Create a 'public' directory for your static files

// Define a route to serve your main HTML page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/about-landing/aboutMe-landing.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//app.get('/', (req, res) => {res.send('HEY!')})

