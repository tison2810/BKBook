import React from 'react';
import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
import { Product } from './Trangchu.js';


import styles from '../Styles/Giohang.module.css';
import increase from '..//images/increase.svg';
import decrease from '../images/decrease.svg';
import namiya from '../images/namiya.jpg';
import garbageDump from '../images/garbagedump.png';
import nxc1ct from '../images/nxc1ct.jpg';
import vncncd from '../images/vncncd.jpg';
import yThien from '../images/yThien.jpg';
import osho from '../images/osho-tu-ton.jpg';
import toancc from '../images/toancc.webp';
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
    },
    {
        imgSrc:osho,
        name:"Tự tôn",
        author:"Osho",
        publisher:"NXB Phương Đông",
        price:"99.000",
        quantity:"1",
    }


]

function ProductInCart(props) {
    let sumPrice = props.price * props.quantity;
    sumPrice = sumPrice.toFixed(3);

    return (
        <div className={styles.productInCart}>
            <div className={styles.productInCartName}>
                <div className={styles.productInCartImage}>
                    <img src={props.imgSrc} alt={props.name} />
                </div>
                <div className={styles.productInCartInfo}>
                    <p>{props.name}</p>
                    <p><span>Tác giả: </span><span>{props.author}</span></p>
                    <p>{props.publisher}</p>
                </div>
            </div>
            <div className={styles.productInCartSinglePrice}>{props.price}<sup>đ</sup></div>
            <div className={styles.productInCartQuantity}>
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
            <div className={styles.productInCartSumPrice}>
                {sumPrice}<sup>đ</sup>
            </div>
            <div className={styles.garbageDump}>
                <form>
                    <button className={styles.garbageDumpButton} type="button">
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
    <div className={styles.productsInCart}>
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
        {/* <div className={styles.cart-header">
            <p>Giỏ hàng</p>
        </div> */}
        <div className={styles.listProductInCart}>
            <div className={styles.listProductInCartHeader}>
                <span>Sản phẩm</span>
                <span>Đơn giá</span>
                <span>Số lượng</span>
                <span>Thành tiền</span>
            </div>
            {productsInCart}
        </div>
    </div>
    );
}

function OrderInfo(props) {
    return (
        <div className={styles.orderInfo}>
            <div className={styles.customName}>
                <span className={styles.orderInfoTitle}>Họ và tên:</span>
                <span className={styles.customNameValue}>{props.cusName}</span>
            </div>
            <div className={styles.customAddress}>
                <span className={styles.orderInfoTitle}>Địa chỉ:</span>
                <span className={styles.customAddressValue}>{props.cusAddress}</span>
            </div>
            <div className={styles.customPhone}>
                <span className={styles.orderInfoTitle}>SĐT:</span>
                <span className={styles.customPhoneValue}>{props.phone}</span>
            </div>
            <div className={styles.totalPrice}>
                <span className={styles.orderInfoTitle}>Tổng giá:</span>
                <span className={styles.totalPriceValue}>{props.totalPrice.toFixed(3)}<sup>đ</sup></span>
            </div>
            <div className={styles.orderButton}>
                <form>
                    <button className={styles.adjustInfomation} type="button">Sửa thông tin</button>
                </form>
                <form>
                    <button className={styles.payment} type="button">Thanh toán</button>
                </form>
            </div>
        </div>
    );
}


function OtherBook () {
    return (
<div className={styles.otherBook}>
    <div className={styles.otherBookHeader}>
        <p>Các sản phẩm khác</p>
    </div>
    <div className={styles.otherBookList}>
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
        <div className={styles.subBar}>
            {/* <OtherBook/> */}
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
            <div className={styles.bodyGioHang}>
                <ListProductInCart/>
                <SubBar/>
            </div>
            <Footer/>
        </React.Fragment>

    );
}
export default Giohang;