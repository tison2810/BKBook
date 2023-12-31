import React from 'react';
import { Link} from 'react-router-dom';

import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
//import Dangnhap from './Dangnhap.js';
import './Dangky.css';

import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

function SignupTitle() {
    return (
        <div className='signup-title'>
            <p> ĐĂNG KÝ </p>
        </div>
    );
}

function SignupForm() {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
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
        const response = await axios.post('http://localhost:3001/api/signup', formData);
        console.log(response.data); 
        setIsModalOpen(true);
        setModalContent('Đăng ký thành công!');
      } catch (error) {
        console.error('Đã có lỗi xảy ra', error);
        setIsModalOpen(true);
        setModalContent('Đã có lỗi xảy ra. Vui lòng thử lại!');
      }
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setModalContent('');
    };
  
    return (
      <div className='signup-form'>
        <p>Đăng ký tài khoản</p>
        <form onSubmit={handleSubmit}>
          <input
            className='username-input'
            name='username'
            type='text'
            placeholder='Hãy nhập tên đăng nhập'
            onChange={handleChange}
          />
          <input
            className='password-input'
            name='password'
            type='password'
            placeholder='Nhập mật khẩu'
            onChange={handleChange}
          />
          <input
            className='password-re-input'
            name='confirmPassword'
            type='password'
            placeholder='Nhập lại mật khẩu'
            onChange={handleChange}
          />
          <input
            className='phone-input'
            name='phoneNumber'
            type='text'
            placeholder='Nhập số điện thoại của bạn'
            onChange={handleChange}
          />
          <button className='signup-button' type='submit'>
            Đăng ký
          </button>
        </form>
        <Modal
        className='signup-popup'
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