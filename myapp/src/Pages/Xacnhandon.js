import styles from '../Styles/Xacnhandon.module.css';
import React from 'react';
import Header from '../Component/logHeader.js';
import Footer from '../Component/Footer.js';
import Sidebar from '../Component/sideBarAdmin.js';
import Table from 'react-bootstrap/Table';

function Xacnhandon(){
    const data = [
        { MaDonHang: '0x0001', NguoiDat: 'Huỳnh Văn Tiến SĐT:0903127256', GiaTri: '512.000', DiaChi: '64 Nguyễn Đình Chính, P15, Q.Phú Nhuận, TP.HCM' },
        { MaDonHang: '0x0002', NguoiDat: 'Trần Thị Huyền SĐT: 0913080299', GiaTri: '245.000', DiaChi: '356/11 Bạch Đằng, P14, Q.Bình Thạnh, TP.HCM' },
        { MaDonHang: '0x0003', NguoiDat: 'Phạm Văn Bình SĐT: 0909991573', GiaTri: '1.508.000', DiaChi: '36 Bùi Văn Thêm, P9, Q.Phú Nhuận, TP.HCM' },
        { MaDonHang: '0x0004', NguoiDat: 'Nguyễn Ngọc Quỳnh SĐT:0902764213', GiaTri: '722.000', DiaChi: '313 Phạm Văn Chiêu, P14, Q.Gò Vấp, TP.HCM' },
        { MaDonHang: '0x0005', NguoiDat: 'Trương Thành Đạt SĐT:0913020447', GiaTri: '76.000', DiaChi: '242 Lý Thường Kiệt, P14, Q.10, TP.HCM' },
      ];
    const OrderTable = 
    <Table className={styles.OrderTable}>
    <div className={styles.tableContainer}>
      <thead>
        <tr>
          <th scope="col">Mã đơn</th>
          <th scope="col">Người đặt hàng</th>
          <th scope="col">Giá trị</th>
          <th scope="col">Địa chỉ giao hàng</th>
          <th scope="col">Hành động</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className = "tableColor">
            <td>{item.MaDonHang}</td>
            <td>{item.NguoiDat}</td>
            <td>{item.GiaTri}</td>
            <td>{item.DiaChi}</td>
            <td><a href="#">Xác nhận đơn hàng</a></td>
          </tr>
        ))}
      </tbody>
    </div>
  </Table>
    return (
        <React.Fragment>
          <Header />
          <Sidebar />
          <input className= "searchbar" type="text" placeholder="Nhập mã đơn hàng cần tìm" />
          {OrderTable}
          {/* <Footer /> */}
        </React.Fragment>
      );
}

export default Xacnhandon