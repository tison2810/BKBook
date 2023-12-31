const db = require('../db');

// app.get('/api/cart/:username', (req, res) => {
//     const username = req.params.username;
//     const query = 
//     'SELECT Anh, Ten, TacGia, NXB, Gia, SoLuong FROM khachhang, khachthemsach, sach WHERE TenDangNhap=? AND khachhang.SoDienThoai=khachthemsach.SoDienThoai AND khachthemsach.IDSach=sach.ID';
//     db.query(query, [username], (error, results) => {
//       if (error) throw error;
      
//       res.json(results);
//     });
//   });

exports.getCart = (req, res) => {
  const username = req.params.username;
  const query = 
  'SELECT Anh, Ten, TacGia, NXB, Gia, SoLuong FROM khachhang, khachthemsach, sach WHERE TenDangNhap=? AND khachhang.SoDienThoai=khachthemsach.SoDienThoai AND khachthemsach.IDSach=sach.ID';
  db.query(query, [username], (error, results) => {
    if (error) throw error;
    
    res.json(results);
  });
}