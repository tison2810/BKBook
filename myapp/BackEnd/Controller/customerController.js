const db = require('../db');

exports.getInfo = (req, res) => {
    const username = req.params.username;
    const query = 'SELECT * FROM khachhang WHERE TenDangNhap=?';
    db.query(query, [username], (error, results) => {
        if (error) throw error;
        res.json(results);
    });
    }