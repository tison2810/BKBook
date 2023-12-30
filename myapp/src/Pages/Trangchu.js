//import logo from './logo.svg';
import React from 'react';

import '../Styles/Trangchu.css';
import namiya from '../images/namiya.jpg';
import nxc1ct from '../images/nxc1ct.jpg';
import vncncd from '../images/vncncd.jpg';
import yThien from '../images/yThien.jpg';
import osho from '../images/osho-tu-ton.jpg';
import toancc from '../images/toancc.webp';
import grammar from '../images/grammar.webp';
import ketoanviahe from '../images/ktvh.png';
import nonggian from '../images/nglbn.webp';
import tddn from '../images/tddn.jpg';
import tiengnguoitrongvan from '../images/tiengnguoitrongvan.jpg';
import voting from '../images/voting.png';
import background from '../images/background.jpg';
// import Header from '../Component/logHeader.js';
import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
import Sideboard from '../Component/Sideboard.js';

function Product(props) {
  return (
    <div className="product">
      <img className = "product-img" src={props.imgSrc} alt = {props.name}/>
      <p className='book-title'>{props.name}</p>
      <p className="p-voting">{props.vote}<span><img className="star-voting" src={voting} /></span></p>
      <p>{props.price}<sup>đ</sup></p>
    </div>
  )
}

function Label(props) {
  return (
    <div className={props.clName}>
      <p className="text-label">{props.text}</p>
    </div>
  )
}

const listProducts =
<ul className="list-products">
  <li className="list-products-ele">
    <Product
      imgSrc={yThien}
      name = "Ỷ thiên đồ long ký"
      vote = "5/5"
      price = "25.000"
    />
  </li>
</ul>

const content = 
<div className='content'>
  {/* <div className='fiter-type'>
    <p> Danh mục</p>
    <ul>
      <li>Truyện ngắn</li>
      <li>Truyện dài</li>
      <li>Tiểu thuyết</li>
      <li>Truyện tranh</li>
      <li>Kinh dị</li>
      <li>Trinh thám</li>
      <li>Ngôn tình</li>
      <li>Sách tham khảo</li>
      <li>Sách ngoại ngữ</li>
      <li>Sách giáo khoa</li>
    </ul>
  </div> */}
  {listProducts}
</div>

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Sideboard/>
      <Footer/>
    </React.Fragment>
  );
}
export default App;
export { Product };