import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
import '../Styles/Xemsanpham.css';
import { FaShoppingCart } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { useAuth } from '../AuthContext.js';
import Modal from 'react-modal';

function fetchProductDetails(bookId, setProductDetails) {
  fetch(`http://localhost:3001/api/getProductDetails/${bookId}`)
    .then(response => response.json())
    .then(data => setProductDetails(data))
    .catch(error => console.error('Error fetching product details:', error));
}

function fetchProductReviews(bookId, setReviewDetails) {
  fetch(`http://localhost:3001/api/getProductReviews/${bookId}`)
  .then(response => response.json())
  .then(data => setReviewDetails(data))
  .catch(error => console.error('Error fetching product details:', error));
}

const ViewProduct = () =>{
  const {userInfo} = useAuth();
  const { bookId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [reviewDetails, setReviewDetails] = useState(null);
  const [count, setCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    fetchProductDetails(bookId, setProductDetails);
  }, [bookId]);
  useEffect(() => {
    fetchProductReviews(bookId, setReviewDetails);
  }, [bookId]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if(count > 0) setCount(count - 1);
  };
    const addToCart = () => {
    const data = {
      bookId: bookId,
      count: count,
      username: userInfo.username,
    };

    fetch('http://localhost:3001/api/addToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        console.log('Added to cart:', result);
        setIsModalOpen(true);
        setModalContent('Thêm vào giỏ hàng thành công!');
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
        setIsModalOpen(true);
        setModalContent('Đã có lỗi xảy ra. Vui lòng thử lại!');
      });
  };
  if (!productDetails) return null;
  let pricePerProduct = 0;
  if (productDetails.MucGiamGia == null || productDetails.MucGiamGia === 0) 
    pricePerProduct = productDetails.Gia;
  else
    pricePerProduct = productDetails.Gia*(1-productDetails.MucGiamGia/100);
  let totalPrice = pricePerProduct * count;
  totalPrice = totalPrice.toLocaleString('vi-VN');
  return(
  <div className ="con">
    <div className ="view_product">
      <div className = "view_product_top">
        <div className ="column-1">
          <>
          <img src = {`/images/${productDetails.Anh}`} alt=""/>
          </>
        </div>
        <div className ="column-2">
          <h2>
            {productDetails.Ten}
          </h2>
          <div>
            <p>Tác giả: <span className = "author">{productDetails.TacGia}</span></p>
            <p>Xuất xứ: <span className = "origin">Việt Nam</span></p>
            <p className ="comment"><a href = "#section1">
            <MdStar className="color-star"/>
            <MdStar className="color-star"/>
            <MdStar className="color-star"/>
            <MdStar className="color-star"/>
            <MdStarHalf className="color-star"/>
            {
              reviewDetails && reviewDetails.length > 0 ? (
                <p>({reviewDetails.length} đánh giá)</p>
              ) : (
                <p>(0) đánh giá</p>
              )
            }
            </a></p>
            {
            productDetails.MucGiamGia == null || productDetails.MucGiamGia === 0 ? (
            <div className="money-container">
              <p className="money-text-1">
              {productDetails.Gia} đ
              </p>
            </div>
            ) : (
            <div className="money-container">
              <p className="money-text-1">
              {(productDetails.Gia*(1-productDetails.MucGiamGia/100)).toLocaleString('vi-VN')} đ
              </p>
              <p className="money-text-2">
              <del>{productDetails.Gia.toLocaleString('vi-VN')} đ</del>
              </p>
              <p className="money-text-3">
              -{productDetails.MucGiamGia}%
              </p>
            </div>
             )
          }
            <div className ="info-container">
              <div className="info">Thông tin chi tiết</div>
              <div>Loại bìa: Bìa mềm</div>
              <div>Nhà xuất bản: {productDetails.NXB}</div>
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
            <>
            <button className = "view_button_1" onClick={() => addToCart(bookId, count, userInfo)} > 
            <FaShoppingCart/> Thêm vào giỏ hàng
            </button>
            <button className = "view_button_2">Mua ngay</button>
            </>
          </div>

        </div>
        <div className ="column-3">
          <div>
            <h2>Mô tả sản phẩm</h2>
            <div className ="describe-story">
            <p>{productDetails.MoTa}</p>
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
            {reviewDetails && reviewDetails.length > 0 ? (
            <>
            <p>
              <span className="comment-star1">{productDetails.DiemTrungBinh}</span>
              <span className="comment-star2">/5</span>
            </p>
            <p>
            <MdStar className="color-star" />
            <MdStar className="color-star" />
            <MdStar className="color-star" />
            <MdStar className="color-star" />
            <MdStarHalf className="color-star" />
            </p>
            <p>({reviewDetails.length} đánh giá)</p>
            <hr className = "line-seperate"></hr>
            {reviewDetails.map((review, index) => (
              <React.Fragment key={index}>
                <div className="set-name-comment">
                  {review.HoTen} {review.SoSao} <MdStar className="color-star" />
                </div>
                <div>{review.MoTa}</div>
                <hr className="line-seperate"></hr>
              </React.Fragment>
            ))}
            </>
            ) : (
            <p>Sản phẩm chưa có đánh giá nào.</p>
            )}
            </div>
            </div>
            
          </div>
      </div>

    </div>
    <Modal
        className="popup"
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Added to Cart Modal"
      >
        <div className='popup-content'>{modalContent}</div>
      </Modal>
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