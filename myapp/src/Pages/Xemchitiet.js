import styles from '../Styles/Xemchitiet.module.css';
import React, { useState } from 'react';
import Header from '../Component/logHeader.js';
import Footer from '../Component/Footer.js';
import Sidebar from '../Component/sideBar.js';
import Table from 'react-bootstrap/Table';
import codethieunhi from '../images/300baicodethieunhi.jpg';
const ViewDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
    setIsModalOpen(false); // Đóng cửa sổ modal hiện tại
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSecondModalOpen(false);
  };
  return (
    <div className={styles.containerDetails}>
      <h2>Lịch sử mua hàng</h2>
      <button className={styles.buttonDetails_1}>Quay lại</button>
      <div className={styles.midDetails}>
        <div className={styles.midDetailsLeft}>
          <img src={codethieunhi} />
        </div>
        <div className={styles.midDetailsRight}>
          <button className={styles.buttonDetails_2} >
            Chờ thanh toán
          </button>
          <div>Tên sách: 300 bài code thiếu nhi</div>
          <div>Thời gian đặt mua: 02:17 26/10/2023</div>
          <div>Vui lòng thanh toán cho sản phẩm này trước 23:59 31/10/2023</div>
          <div className={styles.midDetailsRightBottom}>
            <button className={styles.buttonDetails_3}>
              Thanh toán
            </button>
            <button className={styles.buttonDetails_4} onClick={openModal}>
              Hủy đơn
            </button>
            {isModalOpen && (
              <div className={styles.modalWindow}>
                <div className={styles.modalContent}>
                  <h3>Bạn có muốn hủy đơn?</h3>
                  <div className={styles.modalButton}>
                    <button className={styles.modalButton_1} onClick={openSecondModal}>Có</button>
                    <button className={styles.modalButton_2} onClick={closeModal}>Không</button>
                  </div>
                </div>
              </div>
            )}
            {isSecondModalOpen && (
              <div className={styles.modalWindow}>
                <div className={styles.modalContent_2}>
                  <h4>Đã gửi yêu cầu hủy thành công</h4>
                  <button className={styles.modalButton_3} onClick={closeModal}>
                    Quay lại trang chủ
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
function App() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <ViewDetails />
      <Footer />
    </React.Fragment>
  );
}
export default App;