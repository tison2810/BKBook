//import logo from './logo.svg';
import styles from '../Styles/personalBuy.module.css';
import React, { useState } from 'react';
import Header from '../Component/logHeader.js';
// import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
import Sidebar from '../Component/sideBar.js';
import Table from 'react-bootstrap/Table';


const getStatusClass = (status) => {
  switch (status) {
    case 'Đã giao':
      return 'DaGiao';
    case 'Đang giao':
      return 'DangGiao';
    case 'Đã hủy':
      return 'DaHuy';
    case 'Đang xử lí':
      return 'DangXuLi';
    case 'Chờ thanh toán':
      return 'ChoThanhToan';
    default:
      return ''; // Không có class nếu không có trạng thái nào khớp
  }
};

function PersonalBuy() {
  const [filter, setFilter] = useState('Tất cả'); // State để lưu giá trị filter, mặc định là '0' (Tất cả)
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const data = [
    { trangThai: 'Đã giao', maDonHang: '0x0001', ngayMua: '31/02/2023' },
    { trangThai: 'Đang giao', maDonHang: '0x0002', ngayMua: '31/02/2023' },
    { trangThai: 'Đã hủy', maDonHang: '0x0003', ngayMua: '31/02/2023' },
    { trangThai: 'Đang xử lí', maDonHang: '0x0004', ngayMua: '31/02/2023' },
    { trangThai: 'Chờ thanh toán', maDonHang: '0x0005', ngayMua: '31/02/2023' },
  ];

  // Lọc dữ liệu theo giá trị của dropdown
  const filteredData =
    filter === 'Tất cả' ? data : data.filter(item => item.trangThai.toLowerCase() === filter.toLowerCase());
  const filterDropdown =
    <div className={styles.filterDropdown}>
      <select onChange={handleFilterChange} value={filter}>
        <option value="Tất cả">Tất cả</option>
        <option value="Đã giao">Đã giao</option>
        <option value="Đang giao">Đang giao</option>
        <option value="Đang xử lí">Đang xử lí</option>
        <option value="Chờ thanh toán">Chờ thanh toán</option>
        <option value="Đã hủy">Đã hủy</option>
      </select>
    </div>

  const orderedTable =
    <Table className={styles.orderedTable}>
      <div className={styles.tableContainer}>
        <thead>
          <tr>
            <th scope="col">Trạng thái</th>
            <th scope="col">Mã đơn hàng</th>
            <th scope="col">Ngày mua</th>
            <th scope="col">Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className={getStatusClass(item.trangThai)}>
              <td>{item.trangThai}</td>
              <td>{item.maDonHang}</td>
              <td>{item.ngayMua}</td>
              <td><a href="#">Xem chi tiết</a></td>
            </tr>
          ))}
        </tbody>
      </div>
    </Table>
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      {filterDropdown}
      {orderedTable}
      <Footer />
    </React.Fragment>
  );
}
export default PersonalBuy;