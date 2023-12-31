import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import star from '../images/Star.svg';
import cart from '../images/Cart.svg';
import logo from '../images/logoBK.png';

function Header() {
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
                        <li><Link to='/giohang'>Giỏ hàng</Link></li>
                        <li><Link to='/'>Yêu thích</Link></li>
                        <li><Link to='/'>Trang chủ</Link></li>
                        <li><Link to='/dangnhap'>Tài khoản</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header;