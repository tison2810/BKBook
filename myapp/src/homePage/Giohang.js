import './Giohang.css';
import React from 'react';
import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
import { Product } from './Trangchu.js';

import increase from './images/increase.svg';
import decrease from './images/decrease.svg';
import namiya from './images/namiya.jpg';
import garbageDump from './images/garbagedump.png';
import nxc1ct from './images/nxc1ct.jpg';
import vncncd from './images/vncncd.jpg';
import yThien from './images/yThien.jpg';
import osho from './images/osho-tu-ton.jpg';
import toancc from './images/toancc.webp';

let totalPrice = 0;
const productsInCartInput = [
    {
        imgSrc:namiya,
        name:"Điều kỳ diệu của tiệp tạm hóa Namiya",
        author:"Higashino Keigo",
        publisher:"NXB Hội Nhà Văn",
        price:"63.000",
        quantity:"2",
    },
    {
        imgSrc:vncncd,
        name:"Về nơi có nhiều cánh đồng",
        author:"Phan",
        publisher:"NXB Văn hóa - Văn nghệ",
        price:"150.000",
        quantity:"1",
    },
    {
        imgSrc:yThien,
        name:"Ỷ thiên đồ long ký",
        author:"Kim Dung",
        publisher:"NXB Văn học",
        price:"120.000",
        quantity:"1",
    }

]

function ProductInCart(props) {
    let sumPrice = props.price * props.quantity;
    sumPrice = sumPrice.toFixed(3);

    return (
        <div className="product-in-cart">
            <div className="product-in-cart-name">
                <div className="product-in-cart-image">
                    <img src={props.imgSrc} alt={props.name} />
                </div>
                <div className="product-in-cart-info">
                    <p>{props.name}</p>
                    <p><span>Tác giả: </span><span>{props.author}</span></p>
                    <p>{props.publisher}</p>
                </div>
            </div>
            <div className="product-in-cart-single-price">{props.price}<sup>đ</sup></div>
            <div className="product-in-cart-quantity">
                    <form>
                        <button type="button">
                            <img src={decrease} alt="decrease" />
                        </button>
                        <input type="text" id="input-quantity" value={props.quantity} />
                        <button type="button">
                            <img src={increase} alt="increase" />
                        </button>
                    </form>
            </div>
            <div className="product-in-cart-sum-price">
                {sumPrice}<sup>đ</sup>
            </div>
            <div className="garbage-dump">
                <form>
                    <button className="garbage-dump-button" type="button">
                        <img src={garbageDump} alt="garbage-dump" />
                    </button>
                </form>
            </div>
        </div>
    );
}
{/* <ProductInCart
            imgSrc={namiya}
            name="Điều kỳ diệu của tiệp tạm hóa Namiya"
            author="Higashino Keigo"
            publisher="NXB Hội Nhà Văn"
            price="63.000"
            quantity="2"
        /> */}
const productsInCart = (
    <div className="products-in-cart">
      {productsInCartInput.map((product, index) => {
        totalPrice += product.price * parseInt(product.quantity, 10);
        return (
            <ProductInCart
                key={index} 
                imgSrc={product.imgSrc}
                name={product.name}
                author={product.author}
                publisher={product.publisher}
                price={product.price}
                quantity={product.quantity}
            />
        );
      }
      )
      }
    </div>
  );

function ListProductInCart() {
    return (
    <div>
        <div className="cart-header">
            <p>Giỏ hàng</p>
        </div>
        <div className="list-product-in-cart">
            <div className="list-product-in-cart-header">
                <span>Sản phẩm</span>
                <span>Đơn giá</span>
                <span>Số lượng</span>
                <span>Thành tiền</span>
            </div>
            <div className="products-in-cart">
                {productsInCart}
            </div> 
        </div>
    </div>
    );
}

function OrderInfo(props) {
    return (
        <div className="order-info">
            <div className="custom-name">
                <span className="order-info-title">Họ và tên:</span>
                <span className="custom-name-value">{props.cusName}</span>
            </div>
            <div className="custom-address">
                <span className="order-info-title">Địa chỉ:</span>
                <span className="custom-address-value">{props.cusAddress}</span>
            </div>
            <div className="custom-phone">
                <span className="order-info-title">SĐT:</span>
                <span className="custom-phone-value">{props.phone}</span>
            </div>
            <div className="total-price">
                <span className="order-info-title">Tổng giá:</span>
                <span className="total-price-value">{props.totalPrice.toFixed(3)}<sup>đ</sup></span>
            </div>
            <div className="order-button">
                <form>
                    <button className="cod" type="button">Trả tiền mặt</button>
                </form>
                <form>
                    <button className="payment" type="button">Chuyển khoản</button>
                </form>
            </div>
        </div>
    );
}


function OtherBook () {
    return (
<div className="other-book">
    <div className="other-book-header">
        <p>Các sản phẩm khác</p>
    </div>
    <div className="other-book-list">
        <Product
            imgSrc={yThien}
            name = "Ỷ thiên đồ long ký"
            vote = "5/5"
            price = "25.000"
        />
        <Product
            imgSrc={vncncd}
            name = "Về nơi có nhiều cánh đồng"
            vote = "4.9/5"
            price = "150.000"
        />
        <Product
            imgSrc={namiya}
            name = "Điều kỳ diệu ở tiệm tạp hóa Namiya"
            vote = "5/5"
            price = "63.000"
        />
        <Product
            imgSrc={nxc1ct}
            name = "Ngày xưa có một chuyện tình"
            vote = "4.5/5"
            price = "99.000"
        />
    </div>
</div>
    );
}

function SubBar() {
    return (
        <div className="sub-bar">
            <OtherBook/>
            <OrderInfo
                cusName="Nguyễn Văn A"
                cusAddress="Đường 1, Phường 1, Quận 1, TP.HCM"
                phone="0123456789"
                totalPrice={totalPrice}
            />
        </div>
    );
}
function Giohang() {
    return (
        <React.Fragment>
            <Header/>
            <ListProductInCart/>
            <SubBar/>
            <Footer/>
        </React.Fragment>

    );
}
export default Giohang;