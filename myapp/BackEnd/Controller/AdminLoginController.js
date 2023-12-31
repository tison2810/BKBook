exports.AdminLogin = async(req, res) => {
    try {
        const { username, password } = req.body;
        const results = await query('SELECT * FROM nhanvien WHERE TenDangNhap = ?', [username]);
        if (results.length > 0 && results[0].MatKhau == password) {
        res.status(200).json({ message: 'Đăng nhập thành công' });
        } else {
        res.status(401).json({ message: 'Đăng nhập thất bại' });
        }
    } catch (error) {
        next(error);
    }
}