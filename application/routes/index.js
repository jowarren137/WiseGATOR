var express = require('express');
var router = express.Router();
const db = require('../conf/database.js');

router.get('/about-us/', (req, res) => {
    let sql = 'SELECT * FROM tutors';
    let queryData = [];

    if ((req.query.search || req.query.subject)) {
        sql += ' WHERE';

        if (req.query.search) {
            sql += ' name LIKE ?';
            queryData.push('%' + req.query.search + '%');
        }

        if (req.query.subject) {
            if (req.query.search) {
                sql += ' AND';
            }
            sql += ' subject_id = ?';
            queryData.push(req.query.subject);
        }
    }
    db.query('SELECT * FROM topics', (err, subjects) => {
        if (err) throw err;

        db.query(sql, queryData, (err, results) => {
            if (err) throw err;
            res.render('aboutMe-landing', {  loggedIn: req.session.userId ? true : false, tutors: results, topics: subjects, name: req.query.search,
                subject: req.query.subject });
        });
    });
});

router.get('/dashboard/', (req, res) => {
    let sql = 'SELECT * FROM tutors';
    let queryData = [];
    

    if ((req.query.search || req.query.subject)) {
        sql += ' WHERE';

        if (req.query.search) {
            sql += ' name LIKE ?';
            queryData.push('%' + req.query.search + '%');
        }

        if (req.query.subject) {
            if (req.query.search) {
                sql += ' AND';
            }
            sql += ' subject_id = ?';
            queryData.push(req.query.subject);
        }
    }
    db.query('SELECT * FROM topics', (err, subjects) => {
        if (err) throw err;

        db.query(sql, queryData, (err, results) => {
            if (err) throw err;
            db.query('SELECT * FROM messages WHERE SenderID = ?', (req.session.userId[0][0]).id, (err, sent) => {
                if (err) throw err;
                db.query('SELECT * FROM messages WHERE TutorID = ?', (req.session.tutorId[0][0]).id, (err, received) => {
                    if (err) throw err;
                console.log(received)
                res.render('dashboard', {  loggedIn: req.session.userId ? true : false, tutors: results, topics: subjects,
                     sentMessages: sent, name: req.query.search, subject: req.query.subject, userName: (req.session.fullName[0][0]).name,
                       numInbox: received.length, receivedMessages: received });
                });  
            });    
        });
    });
});

// Define a route to serve your main HTML page
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM tutors';
    let queryData = [];

    if ((req.query.search || req.query.subject)) {
        sql += ' WHERE';

        if (req.query.search) {
            sql += ' name LIKE ?';
            queryData.push('%' + req.query.search + '%');
        }

        if (req.query.subject) {
            if (req.query.search) {
                sql += ' AND';
            }
            sql += ' subject_id = ?';
            queryData.push(req.query.subject);
        }
    }
    db.query('SELECT * FROM topics', (err, subjects) => {
        if (err) throw err;

        db.query(sql, queryData, (err, results) => {
            if (err) throw err;
            res.render('homepage', {  loggedIn: req.session.userId ? true : false, tutors: results, topics: subjects, name: req.query.search,
                subject: req.query.subject });
        });
    });
});



router.get('/tutor-application/', (req, res) => {
    let sql = 'SELECT * FROM tutors';
    let queryData = [];

    if ((req.query.search || req.query.subject)) {
        sql += ' WHERE';

        if (req.query.search) {
            sql += ' name LIKE ?';
            queryData.push('%' + req.query.search + '%');
        }

        if (req.query.subject) {
            if (req.query.search) {
                sql += ' AND';
            }
            sql += ' subject_id = ?';
            queryData.push(req.query.subject);
        }
    }
    db.query('SELECT * FROM topics', (err, subjects) => {
        if (err) throw err;

        db.query(sql, queryData, (err, results) => {
            if (err) throw err;
            res.render('tutor-application', {  loggedIn: req.session.userId ? true : false, tutors: results, topics: subjects, name: req.query.search,
                subject: req.query.subject });
        });
    });
});



router.get('/login-form/', (req, res) => {
    const errorMessage = req.query.error;
    let sql = 'SELECT * FROM tutors';
    let queryData = [];

    if ((req.query.search || req.query.subject)) {
        sql += ' WHERE';

        if (req.query.search) {
            sql += ' name LIKE ?';
            queryData.push('%' + req.query.search + '%');
        }

        if (req.query.subject) {
            if (req.query.search) {
                sql += ' AND';
            }
            sql += ' subject_id = ?';
            queryData.push(req.query.subject);
        }
    }
    db.query('SELECT * FROM topics', (err, subjects) => {
        if (err) throw err;

        db.query(sql, queryData, (err, results) => {
            if (err) throw err;
            res.render('login-form', { error: errorMessage, loggedIn: req.session.userId ? true : false, tutors: results, topics: subjects, name: req.query.search,
                subject: req.query.subject });
        });
    });
});



router.get('/register-form/', (req, res) => {
    let sql = 'SELECT * FROM tutors';
    let queryData = [];

    if ((req.query.search || req.query.subject)) {
        sql += ' WHERE';

        if (req.query.search) {
            sql += ' name LIKE ?';
            queryData.push('%' + req.query.search + '%');
        }

        if (req.query.subject) {
            if (req.query.search) {
                sql += ' AND';
            }
            sql += ' subject_id = ?';
            queryData.push(req.query.subject);
        }
    }
    db.query('SELECT * FROM topics', (err, subjects) => {
        if (err) throw err;

        db.query(sql, queryData, (err, results) => {
            if (err) throw err;
            res.render('register-form', {  loggedIn: req.session.userId ? true : false, tutors: results, topics: subjects, name: req.query.search,
                subject: req.query.subject });
        });
    });
});


// Route to display tutors and handle search
router.get('/search-tutors/', (req, res) => {
    let sql = 'SELECT * FROM tutors';
    let queryData = [];

    if ((req.query.search || req.query.subject)) {
        sql += ' WHERE';

        if (req.query.search) {
            sql += ' name LIKE ?';
            queryData.push('%' + req.query.search + '%');
        }

        if (req.query.subject) {
            if (req.query.search) {
                sql += ' AND';
            }
            sql += ' subject_id = ?';
            queryData.push(req.query.subject);
        }
    }
    db.query('SELECT * FROM topics', (err, subjects) => {
        if (err) throw err;

        db.query(sql, queryData, (err, results) => {
            if (err) throw err;
            res.render('search-tutors', { loggedIn: req.session.userId ? true : false, tutors: results, topics: subjects, name: req.query.search,
                subject: req.query.subject });
        });
    });
});



module.exports = router;