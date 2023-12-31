import '../Styles/Xemchitiet.css';
import React, { useState } from 'react';
import Header from '../Component/logHeader.js';
import Footer from '../Component/Footer.js';
import Sidebar from '../Component/sideBar.js';
import Table from 'react-bootstrap/Table';
import codethieunhi from '../images/300baicodethieunhi.jpg';
const ViewDetails = () =>{
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
  return(
    <div className ="container-details">
      <h2>Lịch sử mua hàng</h2>
      <button className ="button-details-1">Quay lại</button>
      <div className="mid-details">
        <div className="mid-details-left">
          <img src={codethieunhi}/>
        </div>
        <div className="mid-details-right">
          <button className ="button-details-2" >
            Chờ thanh toán
          </button>
          <div>Tên sách: 300 bài code thiếu nhi</div>
          <div>Thời gian đặt mua: 02:17 26/10/2023</div>
          <div>Vui lòng thanh toán cho sản phẩm này trước 23:59 31/10/2023</div>
          <div className = "mid-details-right-bottom">
            <button className ="button-details-3">
              Thanh toán
            </button>
            <button className="button-details-4" onClick={openModal}>
              Hủy đơn
            </button>
          {isModalOpen && (
          <div className="modal-window">
            <div className="modal-content">
            <h3>Bạn có muốn hủy đơn?</h3>
            <div className ="modal-button">
            <button className ="modal-button-1" onClick={openSecondModal}>Có</button>
            <button className ="modal-button-2" onClick={closeModal}>Không</button>
            </div>
          </div>
        </div>
        )}
        {isSecondModalOpen && (
        <div className="modal-window">
          <div className="modal-content-2">
            <h4>Đã gửi yêu cầu hủy thành công</h4>
            <button className="modal-button-3" onClick={closeModal}>
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
      <Header/>
      <Sidebar/>
      <ViewDetails />
      <Footer/>
    </React.Fragment>
  );
}
export default App;