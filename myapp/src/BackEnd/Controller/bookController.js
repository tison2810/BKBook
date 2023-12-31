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