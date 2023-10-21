//Database Connection//
const mysql = require('mysql');

const db  = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: '3307',
  password: '1234',
  database: 'gatorDB',
  queueLimit: 0,
  waitForConnections: true
});
db.connect((err) => {
  if (err)
      {
        console.log('Error connecting to database!');
        throw err;
        }
         console.log('Connected to database!');
});

//If  putting the above connection in a seperate file export from that file and require it here
//module.exports = db;
//const db = require('../conf/database');

const express = require('express');
const router = express.Router();

db.query('SELECT * FROM tutors', (err, result) => {
  console.log(result);
  });

router.post('/search', async function(req, res, next){
    
    try{
	 var [myResults, _] = await db.execute(`select * from tutors`);
	return myResults;
	console.log(myResults);
	}catch(err){
		next(err);
	}
})




module.exports = router;
