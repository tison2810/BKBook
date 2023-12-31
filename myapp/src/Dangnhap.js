import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useAuth } from './AuthContext';

import './Dangnhap.css';

function LoginTitle() {
    return (
        <div className='login-title'>
            <p> ĐĂNG NHẬP </p>
        </div>
    );
}

function LoginForm() {

    const { handleLogin } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3001/api/login', formData);
          console.log(response.data);
    
          // Xác thực thành công, chuyển hướng đến trang chủ
          if (response.status === 200) {
            handleLogin({ username: formData.username });
            navigate('/');
          }
        } catch (error) {
          console.error('Đã có lỗi xảy ra', error);
          setIsModalOpen(true);
          setModalContent('Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại!');
        }
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };

    return (
        <div className='login-form'>
            <p>
            Chào mừng bạn trở lại!<br/>
            Hãy đăng nhập ngay bây giờ.
            </p>
            <form onSubmit={handleSubmit}>
            <input className='username-input' name='username' 
            type="text" placeholder='Tên đăng nhập'
            onChange={handleChange}/>
            <input className='password-input' name='password' 
            type="password" placeholder='Mật khẩu'
            onChange={handleChange}/>
            <div className="sub">
                <div className='remember-user-input'>
                    <input type="checkbox" id="remember-user"/>
                    <label htmlFor="remember-user">Ghi nhớ tài khoản</label>
                </div>
                <a href="#">Quên mật khẩu?</a>
            </div>
                <button className="login-button" type="submit">Đăng nhập</button>
            </form>
            <Modal
            className='login-popup'
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel='Thông báo'
            appElement={document.getElementById('root')}
            >
            <div className='popup-content'>{modalContent}</div>
            <button onClick={closeModal}>Đóng</button>
            </Modal>
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