import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sideboard.module.css';

function Sideboard() {
    return (
        <div>
            <div className={styles.searchBar}>
                <input className= {styles.searchInput} type="text" placeholder="Nhập tên sách, tác giả bạn muốn tìm" />
            </div>
            <div className={styles.sideboard}>
                <div className={styles.sideboardele}>
                    <ul>
                        <li>
                            <Link to="/">Tất cả</Link>
                        </li>
                        <li>
                            <Link to="/">Truyện ngắn</Link>
                        </li>
                        <li>
                            <Link to="/">Truyện dài</Link>
                        </li>
                        <li>
                            <Link to="/">Tiểu thuyết</Link>
                        </li>
                        <li>
                            <Link to="/">Truyện tranh</Link>
                        </li>
                        <li>
                            <Link to="/">Sách tham khảo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Sideboard;