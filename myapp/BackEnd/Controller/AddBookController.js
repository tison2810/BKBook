exports.AddBook = async (req, res, next) => {
    try{
    const{Ten, Anh, MoTa, Gia, MucGiamGia, SoLuongDaBan} = req.body;
    const query = `INSERT  INTO sach ( Ten, Anh, MoTa, Gia, MucGiamGia, SoLuongDaBan)
      values(?,?,?,?,?,?)`;
    const values = [Ten, Anh, MoTa, Gia, MucGiamGia, SoLuongDaBan]
    const results = await query(query, values);
    res.status(200).json({ message: 'Thêm sách thành công'});
    }
   catch (error) {
    next(error);
  }
  }