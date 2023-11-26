import React from 'react';
import './styles.css';

const Footer = ({ onAddClick, onDeleteClick, onUpdateClick }) => {
  return (
    <footer className="footer">
      <button onClick={onAddClick} className="footer-button">Thêm</button>
      <button onClick={onDeleteClick} className="footer-button">Xóa</button>
      <button onClick={onUpdateClick} className="footer-button">Cập nhật</button>
    </footer>
  );
};

export default Footer;