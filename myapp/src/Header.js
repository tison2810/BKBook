import React from 'react';
import './styles.css';

const Header = ({ onSearchChange, onSearch }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand">BKBOOK</span>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      <button onClick={onSearch}>Tìm kiếm</button>
      </div>
      <img src="/avatar.png" alt="Avatar" className="avatar" />
    </header>
  );
};

export default Header;
