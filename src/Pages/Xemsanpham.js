import React, { useState } from 'react';
import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
import '../Styles/Xemsanpham.css';
import { FaShoppingCart } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import yThien from '../images/yThien.jpg';

const ViewProduct = () =>{
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if(count > 0) setCount(count - 1);
  };
  const pricePerProduct = 54000;
  let totalPrice = pricePerProduct * count;
  totalPrice = totalPrice.toLocaleString('vi-VN');
  return(
  <div className ="con">
    <div className ="view_product">
      <div className = "view_product_top">
        <div className ="column-1">
          <>
          <img src = {yThien}/>
          </>
          {/* <>
            <button className = "view_button_1"> <FaShoppingCart/> Thêm vào giỏ hàng</button>
            <button className = "view_button_2">Mua ngay</button>
          </> */}
        </div>
        <div className ="column-2">
          <h2>
            HIỆP KHÁCH HÀNH (TRỌN BỘ)
          </h2>
          <div>
            <p>Tác giả: <span className = "author">Kim Dung</span></p>
            <p>Xuất xứ: <span className = "origin">Việt Nam</span></p>
            <p className ="comment"><a href = "#section1">
            <MdStar className="color-star"/>
            <MdStar className="color-star"/>
            <MdStar className="color-star"/>
            <MdStar className="color-star"/>
            <MdStarHalf className="color-star"/>
            (2 đánh giá)
            </a></p>
            <div className ="money-container">
              <p className ="money-text-1">
                54.000 đ
              </p>
              <p className ="money-text-2">
                <del>60000 đ</del>
              </p>
              <p className ="money-text-3">
                -10%
              </p>
            </div>
            <div className ="info-container">
              <div className="info">Thông tin chi tiết</div>
              <div>Loại bìa: Bìa mềm</div>
              <div>Nhà xuất bản: NXB văn học</div>
              <div>Hỗ trợ ebook: Không</div>
            </div>
            <div className ="info-container">
              <div className="info">Số lượng</div>
              <button onClick={handleDecrement}className ="info_button_1">-</button>
              <button className="info_button_2">{count}</button>
              <button onClick={handleIncrement}className="info_button_1">+</button>
            </div>
            <div className = "sum-money">
                Tạm tính: {totalPrice} <sup>đ</sup>
            </div>
            {/* <div>
              <button className ="proof-read">Đọc thử</button>
            </div> */}
            <>
            <button className = "view_button_1"> <FaShoppingCart/> Thêm vào giỏ hàng</button>
            <button className = "view_button_2">Mua ngay</button>
            </>
          </div>

        </div>
        <div className ="column-3">
          <div>
            <h1>Mô tả sản phẩm</h1>
            <div className ="describe-story">
            <p>Hiệp khách hành là một những tiểu thuyết võ hiệp của Kim Dung, được phát hành trên Minh báo năm 1965.</p>
            <p>
              Bộ truyện xoay quanh các cuộc phiêu lưu của Thạch Phá Thiên.
            </p>
            <p>
            Đây là câu chuyện hoàn toàn không có liên hệ với lịch sử, tuy nhiên đoán được bối cảnh bộ truyện sau thời Nguyên-Minh.
            </p>
            <div>
            </div>
            </div>
            {/* <button className="describe_button">
              Xem thêm
            </button> */}
          </div>
        </div>

      </div>
      <div id = "section1" className = "view_product_bot">
          <div>
            <div className = "comment-top">
            <div>
            <h3>Đánh giá sản phẩm</h3>
            <p>
              <span className ="comment-star1">4.5</span>
              <span className ="comment-star2">/5</span>
            </p>
            <p>
              <MdStar className="color-star"/>
              <MdStar className="color-star"/>
              <MdStar className="color-star"/>
              <MdStar className="color-star"/>
              <MdStarHalf className="color-star"/>
            </p>
            <p>
              (2 đánh giá)
            </p>
            </div>
              <div className = "number-comment">
                <div><MdStar className="color-star"/><MdStar className="color-star"/><MdStar className="color-star"/><MdStar className="color-star"/><MdStar className="color-star"/>1</div>
                <div><MdStar className="color-star"/><MdStar className="color-star"/><MdStar className="color-star"/><MdStar className="color-star"/>1</div>
                <div><MdStar className="color-star"/><MdStar className="color-star"/><MdStar className="color-star"/></div>
                <div><MdStar className="color-star"/><MdStar className="color-star"/></div>
                <div><MdStar className="color-star"/></div>
              </div>
            </div>
            <hr className = "line-seperate"></hr>
            <div className ="set-name-comment">
              Nguyễn Văn A 5 <MdStar className="color-star"/> 15:29, 15/08/2023
            </div>
            <div>
              Nội dung hay
            </div>
            <hr className = "line-seperate"></hr>
            <div className ="set-name-comment">
              Quách Thị B 4 <MdStar className="color-star"/> 22:34, 17/09/2023
            </div>
            <div>
              Sách hay nhưng bìa hơi bẩn
            </div>
          </div>
      </div>

    </div>
  </div>

  )
}
function App() {
  return (
    <React.Fragment>
      <Header/>
      <ViewProduct />
      <Footer/>
    </React.Fragment>
  );
}
export default App;