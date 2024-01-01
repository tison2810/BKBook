const db = require('../db');

exports.getInfo = (req, res) => {
    const username = req.params.username;
    const query = 'SELECT * FROM khachhang WHERE TenDangNhap=?';
    db.query(query, [username], (error, results) => {
        if (error) throw error;
        res.json(results);
    });
}

exports.getOrderList = (req, res) => {
    const username = req.params.username;
    const query = 'SELECT SoDienThoai FROM khachhang WHERE TenDangNhap=?';
    db.query(query, [username], (error, results) => {
        if (error) throw error;
        const phone = results[0].SoDienThoai;
        const query2 = 'SELECT * FROM donhang WHERE SoDienThoai=?';
        db.query(query2, [phone], (error, results) => {
            if (error) throw error;
            res.json(results);
        });
    });
}