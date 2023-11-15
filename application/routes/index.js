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
            res.render('aboutMe-landing', { tutors: results, topics: subjects, name: req.query.search,
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
            res.render('dashboard', { tutors: results, topics: subjects, name: req.query.search,
                subject: req.query.subject });
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
            res.render('homepage', { tutors: results, topics: subjects, name: req.query.search,
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
            res.render('tutor-application', { tutors: results, topics: subjects, name: req.query.search,
                subject: req.query.subject });
        });
    });
});



router.get('/login-form/', (req, res) => {
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
            res.render('login-form', { tutors: results, topics: subjects, name: req.query.search,
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
            res.render('register-form', { tutors: results, topics: subjects, name: req.query.search,
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
            res.render('dashboard', { tutors: results, topics: subjects, name: req.query.search,
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
            res.render('search-tutors', { tutors: results, topics: subjects, name: req.query.search,
                subject: req.query.subject });
        });
    });
});



module.exports = router;