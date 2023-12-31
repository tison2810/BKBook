import React from 'react';
import './sideBar.css';
function Sidebar () {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="#">Thông tin tài khoản</a></li>
                <li><a href="#">Xác nhận đơn hàng</a></li>
                <li><a href="#">Theo dõi đơn hàng</a></li>
                <li><a href="#">Tìm kiếm sản phẩm</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;