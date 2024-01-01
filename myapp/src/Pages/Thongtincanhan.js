import styles from '../Styles/Thongtincanhan.module.css';
import React , {useState} from 'react';
import Header from '../Component/logHeader.js';
import Footer from '../Component/Footer.js';
import Sidebar from '../Component/sideBarAdmin.js';
import { RxAvatar } from "react-icons/rx";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
const Thongtincanhan = () =>{
  return (

      <div className ={styles.infoPersonal}>
        <h2>Thông tin tài khoản</h2>
        <div className = {styles.info}>
          <div className = {styles.infoContainer}>
            <div className = {styles.avatar}>
             <RxAvatar />
            </div>
            <div className = {styles.infoDetails}>
              <ul>
                <li>
                  Họ và tên: Nguyễn Văn A
                </li>
                <li>Ngày sinh: 01/01/2003</li>
                <li>Giới tính: Nam</li>
                <li>CCCD: 079303517425</li>
                <li>Chức vụ: Nhân viên quản lý đơn hàng</li>
              </ul>
            </div>

          </div>
          <div className = {styles.infoContainer}>
            <div className = {styles.infoRight}>
                <ul>
                  <li><BsFillTelephoneFill /> Số điện thoại</li>
                  <li className ={styles.infoTel}>0908246578</li>
                </ul>
                <button className ={styles.infoButton1}>Cập nhật</button>
            </div>
            <div className = {styles.infoRight}>
                <ul>
                  <li><MdOutlineMail />Địa chỉ email</li>
                  <li className ={styles.infoTel}>nguyenvana@bkbook.com</li>
                </ul>
                <button  className ={styles.infoButton2}>Cập nhật</button>
            </div>
            <div className = {styles.infoRight}>
                <ul>
                  <li><FaHome /> Địa chỉ </li>
                  <li className ={styles.infoTel}>
                    268 Lý Thường Kiệt, phường 14, quận 10, TPHCM.
                  </li>
                </ul>
                <button className ={styles.infoButton3}>Cập nhật</button>
            </div>
            <div className = {styles.infoRight}>
                <ul>
                  <li><RiLockPasswordFill />Thiết lập mật khẩu</li>
                </ul>
                <button className ={styles.infoButton4}>Đổi mật khẩu</button>
            </div>
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
      <Thongtincanhan/>
      <Footer/>
    </React.Fragment>
  );
}
export default App;