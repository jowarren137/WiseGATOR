var express = require('express');
var router = express.Router();
const pool = require('../conf/dataPool.js');
var crypto = require('crypto');
const multer = require('multer');



//localhost:3000//register
router.post('/register/', async function(req, res, next){
    
    var{email,password, name} = req.body;
    try{
        //uniquness checks
      
        var [results, _] = await pool.execute(`select id from users where email = ?`, [email]);
        //console.log( await pool.execute(`select id from users where email = ?`, [email]));
        if (results && results.length >0) {
            console.log(`${email} already exists`);
            return res.redirect("/login-form/?error=Already a user");
        }

        //insert into db
        
        var[insertResult, _] = await pool.execute(`INSERT INTO users ( name, email, password) VALUE (?,?,?);`, [name,email,
            (crypto.createHash('sha1').update(JSON.stringify(password)).digest('bin'))]);
        //respond
        if(insertResult && insertResult.affectedRows == 1){
            return res.redirect('/login-form/');
        }else{
            return res.redirect('/register-form/?error=Failed to register user');
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
                req.session.userId = await pool.execute(`select id from users where email = ?`,[email]);
                req.session.fullName = await pool.execute(`select name from users where email = ?`,[email]);
                 var tutorId = (await pool.execute(`select id from tutors where user_id = ?`,[(req.session.userId[0][0].id)]));
                if(tutorId[0][0])
                {
                    req.session.tutorId = tutorId;
                    req.session.isTutor = true;
                }
                else{
                    console.log("Not a tutor");
                }
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


router.post('/register-tutor/', async function(req, res, next) {
    if(req.session.userId && !req.session.isTutor)
    {
        const storage = multer.diskStorage({
            destination: function(req, file, cb) {
                cb(null, '../application/webpage/tutor-pictures/');
            },
            filename: function(req, file, cb) {
                const extension = file.originalname.split('.').pop();
                const filename = "tutor_"+file.fieldname+"_"+(req.session.userId[0][0]).id +"."+ extension;
                cb(null, filename);
            }
        });

        const upload = multer({ storage: storage, limits: { fileSize: 10000000 } }); // 10MB file size

        upload.fields([{name: 'video'}, {name: 'photo'}, {name: 'flyer'}])(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                // Check if the error is due to file size
                if (err.code === 'LIMIT_FILE_SIZE') {
                    // Re-render the registration page with an error message and the previously entered info
                    return res.redirect('/tutor-application/?error=File too large. Please upload a file smaller than 10MB.');
                }
                return next(err);
            } else if (err) {
                return next(err);
            }

    
            var{first_name, last_name, topic, description} = req.body;
            let nombre = "";
            if (first_name && last_name)
            {
                nombre = (first_name + " " + last_name);
            }
            var videoName = "", photoName = "", flyerName = "";
            if (req.files['video'])
            {
                videoName = ("tutor_video_" +(req.session.userId[0][0]).id);
            }
            if (req.files['photo'])
            {
                photoName = ("tutor_photo_" +(req.session.userId[0][0]).id);
            }
            else{
                photoName = "default";
            }
            if (req.files['flyer'])
            {
                flyerName = ("tutor_flyer_" +(req.session.userId[0][0]).id);
            }
            
            
            var[insertResult, _] = await pool.execute(`INSERT INTO tutors ( name, subject_id, description, flyer, picture, video, user_id, isActive) VALUE (?,?,?,?,?,?,?,?);`,
                [nombre, topic, description, flyerName, photoName, videoName, (req.session.userId[0][0]).id, 0]);
            console.log(insertResult);
            res.redirect('/search-tutors/');
        });
    }
    else if(req.session.isTutor){
        //Handle update tutor info
        res.redirect('/login-form/?error=Need to implement updates');
    }
    else{
        //Handle saving form info while logging in
        res.redirect('/login-form/?error=Login to register as tutor');
    }
    
});