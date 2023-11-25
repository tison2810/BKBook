import {memo} from 'react';
import {Link} from "react-router-dom";
import './style.scss';
import {AiOutlineFacebook,AiOutlineInstagram ,AiOutlineLinkedin} from "react-icons/ai";
import {PiCreditCardLight} from "react-icons/pi";
const Footer = () =>{
  return (
    <div className = "container2 border-top">
      <div className = "row">
          <div className = "col-lg-3">
            <div className = "footer-left">
              <h2>Về chúng tôi</h2>
              <ul>
                <li>Giới thiệu về BKBOOK</li>
                <li>Các sản phẩm của BKBOOK</li>
              </ul>
            </div>
          </div>
          <div className = "col-6">
            <div className ="footer-mid">
                <h2>Phương thức thanh toán</h2>
              <ul>
                <li className ="img1"><img src="/momo.jpg" /></li>
                <li className ="img2"><img src="/zalopay.png"/></li>
                <li className ="img3"><img src="/paypal.png"/></li>
                <li className ="img4"><PiCreditCardLight/></li>
              </ul>

            </div>
          </div>
          <div className = "col-lg-3">
          <div className = "footer-left">
              <h2>Liên hệ</h2>
              <ul>
                <li>Email:bkbook@hcmut.edu.vn</li>
                <li>SĐT: 1017-0958</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
};
export default memo(Footer)