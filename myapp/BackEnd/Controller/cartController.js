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
// CREATE PROCEDURE ThemSachVaoGioHang(
//   p_SoDienThoai CHAR(10),
//   p_IDSach INT,
//   p_SoLuong INT
// )
// BEGIN
//   -- Nếu sách chưa có trong giỏ hàng, thêm mới vào
//   IF p_IDSach NOT IN (SELECT IDSach FROM KhachThemSach WHERE SoDienThoai = p_SoDienThoai) THEN
//       -- Thêm sách vào giỏ hàng
//       INSERT INTO KhachThemSach(p_SoDienThoai, p_IDSach, p_SoLuong) VALUE (p_IDSach, p_SoLuong);

//   ELSE
//       -- Nếu sách đã có trong giỏ hàng, gọi thủ tục cập nhật số lượng
//       CALL CapNhatSoLuongSachTrongGioHang(p_SoDienThoai, p_IDSach, p_SoLuong);
//   END IF;
// END //
exports.addToCart = (req, res) => {
  const { bookId, count, username } = req.body;
  const query = 'SELECT * FROM khachhang WHERE TenDangNhap=?';
  db.query(query, [username], (error, results) => {
    if (error) throw error;
    if (results.length === 0) {
      res.json({ error: 'User not found' });
      return;
    }
    const phoneNumber = results[0].SoDienThoai;
    const query2 = 'CALL ThemSachVaoGioHang(?, ?, ?)';
    db.query(query2, [phoneNumber, bookId, count], (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });
};