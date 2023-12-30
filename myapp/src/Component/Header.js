import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Header.css';
import star from '../images/Star.svg';
import cart from '../images/Cart.svg';
import logo from '../images/logoBK.png';

function Header() {
    const { loggedIn, userInfo } = useAuth();

    console.log('loggedIn:', loggedIn);
    console.log('userInfo:', userInfo);
    
    return (
        <header>
            <nav>
                <div className="menu">
                    <div className="logo">
                        <img className="logo-bkbook" src={logo} alt="BKBOOK" />
                        <h2>BKBOOK</h2>
                    </div>
                    <input className= "search-bar" type="text" placeholder="Nhập tên sách, tác giả bạn muốn tìm" />
                    {/* <Link className="cart" to='/giohang'>
                        <img src={cart} alt="cart" />
                    </Link>
                    <a className="star" href="#">
                        <img src={star} alt="star" />
                    </a> */}
                    <ul>
                        <li><Link to='/giohang'>GIỎ HÀNG</Link></li>
                        <li><Link to='/'>YÊU THÍCH</Link></li>
                        <li><Link to='/'>TRANG CHỦ</Link></li>
                        <li>
                            {loggedIn ? (
                                <Link to='/'> TÀI KHOẢN</Link>
                            ) : (
                                <Link to='/dangnhap'>ĐĂNG NHẬP</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header;