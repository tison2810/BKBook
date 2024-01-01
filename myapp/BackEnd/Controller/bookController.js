const db = require('../db');

exports.getBooksForHomePage = (req, res) => {
  const query = 'SELECT * FROM sach';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
}

exports.search = (req, res) => {
  const searchTerm = req.query.q;

  const query =
    'SELECT * FROM sach WHERE LOWER(Ten) LIKE LOWER(?) OR LOWER(TacGia) LIKE LOWER(?)';
  const params = [`%${searchTerm}%`, `%${searchTerm}%`];

  db.query(query, params, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
}

exports.getProductDetails = (req, res) => {
  const bookId = req.params.bookId;

  const query = 'SELECT * FROM sach WHERE ID = ?';
  const params = [bookId];

  db.query(query, params, (error, results) => {
    if (error) throw error;
    res.json(results[0]);
  });
}

exports.getProductReviews = (req, res) => {
  const bookId = req.params.bookId;
  
  const query = 'SELECT danhgia.*, HoTen FROM danhgia, khachhang WHERE IDSach = ? AND danhgia.SoDienThoai = khachhang.SoDienThoai';
  db.query(query, [bookId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Đã có lỗi xảy ra' });
    } else {
      res.json(results);
    }
  });
};

exports.rating = (req, res) => {
  const bookId = req.params.bookId;
  const { username, rating, comment } = req.body;
  console.log(req.body);
  console.log(bookId);

  const query = 'SELECT SoDienThoai FROM khachhang WHERE TenDangNhap = ?';
  const params = [username];

  db.query(query, params, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Đã có lỗi xảy ra' });
    } else {
      const query = 'INSERT INTO danhgia VALUES (?, ?, ?, ?)';
      const params = [results[0].SoDienThoai, bookId, rating, comment];

      db.query(query, params, (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Đã có lỗi xảy ra' });
        } else {
          res.json({ message: 'Đánh giá thành công' });
        }
      });
    }
  });
}
exports.getBooksByCategory = (req, res) => {
  const categoryId = req.params.categoryId;

  const query = 'SELECT sach.Ten, danhmuc.Ten AS category FROM sach JOIN sachthuocdanhmuc ON sach.ID = sachthuocdanhmuc.IDSach JOIN danhmuc ON sachthuocdanhmuc.IDDanhmuc = danhmuc.ID WHERE danhmuc.ID =? ORDER BY danhmuc.Ten';
  const params = [categoryId];

  db.query(query, params, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
}