import React from 'react';
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

=======
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

=======
>>>>>>> e88667e29b4cc1193f67e0357ab6b69faf6cd17c
>>>>>>> 35140d482698f0b76337461a335281a4dceb1169

import './Dangnhap.css';

function LoginTitle() {
    return (
        <div className='login-title'>
            <p> ĐĂNG NHẬP </p>
        </div>
    );
}

function LoginForm() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 35140d482698f0b76337461a335281a4dceb1169
    const navigate = useNavigate();

    const handleButtonClick = () => {
      // Chuyển đến trang '/homepagelogged'
      navigate('/homepagelogged');
    };
<<<<<<< HEAD
=======
=======
>>>>>>> e88667e29b4cc1193f67e0357ab6b69faf6cd17c
>>>>>>> 35140d482698f0b76337461a335281a4dceb1169
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
<<<<<<< HEAD
                <button className="login-button" onClick={handleButtonClick} type="button">Đăng nhập</button>
=======
<<<<<<< HEAD
                <button className="login-button" onClick={handleButtonClick} type="button">Đăng nhập</button>
=======
                <button className="login-button" type="button">Đăng nhập</button>
>>>>>>> e88667e29b4cc1193f67e0357ab6b69faf6cd17c
>>>>>>> 35140d482698f0b76337461a335281a4dceb1169
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