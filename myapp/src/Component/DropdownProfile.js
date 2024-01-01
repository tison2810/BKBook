import React from 'react'
import styles from './DropdownProfile.module.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const DropdownProfile = () => {
    const { handleLogout } = useAuth();


    return (
        <div className={styles.dropdown}>
            <ul className={styles.dropdowncontent}>
                <li><Link to='/personalBuy'>Thông tin tài khoản</Link></li>
                <li><Link to='/dangnhap' onClick={handleLogout}>Đăng xuất</Link></li>
            </ul>
        </div>
    )
}
export default DropdownProfile;