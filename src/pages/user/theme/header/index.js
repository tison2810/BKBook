import {memo,useState} from 'react';
import './style.scss';
// import {AiOutlineFacebook,AiOutlineInstagram,AiOutlineLinkedin,AiOutlineGlobal,AiOutlineUser,AiOutlineMail,AiOutlineShoppingCart}
//  from "react-icons/ai";
import {IoIosSearch} from "react-icons/io";
import {PiStar} from "react-icons/pi";
import {CiShoppingBasket} from "react-icons/ci"
import {Link} from "react-router-dom";
import{ROUTERS} from "utils/routers";

const Header = () =>{
  const [menus,setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Danh mục",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Tài khoản",
      path: "",
    },
  ])
  return (
    <div className = "container border-bottom">
        <div className = "row">
          <div className = "col-6">
            <div className = "header_left">
                <ul>
                  <li>
                    <img src="/logobk.png"/>
                  </li>
                  <li>
                    <p>BKBOOK</p>
                  </li>
                  <li>
                    <input
                    placeholder= "Nhập tên sách, tác giả bạn muốn tìm"
                    />
                  </li>
                </ul>
            </div>

          </div>
          <div className = "col-6">
            <div className="header_right">
              <div className ="header_right_left">
                 <ul>
                <li>
                  <Link to =""><CiShoppingBasket/></Link>
                </li>
                <li>
                  <Link to =""><PiStar/></Link>
                </li>
                </ul>
              </div>
              <div className ="header_right_right">
                <ul>
                {
                  menus?.map((menu,menuKey) => (
                    <li key ={menu.id} className = {menuKey === 1 ? "active1" : "active2"}>
                      <Link to ={menu?.path}>{menu?.name}</Link>
                    </li>
                  ))
                }
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default memo(Header)