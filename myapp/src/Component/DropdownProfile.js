import React from 'react'
import styles from './DropdownProfile.module.css'
import { Link } from 'react-router-dom';
const DropdownProfile = () => {
    return (
        <div className={styles.dropdown}>
            <ul className={styles.dropdowncontent}>
                <li><Link to='/personalBuy'>Thông tin tài khoản</Link></li>
                <li><Link to=''>Đăng xuất</Link></li>
            </ul>
        </div>
    )
}
export default DropdownProfile;