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
                    <div className="logo">
                        <img className="logo-bkbook" src={logo} alt="BKBOOK" />
                        <h2>BKBOOK</h2>
                    </div>
                    <input className= "search-bar" type="text" placeholder="Nhập tên sách, tác giả bạn muốn tìm" />
                    <Link className="cart" to='/giohang'>
                        <img src={cart} alt="cart" />
                    </Link>
                    <a className="star" href="#">
                        <img src={star} alt="star" />
                    </a>
                    <ul>
                        <li><Link to='/'>TRANG CHỦ</Link></li>
                        <li><a href="#">DANH MỤC</a></li>
                        <li><Link to='/dangnhap'>TÀI KHOẢN</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header;