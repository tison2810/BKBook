import React from 'react';
import './sideBar.css';
function Sidebar () {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="#">Thông tin tài khoản</a></li>
                <li><a href="#">Lịch sử mua hàng</a></li>
                <li><a href="#">Kho voucher</a></li>
                <li><a href="#">Thông báo</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;