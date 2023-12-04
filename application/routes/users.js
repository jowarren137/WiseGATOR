var express = require('express');
var router = express.Router();
const pool = require('../conf/dataPool.js');

//localhost:3000//register
router.post('/register/', async function(req, res, next){
    
    var{email,password, name} = req.body;
    try{
        //uniquness checks
      
        var [results, _] = await pool.execute(`select id from users where email = ?`, [email]);
        //console.log( await pool.execute(`select id from users where email = ?`, [email]));
        if (results && results.length >0) {
            console.log(`${email} already exists`);
            return res.redirect("/login-form/");
        }

        //insert into db

        var[insertResult, _] = await pool.execute(`INSERT INTO users ( name, email, password) VALUE (?,?,?);`, [name,email,password]);
        //respond
        if(insertResult && insertResult.affectedRows == 1){
            return res.redirect('/login-form/');
        }else{
            return res.redirect('/register-form/');
        }

    }catch(err){
        next(err);
    }
 
})

//localhost:3000//login
router.post('/login/', async function(req, res, next){
    
    var{password, email} = req.body;
    try{
        //uniquness checks
        var [results, _] = await pool.execute(`select id from users where email = ?`,[email]);
        if (results && results.length > 0) {
            console.log(`${email} is a user`);
            // if(Table Users Get By username [username] get password = [password])
            return res.redirect("/dashboard/");
        }
        else{
            return res.redirect("/register-form/");
        }
    

    }catch(err){
        next(err);
    }
 
})

module.exports = router;