import React from 'react';
import { Link } from 'react-router-dom';
import './Sideboard.css';
function Sideboard(){
    return (
        <div className="sideboard">
            <div className="sideboard-ele">
            <p>Danh mục</p>
                <ul>
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
    );
}
export default Sideboard;