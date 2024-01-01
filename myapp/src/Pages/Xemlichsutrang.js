import styles from '../Styles/Xemlichsutrang.module.css';
import React, { useState } from 'react';
import Header from '../Component/logHeader.js';
import Footer from '../Component/Footer.js';
import Sidebar from '../Component/sideBar.js';
import Table from 'react-bootstrap/Table';
import codethieunhi from '../images/300baicodethieunhi.jpg';
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
          <div>Tên sách: 300 bài code thiếu nhi</div>
          <div>Thời gian đặt mua: 02:17 26/10/2023</div>
          <div>Vui lòng thanh toán cho sản phẩm này trước 23:59 31/10/2023</div>
        </div>
      </div>
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