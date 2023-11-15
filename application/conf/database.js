const mysql = require('mysql');

const db  = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: '3307',
  password: '1234',
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

module.exports= db;