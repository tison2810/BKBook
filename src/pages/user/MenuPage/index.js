import {memo,useState} from 'react'
import './style.scss';
import{ROUTERS} from "utils/routers";
import {Link} from "react-router-dom";
import {LiaStarSolid} from "react-icons/lia"
import {BsArrowRightCircle} from "react-icons/bs"
import {IoIosSearch} from "react-icons/io";
import {PiStar} from "react-icons/pi";
import {CiShoppingBasket} from "react-icons/ci"
import {PiCreditCardLight} from "react-icons/pi";
const MenuPage = () =>{
  const [menus,setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Danh mục",
      path: ROUTERS.USER.MENU,
    },
    {
      name: "Tài khoản",
      path: "",
    },
  ])
  const [menuss,setMenuss] = useState([
    {
      name: "Thể loại",
      path: "ROUTERS.USER.CATEGORY"
    },
    {
      name: "Tác giả",
      path: "ROUTERS.USER.AUTHOR"
    },
    {
      name: "Năm xuất bản",
      path: "ROUTERS.USER.PUBLISHED_YEAR",
    },
    {
      name: "Nhà xuất bản",
      path: "ROUTERS.USER.PUBLISHER",
    },
  ])
  return (
    <>
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
      <div className = "danh_muc">
        <div className = "row">
          <div className = "col-2">
            <div className ="menu">
              <div className = "menu_top">
                <img src ="/icon10.png"/>
                <h1>Danh mục</h1>
              </div>
              <div className = "menu_bot">
                <ul>
                  {
                    menuss?.map((menuss,menussKey) => (
                        <li key ={menuss.id} className = {menussKey === 0 ? "active1" : "active2"}>
                          <Link to ={menuss?.path}>{menuss?.name}</Link>
                        </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className ="col-8">
            <div className = "mid_1">
              <div className ="midchild-1">
                <div className = "midchild_top1">
                  <h1>Tình cảm - Romance</h1>
                  <h2>Xem tất cả sản phẩm</h2>
                </div>
                <div className = "midchild_bot1">
                    <div className ="d1-1">
                      <div className = "d1-2">
                        <img src= "/p1.png"/>
                      </div>
                      <div className = "d1-3">
                        <p>Hôm nay tôi thất tình</p>
                        <p>5/5<sup><LiaStarSolid/></sup></p>
                        <p><del>86.000<sup>vnd</sup></del> 60000<sup>vnd</sup></p>
                      </div>
                    </div>
                    <div className ="d1-1">
                      <div className = "d1-2">
                        <img src= "/p2.png"/>
                      </div>
                      <div className = "d1-3">
                        <p>Không tự khinh bỉ không t..</p>
                        <p>5/5<sup><LiaStarSolid/></sup></p>
                        <p>69.000<sup>vnd</sup></p>
                      </div>
                    </div>
                    <div className ="d1-1">
                    <div className = "d1-2">
                        <img src= "/p3.png"/>
                      </div>
                      <div className = "d1-3">
                        <p>Những quy tắc trong tình y..</p>
                        <p>4.5/5 <sup><LiaStarSolid/></sup></p>
                        <p>111.000<sup>vnd</sup></p>
                      </div>
                    </div>
                    <div className ="d1-1">
                    <div className = "d1-2">
                      <img src= "/p4.png"/>
                      </div>
                      <div className = "d1-3">
                        <p>Cách để yêu 1 người</p>
                        <p>4.8/5<sup><LiaStarSolid/></sup></p>
                        <p>67.000<sup>vnd</sup></p>
                      </div>
                    </div>
                    <div className ="d1-1">
                    <div className = "d1-2">
                      <img src= "/p5.png"/>
                      </div>
                      <div className = "d1-3">
                        <p>Đừng yêu thầm nữa tỏ tình..</p>
                        <p>3.8/5<sup><LiaStarSolid/></sup></p>
                        <p>73.000<sup>vnd</sup></p>
                      </div>
                    </div>
                    <div className = "d1-icons">
                      <BsArrowRightCircle/>
                    </div>
                </div>
              </div>
              <div className = "midchild-2">
                <div className = "midchild_top2">
                    <h1>Kinh dị - Thrillers</h1>
                    <h2>Xem tất cả sản phẩm</h2>
                </div>
                <div className = "midchild_bot2">
                    <div className ="d1-1">
                      <div className = "d1-2">
                        <img src= "/p6.png"/>
                      </div>
                      <div className = "d1-3">
                        <p>Thôn tám mộ</p>
                        <p>4.9/5<sup><LiaStarSolid/></sup></p>
                        <p> 99.000<sup>vnd</sup></p>
                      </div>
                    </div>
                    <div className ="d1-1">
                      <div className = "d1-2">
                        <img src= "/p7.png"/>
                      </div>
                      <div className = "d1-3">
                        <p>Ngôi làng cổ mộ</p>
                        <p>4.2/5<sup><LiaStarSolid/></sup></p>
                        <p>120.000<sup>vnd</sup></p>
                      </div>
                    </div>
                    <div className ="d1-1">
                    <div className = "d1-2">
                        <img src= "/p8.png"/>
                      </div>
                      <div className = "d1-3">
                        <p>Người chết biết điều gì</p>
                        <p>5/5 <sup><LiaStarSolid/></sup></p>
                        <p>106.000<sup>vnd</sup></p>
                      </div>
                    </div>
                    <div className ="d1-1">
                    <div className = "d1-2">
                      <img src= "/p9.png"/>
                      </div>
                      <div className = "d1-3">
                        <p>Bóng ma trên phố Ginza</p>
                        <p>4.6/5<sup><LiaStarSolid/></sup></p>
                        <p>56.000<sup>vnd</sup></p>
                      </div>
                    </div>
                    <div className ="d1-1">
                    <div className = "d1-2">
                      <img src= "/p10.png"/>
                      </div>
                      <div className = "d1-3">
                        <p>Truyện đường rừng</p>
                        <p>4.7/5<sup><LiaStarSolid/></sup></p>
                        <p>35.000<sup>vnd</sup></p>
                      </div>
                    </div>
                    <div className = "d1-icons">
                      <BsArrowRightCircle/>
                    </div>
                    </div>
              </div>
              <div className ="but">
                <button className = "button-1">Xem thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </>
  )
}
export default memo(MenuPage)