var express = require('express');
var router = express.Router();
const pool = require('../conf/dataPool.js');
var crypto = require('crypto');



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
        
        var[insertResult, _] = await pool.execute(`INSERT INTO users ( name, email, password) VALUE (?,?,?);`, [name,email,
            (crypto.createHash('sha1').update(JSON.stringify(password)).digest('bin'))]);
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
        var [results, _] = await pool.execute(`select password from users where email = ?`,[email]);
        if (results && results.length > 0) {
            console.log(`${email} is a user`);
             if(crypto.createHash('sha1').update(JSON.stringify(password)).digest('hex')== results[0].password.toString('hex')){
                console.log(`password is valid`);
                var userId = await pool.execute(`select id from users where email = ?`,[email]);
                req.session.userId = userId;
                // var tutorId = 
                console.log(await pool.execute(`SELECT id FROM tutors WHERE user_id = ?`,[userId]));
                // if(tutorId)
                // {
                //     req.session.tutorId = tutorId;
                // }
                // else{
                //     console.log("Not a tutor");
                // }
                return res.redirect("/dashboard/");
             }
             else{
                res.redirect('/login-form/?error=Invalid credentials');
             }
            
        }
        else{
            res.redirect('/login-form/?error=Invalid credentials');
        }
    

    }catch(err){
        next(err);
    }
 
})

router.post('/logout/', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.status(500).send('Could not log out');
      } else {
        res.redirect('/login-form/');
      }
    });
  });

module.exports = router;


//localhost:3000//login
router.post('/message/', async function(req, res, next){
    if (req.session.userId)
    {
        var{messageText, tutorId} = req.body;
        var[insertResult, _] = await pool.execute(`INSERT INTO messages ( TutorID, SenderID, Message) VALUE (?,?,?);`,
         [tutorId, (req.session.userId[0][0]).id, messageText]);
    }
    else{
        res.redirect('/login-form/?error=Login to send message');
    }

})