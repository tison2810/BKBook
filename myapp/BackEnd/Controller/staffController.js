const db = require('../db');

exports.getInfo = (req, res) => {
    const username = req.params.username;
    const query = 'SELECT * FROM NhanVien WHERE TenDangNhap=?';
    console.log(username);
    db.query(query, [username], (error, results) => {
        if (error) throw error;
        res.json(results);
        console.log(results);
    });
}

exports.updateEmail = (req, res) => {
    const username = req.params.username;
    const email = req.body.email;
    const query = 'UPDATE khachhang SET Email=? WHERE TenDangNhap=?';
    db.query(query, [email, username], (error, results) => {
        if (error) throw error;
        res.json(results);
    });
}

exports.updateAddress = (req, res) => {
    const username = req.params.username;
    const address = req.body.address;
    const query = 'UPDATE khachhang SET Diachi=? WHERE TenDangNhap=?';
    db.query(query, [address, username], (error, results) => {
        if (error) throw error;
        res.json(results);
    });
}

exports.updatePassword = (req, res) => {
    const username = req.params.username;
    const password = req.body.password;
    const query = 'UPDATE khachhang SET MatKhau=? WHERE TenDangNhap=?';
    db.query(query, [password, username], (error, results) => {
        if (error) throw error;
        res.json(results);
    });
}