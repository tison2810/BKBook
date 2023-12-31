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
                    <div className="logoo">
                        <img className="logo-bkbook" src={logo} alt="BKBOOK" />
                        <h2>BKBOOK</h2>
                    </div>
                    {/* <Link className="cart" to='/giohang'>
                        <img src={cart} alt="cart" />
                    </Link>
                    <a className="star" href="#">
                        <img src={star} alt="star" />
                    </a> */}
                    <ul>
<<<<<<< HEAD
                        <li><Link to='/giohang'>Giỏ hàng</Link></li>
                        <li><Link to='/'>Yêu thích</Link></li>
                        <li><Link to='/'>Trang chủ</Link></li>
                        <li><Link to='/dangnhap'>Tài khoản</Link></li>
=======
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
>>>>>>> 379d6f7ad345cfe15b355b898d100666526056c1
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header;