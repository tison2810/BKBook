import React from 'react';
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import { Link } from 'react-router-dom';

import './Dangnhap.css';

function LoginTitle() {
    return (
        <div className='login-title'>
            <p> ĐĂNG NHẬP </p>
        </div>
    );
}

function LoginForm() {
    return (
        <div className='login-form'>
            <p>
            Chào mừng bạn trở lại!<br/>
            Hãy đăng nhập ngay bây giờ.
            </p>
            <input className='username-input' type="text" placeholder='Tên đăng nhập'/>
            <input className='password-input' type="text" placeholder='Mật khẩu'/>
            <div className="sub">
                <div className='remember-user-input'>
                    <input type="checkbox" id="remember-user"/>
                    <label htmlFor="remember-user">Ghi nhớ tài khoản</label>
                </div>
                <a href="#">Quên mật khẩu?</a>
            </div>
            <form>
                <button className="login-button" type="button">Đăng nhập</button>
            </form>
        </div>
    );
}

function SignUpWelcome() {
    return (
        <div className='signup-welcome'>
            <h2>
                Bạn chưa có tài khoản?
            </h2>
            <p>
                Hãy kết nối với BKBOOK ngay tại đây.
            </p>
            <Link className="signup-button" to='/dangky'>Tạo tài khoản</Link>
        </div>
    );
}

function DisplayLoginForm() {
    return (
        <div className='display-login-form'>
            <SignUpWelcome/>
            <LoginForm/>
        </div>
    );
}
function Dangnhap() {
    return (
        <React.Fragment>
            <Header/>
            <LoginTitle/>
            <DisplayLoginForm/>
            <Footer/>
        </React.Fragment>
    );
}
export default Dangnhap;