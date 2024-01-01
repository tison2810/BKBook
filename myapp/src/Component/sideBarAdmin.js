import React from 'react';
import styles from './sideBar.module.css';
function Sidebar () {
    return (
        <div className={styles.sidebar}>
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