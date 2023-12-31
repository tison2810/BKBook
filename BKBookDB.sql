DROP DATABASE BKBOOK;
CREATE DATABASE BKBOOK;
USE BKBOOK;

CREATE TABLE KhachHang (
    TenDangNhap VARCHAR(20) UNIQUE NOT NULL,
    SoDienThoai CHAR(10) NOT NULL,
    MatKhau VARCHAR(20) NOT NULL,
    HoTen VARCHAR(255) NOT NULL DEFAULT 'Anonymous',
    NgaySinh DATE,
    GioiTinh CHAR(1),
    Email VARCHAR(255) UNIQUE,
    Diachi VARCHAR(1000),
    NgayTao DATETIME,
    NgayCapNhat DATETIME,
    PRIMARY KEY (SoDienThoai)
);

CREATE TABLE DanhMuc (
    ID INT AUTO_INCREMENT,
    Ten VARCHAR(255) NOT NULL,
    MoTa VARCHAR(255),
    PRIMARY KEY (ID)
);

CREATE TABLE Sach (
    ID INT AUTO_INCREMENT,
    Ten VARCHAR(255) NOT NULL,
    Anh VARCHAR(255) NOT NULL,
    MoTa TEXT(65535) NOT NULL,
    Gia INT NOT NULL,
    MucGiamGia INT,
    SoLuongDaBan INT,
    NXB VARCHAR(255) DEFAULT 'BKBook',
    TacGia VARCHAR(255) DEFAULT 'Anonymous',
    DiemTrungBinh FLOAT,
    PRIMARY KEY (ID)
);

CREATE TABLE SachThuocDanhMuc(
    IDDanhMuc INT NOT NULL,
    IDSach INT NOT NULL,
    PRIMARY KEY (IDDanhMuc, IDSach)
);
ALTER TABLE SachThuocDanhMuc
ADD CONSTRAINT FK__SachThuocDanhMuc_DanhMuc FOREIGN KEY (IDDanhMuc) REFERENCES DanhMuc(ID),
ADD CONSTRAINT FK__SachThuocDanhMuc_Sach FOREIGN KEY (IDSach) REFERENCES Sach(ID);

CREATE TABLE KhachThemSach (
    SoDienThoai CHAR(10) NOT NULL,
    IDSach INT NOT NULL,
    SoLuong INT NOT NULL,
    PRIMARY KEY(SoDienThoai, IDSach)
);
ALTER TABLE KhachThemSach
ADD CONSTRAINT FK__ThemSach_SDT FOREIGN KEY (SoDienThoai) REFERENCES KhachHang(SoDienThoai),
ADD CONSTRAINT FK__ThemSach_ID FOREIGN KEY (IDSach) REFERENCES Sach(ID);

CREATE TABLE DonHang (
    ID INT AUTO_INCREMENT,
    SoDienThoai CHAR(10) NOT NULL,
    TongTien INT,
    NgayTao DATETIME,
    XacNhan CHAR(1),
    DiaChi TEXT(65535) NOT NULL,
    PRIMARY KEY(ID)
);
ALTER TABLE DonHang
ADD CONSTRAINT FK__DonHang__SDT FOREIGN KEY (SoDienThoai) REFERENCES KhachHang(SoDienThoai);

CREATE TABLE DonHangCoSach(
    IDDonHang INT NOT NULL,
    IDSach INT NOT NULL,
    SoLuong INT,
    TongTien INT,
    PRIMARY KEY (IDDonHang, IDSach)
);
ALTER TABLE DonHangCoSach
ADD CONSTRAINT FK__DHCS__IDDonHang FOREIGN KEY (IDDonHang) REFERENCES DonHang(ID),
ADD CONSTRAINT FK__DHCS__IDSach FOREIGN KEY (IDSach) REFERENCES Sach(ID);

CREATE TABLE NhanVien (
    ID CHAR(10) NOT NULL,
    TenDangNhap VARCHAR(20) NOT NULL,
    MatKhau VARCHAR(20) NOT NULL,
    HoTen VARCHAR(255) NOT NULL,
    SoDienThoai CHAR(10) NOT NULL,
    GioiTinh CHAR(1),
    PRIMARY KEY (ID)
);

CREATE TABLE DanhGia (
    SoDienThoai CHAR(10) NOT NULL,
    IDSach INT NOT NULL,
    SoSao INT,
    MoTa TEXT(65535),
    PRIMARY KEY(SoDienThoai, IDSach)
);
ALTER TABLE DanhGia
ADD CONSTRAINT FK__DanhGia_SDT FOREIGN KEY (SoDienThoai) REFERENCES KhachHang(SoDienThoai),
ADD CONSTRAINT FK__DanhGia_IDSach FOREIGN KEY (IDSach) REFERENCES Sach(ID);

INSERT INTO KhachHang VALUE ('nguyenvana', '0903181625', '123456', 'Nguyễn Văn A', '2000/05/06', 'M', 'nguyenvana@gmail.com', 'TPHCM', NOW(), NOW());
INSERT INTO KhachHang VALUE ('tranbinh', '0908452317', '12345678', 'Trần Văn Bình', '1993/08/12', 'M', 'tranvbinh@gmail.com', 'TPHCM', NOW(), NOW());

INSERT INTO DanhMuc VALUE (1, 'Truyện Ngắn', NULL);
INSERT INTO DanhMuc VALUE (2, 'Truyện Dài', NULL);
INSERT INTO DanhMuc VALUE (3, 'Tiểu Thuyết', NULL);
INSERT INTO DanhMuc VALUE (4, 'Truyện Tranh', NULL);
INSERT INTO DanhMuc VALUE (5, 'Kinh Dị', NULL);
INSERT INTO DanhMuc VALUE (6, 'Trinh Thám', NULL);
INSERT INTO DanhMuc VALUE (7, 'Ngôn Tình', NULL);
INSERT INTO DanhMuc VALUE (8, 'Sách Tham Khảo', NULL);
INSERT INTO DanhMuc VALUE (9, 'Sách Ngoại Ngữ', NULL);
INSERT INTO DanhMuc VALUE (10, 'Sách Giáo Khoa', NULL);

insert into Sach(Ten, Anh, MoTa, Gia, MucGiamGia) value ('Essential Grammar in Use', 'grammar.webp', 'Không có mô tả', 155000, 5);
insert into Sach(Ten, Anh, MoTa, Gia, MucGiamGia) value ('Kế toán vỉa hè', 'ktvh.png', 'Kế toán và tài chính là nỗi đau chung của rất nhiều doanh nghiệp nhỏ. Ngôn ngữ tài chính dường như là điều bí ẩn nhất của thế giới. Vô số tính toán và ý đồ được cài cắm sau các con số, mà thậm chí người kinh doanh nhiều năm cũng không thể nào bóc tách nổi.
Nếu bạn vẫn cảm thấy mù mờ với bảng báo cáo tài chính của mình thì thật là đáng tiếc. 
Tài chính được xem như là ngôn ngữ của kinh doanh.', 99000, 10);
insert into Sach(Ten, Anh, MoTa, Gia, MucGiamGia) value ('Điều kỳ diệu ở tiệm tạp hóa Namiya', 'namiya.jpg', 'Một đêm vội vã lẩn trốn sau phi vụ khoắng đồ nhà người, Atsuya, Shota và Kouhei đã rẽ vào lánh tạm trong một căn nhà hoang bên con dốc vắng người qua lại. Căn nhà có vẻ khi xưa là một tiệm tạp hóa với biển hiệu cũ kỹ bám đầy bồ hóng, khiến người ta khó lòng đọc được trên đó viết gì. Định bụng nghỉ tạm một đêm rồi sáng hôm sau chuồn sớm, cả ba không ngờ chờ đợi cả bọn sẽ là một đêm không ngủ, với bao điều kỳ bí bắt đầu từ một phong thư bất ngờ gửi đến…', 78000, 15);
insert into Sach(Ten, Anh, MoTa, Gia, MucGiamGia, TacGia) value ('Ỷ thiên đồ long ký', 'yThien.jpg', 'Không có mô tả', 62000, 10, 'Kim Dung');
insert into Sach(Ten, Anh, MoTa, Gia, MucGiamGia) value ('Về nơi có nhiều cánh đồng', 'vncncd.jpg', 'Về nơi có nhiều cánh đồng à cuốn du ký hoạ mới nhất của Lê Phan (Câu lạc bộ nghiên cứu bí ẩn, Xứ Mèo). Đây là tuyển tập ghi chép bằng tranh những câu chuyện thú vị trong hành trình di cư từ thành thị đến thung lũng Têu-y-pot trong lòng núi Ngọc Linh (Kon Tum) của Phan và các bạn trẻ thuộc INDIgo home.', 150000, 5);
insert into Sach(Ten, Anh, MoTa, Gia, TacGia) value ('Ngày xưa có một chuyện tình', 'nxc1ct.jpg', 'NGÀY XƯA CÓ MỘT CHUYỆN TÌNH là tác phẩm mới tinh thứ 2 trong năm 2016 của nhà văn Nguyễn Nhật Ánh dài hơn 300 trang, được coi là tập tiếp theo của tập truyện Mắt biếc. Có một tình yêu dữ dội, với em, của một người yêu em hơn chính bản thân mình - là anh.', 98000, 'Nguyễn Nhật Ánh');
insert into Sach(Ten, Anh, MoTa, Gia) value ('Toán cao cấp tập 1', 'toancc.webp', 'Không có mô tả', 112000);
insert into Sach(Ten, Anh, MoTa, Gia) value ('Osho - Tự tôn', 'osho-tu-ton.jpg', 'Tự tôn là cuốn sách dẫn đường giúp những linh hồn đang lạc lối tìm lại được điều quan trọng nhất: bản thể chân thật của chính mình. Khi học được cách tôn trọng bản thân đúng nghĩa, chúng ta sẽ thoát khỏi mọi gông cùm về tư tưởng để tự do tung cánh, được bộc lộ trọn vẹn tính cách và năng lượng cá nhân, cũng như sống hòa hợp với tập thể, thanh thản trước mọi thăng trầm của cuộc đời.', 135000);
insert into Sach(Ten, Anh, MoTa, Gia, NXB, TacGia) value ('Bảy bước tới mùa hè', 'baybuoctoimuahe.jpg', '_', 87000, 'Nhà xuất bản Trẻ', 'Nguyễn Nhật Ánh');
insert into Sach(Ten, Anh, MoTa, Gia, NXB, TacGia) value ('Bong bóng lên trời', 'bongbonglentroi.jpg', '_', 129000, 'Nhà xuất bản Trẻ', 'Nguyễn Nhật Ánh');
insert into Sach(Ten, Anh, MoTa, Gia, NXB, TacGia) value ('Mắt biếc 2019', 'matbiec2019.jpg', '_', 138000, 'Nhà xuất bản Trẻ', 'Nguyễn Nhật Ánh');
insert into Sach(Ten, Anh, MoTa, Gia, NXB, TacGia) value ('Tôi thấy hoa vàng trên cỏ xanh', 'toithayhoavangtrencoxanh.jpg', '_', 118000, 'Nhà xuất bản Trẻ', 'Nguyễn Nhật Ánh');
insert into Sach(Ten, Anh, MoTa, Gia, NXB, TacGia) value ('Hiệp khách hàng 1', 'hkht1.jpg', '_', 87000, 'Nhà xuất bản Kim Đồng', 'Kim Dung');
insert into Sach(Ten, Anh, MoTa, Gia, NXB, TacGia) value ('Lộc đỉnh ký tập 1', 'ldkt1_2.jpg', '_', 129000, 'Nhà xuất bản Kim Đồng', 'Kim Dung');
insert into Sach(Ten, Anh, MoTa, Gia, NXB, TacGia) value ('Lộc đỉnh ký 1', 'ldkt1.jpg', '_', 138000, 'Nhà xuất bản Kim Đồng', 'Kim Dung');
insert into Sach(Ten, Anh, MoTa, Gia, NXB, TacGia) value ('Thiên long bát bộ tập 1', 'tlbbt1.jpg', '_', 118000, 'Nhà xuất bản Kim Đồng', 'Kim Dung');

INSERT INTO KhachThemSach VALUE ('0903181625', 1, 2);
INSERT INTO KhachThemSach VALUE ('0903181625', 2, 3);
INSERT INTO KhachThemSach VALUE ('0908452317', 3, 1);
INSERT INTO KhachThemSach VALUE ('0908452317', 4, 2);

INSERT INTO NhanVien VALUE ('EMP0001', 'admin', '123456789', 'Nguyễn Văn A', '0908246578', 'M');

insert into DanhGia value ('0903181625', 1, 4, 'Sách rất mới, đóng gói kĩ.');
insert into DanhGia value ('0908452317', 1, 5, 'Chất lượng giấy tốt, nội dung rất hay.');
insert into DanhGia value ('0903181625', 2, 5, 'Sách rất mới, đóng gói kĩ.');
insert into DanhGia value ('0908452317', 2, 5, 'Chất lượng giấy tốt, nội dung rất hay.');
insert into DanhGia value ('0903181625', 3, 3, 'Sách rất mới, đóng gói kĩ.');
insert into DanhGia value ('0908452317', 3, 4, 'Chất lượng giấy tốt, nội dung rất hay.');
insert into DanhGia value ('0903181625', 4, 4, 'Sách rất mới, đóng gói kĩ.');
insert into DanhGia value ('0908452317', 4, 4, 'Chất lượng giấy tốt, nội dung rất hay.');
insert into DanhGia value ('0903181625', 5, 4, 'Sách rất mới, đóng gói kĩ.');
insert into DanhGia value ('0908452317', 5, 5, 'Chất lượng giấy tốt, nội dung rất hay.');
insert into DanhGia value ('0903181625', 6, 5, 'Sách rất mới, đóng gói kĩ.');
insert into DanhGia value ('0908452317', 6, 5, 'Chất lượng giấy tốt, nội dung rất hay.');
insert into DanhGia value ('0903181625', 7, 2, 'Sách rất mới, đóng gói kĩ.');
insert into DanhGia value ('0908452317', 7, 3, 'Chất lượng giấy tốt, nội dung rất hay.');
insert into DanhGia value ('0903181625', 8, 4, 'Sách rất mới, đóng gói kĩ.');
insert into DanhGia value ('0908452317', 8, 4, 'Chất lượng giấy tốt, nội dung rất hay.');

DELIMITER //

CREATE FUNCTION TongTien(SDT CHAR(10))
RETURNS INT
BEGIN
    DECLARE total INT;

    SELECT SUM(S.Gia * KTS.SoLuong) INTO total
    FROM KhachThemSach KTS
    INNER JOIN Sach S ON KTS.IDSach = S.ID
    WHERE KTS.SoDienThoai = SDT;

    IF total IS NULL THEN
        SET total = 0;
    END IF;

    RETURN total;
END //

CREATE TRIGGER TinhRatingTB AFTER INSERT ON DanhGia
FOR EACH ROW
BEGIN
DECLARE TongDiem INT;
DECLARE SoDanhGia INT;

SELECT SUM(SoSao),COUNT(*) INTO TongDiem,SoDanhGia
FROM DanhGia 
WHERE IDSach = NEW.IDSach;

IF SoDanhGia > 0 THEN
    UPDATE SACH SET DiemTrungBinh = TongDiem / SoDanhGia WHERE ID = NEW.IDSach;
END IF;
END //


CREATE PROCEDURE CapNhatSoLuongSachTrongGioHang(
    p_SoDienThoai CHAR(10),
    p_IDSach INT,
    p_SoLuong INT
)
BEGIN
    DECLARE existingQuantity INT;
    DECLARE newQuantity INT;

    SET existingQuantity = (SELECT SoLuong FROM KhachThemSach WHERE SoDienThoai = p_SoDienThoai AND IDSach = p_IDSach);
    SET newQuantity = (existingQuantity + p_SoLuong); 
    UPDATE KhachThemSach SET SoLuong = newQuantity WHERE SoDienThoai = p_SoDienThoai AND IDSach = p_IDSach;

END //

CREATE PROCEDURE ThemSachVaoGioHang(
    p_SoDienThoai CHAR(10),
    p_IDSach INT,
    p_SoLuong INT
)
BEGIN
    -- Nếu sách chưa có trong giỏ hàng, thêm mới vào
    IF p_IDSach NOT IN (SELECT IDSach FROM KhachThemSach WHERE SoDienThoai = p_SoDienThoai) THEN
        -- Thêm sách vào giỏ hàng
        INSERT INTO KhachThemSach(SoDienThoai, IDSach, SoLuong) VALUE (p_SoDienThoai, p_IDSach, p_SoLuong);

    ELSE
        -- Nếu sách đã có trong giỏ hàng, gọi thủ tục cập nhật số lượng
        CALL CapNhatSoLuongSachTrongGioHang(p_SoDienThoai, p_IDSach, p_SoLuong);
    END IF;
END //

CREATE PROCEDURE TaoDonHangTuGioHang(
    p_SoDienThoai CHAR(10)
)
BEGIN
    DECLARE p_TongTien INT;
    DECLARE p_XacNhan CHAR(1);
    DECLARE p_DiaChi VARCHAR(1000);
    DECLARE IDDonHang INT;

    SELECT SUM(S.Gia * KTS.SoLuong) INTO p_TongTien
    FROM KhachThemSach KTS
    JOIN Sach S ON KTS.IDSach = S.ID
    WHERE KTS.SoDienThoai = p_SoDienThoai;

    SET p_XacNhan = 'N';
    SET p_DiaChi = (SELECT DiaChi FROM KhachHang WHERE SoDienThoai = p_SoDienThoai);
    
    INSERT INTO DonHang (SoDienThoai, TongTien, NgayTao, XacNhan, DiaChi) VALUE (p_SoDienThoai, p_TongTien, NOW(), p_XacNhan, p_DiaChi);
    
    SET IDDonHang = LAST_INSERT_ID();
    
    INSERT INTO DonHangCoSach (IDDonHang, IDSach, SoLuong, TongTien)
    SELECT IDDonHang, IDSach, SoLuong, Gia * SoLuong
    FROM KhachThemSach KTS
    JOIN Sach S ON KTS.IDSach = S.ID
    WHERE KTS.SoDienThoai = p_SoDienThoai;
    
    DELETE FROM KhachThemSach WHERE SoDienThoai = p_SoDienThoai;
    
END //

DELIMITER ;