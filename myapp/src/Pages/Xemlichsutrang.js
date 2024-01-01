import styles from '../Styles/Xemlichsutrang.module.css';
import React, { useState } from 'react';
import Header from '../Component/logHeader.js';
import Footer from '../Component/Footer.js';
import Sidebar from '../Component/sideBar.js';
import Table from 'react-bootstrap/Table';
import codethieunhi from '../images/300baicodethieunhi.jpg';
const books = [
  {TenSach: '300 bài code thiếu nhi', SoLuong: '1', Gia: '512.000'},
  {TenSach: 'Blockchain cho trẻ em', SoLuong: '1', Gia: '245.000'},
]

const ViewHistory = () =>{

  return(
    <div className = {styles.containerDetails}>
      <h2>Lịch sử mua hàng</h2>
      <button className ={styles.buttonDetailsOne}>Quay lại</button>
      <div className={styles.midDetails}>
        <div className={styles.midDetailsLeft}>
          <img src={codethieunhi}/>
        </div>
        <div className={styles.midDetailsRight}>
          <button className ={styles.buttonDetailsTwo}>
            Chờ thanh toán
          </button>
        </div>
      </div>
      <Table className={styles.orderTable}>
        <thead>
          <tr>
            <th>Tên sách</th>
            <th>Số lượng</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.title}>
              <td>{book.TenSach}</td>
              <td>{book.SoLuong}</td>
              <td>{book.Gia}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Sidebar/>
      <ViewHistory />
      <Footer/>
    </React.Fragment>
  );
}
export default App;