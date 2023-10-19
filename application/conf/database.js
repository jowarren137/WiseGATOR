//Database Connection
const mysql = require('mysql');

const pool  = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'GatorsTeam6!',
  database: 'gatorDB',
  queueLimit: 0,
  waitForConnections: true
});
//pool.connect((err) => {
//  if (err)
 //       {
  //      console.log('Error connecting to database!');
      //  throw err;
    //    }
        // console.log('Connected to database!');
//});

module.exports = pool;
