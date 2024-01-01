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

exports.getOrderProduct = (req, res) => {
    const id = req.params.id;
    const query = 'SELECT donhangcosach.*, sach.Ten, sach.Anh, donhang.XacNhan FROM donhangcosach, sach, donhang WHERE IDDonHang=? AND donhangcosach.IDSach=sach.ID AND donhang.ID=donhangcosach.IDDonHang';
    db.query(query, [id], (error, results) => {
        if (error) throw error;
        res.json(results);
    });
}

exports.updateOrderState = (req, res) => {
    const id = req.params.id;
    const state = req.body.state;
    const query = 'UPDATE donhang SET XacNhan=? WHERE ID=?';
    db.query(query, [state, id], (error, results) => {
        if (error) throw error;
        res.json(results);
    });
}