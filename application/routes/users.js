var express = require('express');
var router = express.Router();
const db = require('../conf/database.js');

//localhost:3000//register
router.post('/register-form/', async function(req, res, next){
    
    var{username,email,password} = req.body;
    try{
        //uniquness checks
        var [results, _] = await db.execute(`select id from users where username = ?`,[username]);
        if (results && results.length > 0) {
            console.log(`${username} already exists`);
            return res.redirect("/login-form/");
        }
        var [results, _] = await db.execute(`select id from users where email = ?`, [email]);
        if (results && results.length >0) {
            console.log(`${email} already exists`);
            return res.redirect("/login-form/");
        }

        //insert into db

        var[insertResult, _] = await db.execute(`INSERT INTO users (username, email, password) VALUE (?,?,?);`, [username,email,password]);
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
router.post('/login-form/', async function(req, res, next){
    
    var{username, password} = req.body;
    try{
        //uniquness checks
        var [results, _] = await db.execute(`select id from users where username = ?`,[username]);
        if (results && results.length > 0) {
            console.log(`${username} is a user`);
            // if(Table Users Get By username [username] get password = [password])
            return res.redirect("/search-tutors/");
        }
        else{
            return res.redirect("/register-form/");
        }
    

    }catch(err){
        next(err);
    }
 
})

module.exports = router;