import {memo,useState} from 'react'
import './style.scss';
import {ROUTERS} from "utils/routers";
import {Link} from "react-router-dom";
import {LiaStarSolid} from "react-icons/lia"
import {PiCreditCardLight} from "react-icons/pi";
import {PiStar} from "react-icons/pi";
import {CiShoppingBasket} from "react-icons/ci"
const SearchPage = () => {
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
  const [numbers,setNumbers] = useState([
    {
      name: "1",
      path: ""
    },
    {
      name: "2",
      path: ""
    },
    {
      name: "3",
      path: "",
    },
    {
      name: "4",
      path: "",
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
                      <li key ={menu.id} className = "active2">
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
      <div className = "tim_kiem">
        <div className = "mid-top">
          <h1>KẾT QUẢ TÌM KIẾM VỚI: NGUYỄN NHẬT ÁNH (40 kết quả)</h1>
        </div>
        <div className ="mid-mid">
          <div className = "mid-1">
            <div className = "mid-1-1">
              <div className = "mid-1-2">
                <img src="/p16.png" alt=""/>
              </div>
              <div className = "mid-1-3">
                <p>
                  Có hai con mèo ngồi bên..
                </p>
                <p>
                  4.5/5<sup><LiaStarSolid/></sup>
                </p>
                <p>
                  90.000<sup>vnd</sup>
                </p>
              </div>
            </div>
            <div className = "mid-1-1">
            <div className = "mid-1-2">
                <img src="/p17.png" alt=""/>
              </div>
              <div className = "mid-1-3">
                <p>
                  Cho tôi xin một vé đi tuổi..
                </p>
                <p>
                  5/5<sup><LiaStarSolid/></sup>
                </p>
                <p>
                  45.000<sup>vnd</sup>
                </p>
              </div>
            </div>
            <div className = "mid-1-1">
            <div className = "mid-1-2">
                <img src="/p18.png"alt=""/>
              </div>
              <div className = "mid-1-3">
                <p>
                  Con chó nhỏ mang giỏ hoa..
                </p>
                <p>
                  4.2/5<sup><LiaStarSolid/></sup>
                </p>
                <p>
                  80.000<sup>vnd</sup>
                </p>
              </div>
            </div>
            <div className = "mid-1-1">
            <div className = "mid-1-2">
                <img src="/p19.png"alt=""/>
              </div>
              <div className = "mid-1-3">
                <p>
                  Con chim xanh biếc bay về
                </p>
                <p>
                  4.7/5<sup><LiaStarSolid/></sup>
                </p>
                <p>
                  120.000<sup>vnd</sup>
                </p>
              </div>
            </div>
            <div className = "mid-1-1">
            <div className = "mid-1-2">
                <img src="/p20.png"alt=""/>
              </div>
              <div className = "mid-1-3">
                <p>
                  Kính vạn hoa - Tập 3
                </p>
                <p>
                  4.9/5<sup><LiaStarSolid/></sup>
                </p>
                <p>
                  73.000<sup>vnd</sup>
                </p>
              </div>
            </div>
          </div>
          <div className = "mid-2">
          <div className = "mid-2-1">
              <div className = "mid-2-2">
                <img src="/p21.png"alt=""/>
              </div>
              <div className = "mid-2-3">
                <p>
                  Làm bạn với bầu trời
                </p>
                <p>
                  4.3/5<sup><LiaStarSolid/></sup>
                </p>
                <p>
                  88.000<sup>vnd</sup>
                </p>
              </div>
            </div>
            <div className = "mid-2-1">
            <div className = "mid-2-2">
                <img src="/p22.png" alt=""/>
              </div>
              <div className = "mid-2-3">
                <p>
                  Bong bóng lên trời (2022)
                </p>
                <p>
                  4.5/5<sup><LiaStarSolid/></sup>
                </p>
                <p>
                  78.000<sup>vnd</sup>
                </p>
              </div>
            </div>
            <div className = "mid-2-1">
            <div className = "mid-2-2">
                <img src="/p23.png" alt=""/>
              </div>
              <div className = "mid-2-3">
                <p>
                  Hạ đỏ
                </p>
                <p>
                  5/5<sup><LiaStarSolid/></sup>
                </p>
                <p>
                  40.000<sup>vnd</sup>
                </p>
              </div>
            </div>
            <div className = "mid-2-1">
            <div className = "mid-2-2">
                <img src="/p24.png" alt=""/>
              </div>
              <div className = "mid-2-3">
                <p>
                  Thiên thần nhỏ của tôi
                </p>
                <p>
                  4.3/5<sup><LiaStarSolid/></sup>
                </p>
                <p>
                  29.000<sup>vnd</sup>
                </p>
              </div>
            </div>
            <div className = "mid-2-1">
            <div className = "mid-2-2">
                <img src="/p25.png" alt=""/>
              </div>
              <div className = "mid-2-3">
                <p>
                  Hoa hồng xứ khác
                </p>
                <p>
                  4.0/5<sup><LiaStarSolid/></sup>
                </p>
                <p>
                  70.000<sup>vnd</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className = "mid-bot">
          <ul>
            {
              numbers?.map((number,numberKey) => (
                  <li key ={number.id} className = {numberKey === 0 ? "active1" : "active2"}>
                  <button>{number?.name}</button>
                  </li>
                ))
            }
          </ul>
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
export default memo(SearchPage)