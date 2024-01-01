const db = require('../db');

exports.AddBook = async (req, res, next) => {
  try{
      const {Ten, Anh, Gia, TacGia, NXB, MucGiamGia} = req.body;
      console.log(req.body);
      const query = `INSERT INTO sach (Ten, Anh, Gia, TacGia, NXB, MucGiamGia) values (?, ?, ?, ?, ?, ?)`;
      const values = [Ten, Anh, Gia, TacGia, NXB, MucGiamGia];
      db.query(query, values, (error, results) => {
          if (error) {
              next(error);
          } else {
              res.status(200).json({ message: 'Thêm sách thành công' });
          }
      });
  } catch (error) {
      next(error);
  }
}