exports.GetAdmin = async (req, res, next) => {
    try {
      const query1 = `select * from nhanvien WHERE ID = ? `;
      const { employee_ID } = req.params;
      const value1= [employee_ID];
      const results = await query(query1,value1);
      res.status(200).json(results)
    } catch (error) {
      next(error);
    }
  }

  exports.GetOrder = async (req, res, next) => {
    try {
      const query1 =`SELECT * FROM donhang WHERE ID = ?`;
      const { order_ID } = req.params;
      const value1 = [order_ID];
      const results = await query(query1,value1);
      res.status(200).json(results)
      } catch (error) {
        next(error);
      }
  }

  exports.GetOrderConfirm = async (req, res, next) => {
    try {
      const query1 =`SELECT * 
                    FROM donhang
                    WHERE XacNhan IS NULL
                    `;
      const results = await query(query1);
      res.status(200).json(results)
      } catch (error) {
        next(error);
      }
  }