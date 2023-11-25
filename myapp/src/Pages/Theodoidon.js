import '../Styles/Theodoidon.css';
import React from 'react';
import Header from '../Component/logHeader.js';
import Footer from '../Component/Footer.js';
import Sidebar from '../Component/sideBarAdmin.js';
import Table from 'react-bootstrap/Table';

function Theodoidon(){
    return (
        <React.Fragment>
          <Header />
          <Sidebar />
          <h1>Theo dõi đơn hàng</h1>
          <input className= "searchbar" type="text" placeholder="Nhập mã đơn hàng cần tìm" />
          <Footer />
        </React.Fragment>
      );
}

export default Theodoidon