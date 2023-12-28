import React from 'react';
import './Header.css';
import logo from '../images/logoBK.png';
import { BsBell } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsChat } from "react-icons/bs";

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
                    <ul className="personalmenu">
                        <li>
                        <BsBell />
                        </li>
                        <li>
                        <BsPerson />
                        </li>
                        <li>
                        <BsChat />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header;