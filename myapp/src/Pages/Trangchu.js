//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

import styles from '../Styles/Trangchu.module.css';
// import namiya from '../images/namiya.jpg';
// import nxc1ct from '../images/nxc1ct.jpg';
// import vncncd from '../images/vncncd.jpg';
// import yThien from '../images/yThien.jpg';
// import osho from '../images/osho-tu-ton.jpg';
// import toancc from '../images/toancc.webp';
// import grammar from '../images/grammar.webp';
// import ketoanviahe from '../images/ktvh.png';
// import nonggian from '../images/nglbn.webp';
// import tddn from '../images/tddn.jpg';
// import tiengnguoitrongvan from '../images/tiengnguoitrongvan.jpg';
import voting from '../images/voting.png';
// import background from '../images/background.jpg';
// import Header from '../Component/logHeader.js';
import Header from '../Component/Header.js';
// import Footer from '../Component/Footer.js';
import Sideboard from '../Component/Sideboard.js';
import { SearchProvider, useSearch } from '../SearchContext';

// const productsData = [
//   { imgSrc: toancc, name: 'Ỷ thiên đồ long ký',price: '25.000', vote: '5/5' },
//   { imgSrc: grammar, name: 'Ngữ pháp',price: '25.000', vote: '5/5' },
//   { imgSrc: nonggian, name: 'Ỷ thiên đồ long ký',price: '25.000', vote: '5/5' },
//   { imgSrc: tiengnguoitrongvan, name: 'Ỷ thiên đồ long ký',price: '25.000', vote: '5/5' },
//   { imgSrc: osho, name: 'Ỷ thiên đồ long ký',price: '25.000', vote: '5/5' },
//   { imgSrc: ketoanviahe, name: 'Ỷ thiên đồ long ký',price: '25.000', vote: '5/5' },
//   { imgSrc: tddn, name: 'Ỷ thiên đồ long ký',price: '25.000', vote: '5/5' },
//   { imgSrc: namiya, name: 'Ỷ thiên đồ long ký',price: '25.000', vote: '5/5' },
// ];

function Product(props) {
  return (
    <div className={styles.stproduct}>
      <img className={styles.productImg} src={props.imgSrc} alt = {props.name}/>
      <p className={styles.booTitle} id='ten_sach'>{props.name}</p>
      <p className={styles.pVoting}>{props.vote}<span><img className={styles.starVoting} src={voting} /></span></p>
      <p>{props.price}<sup>đ</sup></p>
    </div>
  )
}

// function Label(props) {
//   return (
//     <div className={props.clName}>
//       <p className="text-label">{props.text}</p>
//     </div>
//   )
// }

// const listProducts = 
// <ul className={styles.listProducts}>
//   {productsData.map((product, index) => (
//     <li key={index} className={styles.listProductsEle}>
//       <Product
//         imgSrc={product.imgSrc}
//         name={product.name}
//         vote={product.vote}
//         price={product.price}
//       />
//     </li>
//   ))}
// </ul>

// const content = 
// <div className={styles.content}>
//   {listProducts}
// </div>

function TrangChu() {
  const { searchTerm } = useSearch();
  const [products, setProducts] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setIsSearch(true);
      fetch(`http://localhost:3001/api/search?q=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching search results:', error));
    } else {
      setIsSearch(false);
      fetch('http://localhost:3001/api/getBooksForHomePage')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching books:', error));
    }
  }, [searchTerm]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/api/getBooksForHomePage')
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error('Error fetching books:', error));
  // }, []);

  const listProducts = 
  <ul className={styles.listProducts}>
    {products.map((product, index) => (
      <li key={index} className={styles.listProductsEle}>
        <Product
          imgSrc={`/images/${product.Anh}`}
          name={product.Ten}
          vote={'5/5'}
          price={product.Gia}
        />
      </li>
    ))}
  </ul>

  const content = 
  <div className={styles.content}>
  {listProducts}
  </div>;

  return (
    <React.Fragment>
      <Header/>
      <Sideboard/>
      {isSearch ? <p id='search-result'>Kết quả tìm kiếm cho "{searchTerm}":</p> : null}
      {content}
    </React.Fragment>
  );
}
export default TrangChu;
export { Product };