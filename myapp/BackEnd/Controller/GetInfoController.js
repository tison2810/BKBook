exports.GetAdmin = async (req, res, next) => {
    try {
      const query1 = `select * from nhanvien WHERE ID = ? `;
      const { employee_ID } = req.params;
      const value1= [employee_ID];
      const results = await query(query1,value1);
      res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  }

exports.GetOrder = async (req, res, next) => {
try {
  const query1 =`SELECT * FROM donhang WHERE SoDienThoai = ?`;
  const { SĐT } = req.params;
  const value1 = [SĐT];
  const results = await query(query1,value1);
  res.status(200).json(results);
} catch (error) {
  next(error);
}
}

exports.GetOrderConfirm = async (req, res, next) => {
try {
  const query1 =`SELECT * 
                FROM donhang
                WHERE XacNhan = 'N'
                `;
  const results = await query(query1);
  res.status(200).json(results);
} catch (error) {
  next(error);
}
}

exports.GetListBook = async (req, res, next) => {
try {
  const query1 =`SELECT * FROM sach`;
  const results = await query(query1);
  res.status(200).json(results)
  } catch (error) {
    next(error);
  }
}

exports.GetBook = async (req, res, next) => {
try {
  const query1 =`SELECT * FROM sach WHERE ID = ?`;
  const { book_ID } = req.params;
  const value1 = [book_ID];
  const results = await query(query1,value1);
  res.status(200).json(results);
  } catch (error) {
    next(error);
  }
}
