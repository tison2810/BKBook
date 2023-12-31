import '../Styles/Theodoidon.css';
import React from 'react';
import Header from '../Component/logHeader.js';
import Footer from '../Component/Footer.js';
import Sidebar from '../Component/sideBarAdmin.js';
import Table from 'react-bootstrap/Table';

function Timsanpham(){
    return (
        <React.Fragment>
          <Header />
          <Sidebar />
          <input className= "searchbar" type="text" placeholder="Nhập mã sản phẩm cần tìm" />
          <Footer />
        </React.Fragment>
      );
}

export default Timsanpham