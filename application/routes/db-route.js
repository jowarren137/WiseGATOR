const express = require('express');
const router = express.Router();
const db = require('../conf/database');

router.get('/tutor-db/', (req, res) => {
    const query = req.query.query;
    const sql = 'SELECT * FROM tutors';

    db.query(sql, [`%${query}%`, `%${query}%`], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'An error occurred while querying the database' });
            return;
        }
        res.json({ tutors: results });
    });
});

module.exports = router;
