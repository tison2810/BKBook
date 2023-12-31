const db = require('../db');

exports.getBooksForHomePage = (req, res) => {
  const query = 'SELECT * FROM sach LIMIT 8';
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