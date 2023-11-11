import React from 'react';
import './Footer.css';
import zlplogo from '../images/zlpaylogo.png';
import mmlogo from '../images/momologo.svg';
import pplogo from '../images/paypallogo.svg';
import payment from '../images/payment.jpg';

function Footer() {
    return (
        <footer>
            <div>
                <div className="grid-table1">
                    <h3 className="grid-table-heading"> Về chúng tôi</h3>
                    <ul className="list1">
                        <li className="grid-table-item"><a href="#">Giới thiệu về BKBOOK</a></li>
                        <li className="grid-table-item"><a href="#">Các sản phẩm của BKBOOK</a></li>
                    </ul>
                </div>
                <div className="grid-table2">
                    <h3 className="grid-table-heading">Phương thức thanh toán</h3>
                    <ul className="list2">
                        <li className="grid-table-item">
                            <img src={mmlogo} alt="Momo" />
                        </li>
                        <li className="grid-table-item">
                            <img src={zlplogo} alt="Zalopay" />
                        </li>
                        <li className="paypal">
                            <img src={pplogo} alt="Paypal" />
                        </li>
                        <li className="grid-table-item">
                            <img src={payment} alt="Payment" />
                        </li>
                    </ul>                    
                </div>
                <div className="grid-table3">
                    <h3 className="grid-table-heading">Thông tin liên hệ</h3>
                    <ul className="list3">
                        <li className="grid-table-item">Email: bkbook@hcmut.edu.vn</li>
                        <li className="grid-table-item">SĐT: 1017-0958</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;