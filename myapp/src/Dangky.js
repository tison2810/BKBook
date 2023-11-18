import React from 'react';
import { Link} from 'react-router-dom';

import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import Dangnhap from './Dangnhap.js';
import './Dangky.css';

function SignupTitle() {
    return (
        <div className='signup-title'>
            <p> ĐĂNG KÝ </p>
        </div>
    );
}

function SignupForm() {
    return (
        <div className='signup-form'>
            <p>
            Đăng ký tài khoản
            </p>
            <input className='username-input' type="text" placeholder='Hãy nhập tên đăng nhập'/>
            <input className='password-input' type="text" placeholder='Nhập mật khẩu'/>
            <input className='password-re-input' type="text" placeholder='Nhập lại mật khẩu'/>
            <input className='phone-input' type="text" placeholder='Nhập số điện thoại của bạn'/>
            <form>
                <button className="signup-button" type="button">Đăng ký</button>
            </form>
        </div>
    );
}

function LoginWelcome() {
    return (
        <div className='login-welcome'>
            <h2>
                Bạn đã từng đến đây?
            </h2>
            <p>
                Hãy đăng nhập tại đây.
            </p>
            <div className="login-button">
                <Link to="/Dangnhap" className='login-link'>
                    ĐĂNG NHẬP
                </Link>
            </div>
        </div>
    );
}

function DisplaySignupForm() {
    return (
        <div className='display-signup-form'>
            <SignupForm/>
            <LoginWelcome/>
        </div>
    );
}
function Dangky() {
    return (
        <div>
            <Header/>
            <SignupTitle/>
            <DisplaySignupForm/>
            <Footer/>
        </div>
    );
}
export default Dangky;