//import logo from './logo.svg';
import './personalBuy.css';
import React, { useState } from 'react';
import Header from '../Component/logHeader.js';
// import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
import Sidebar from '../Component/sideBar.js';
import Table from 'react-bootstrap/Table';
// import "bootstrap/dist/css/bootstrap.min.css";

// var x, i, j, l, ll, selElmnt, a, b, c;
// /* Look for any elements with the class "custom-select": */
// x = document.getElementsByClassName("custom-select");
// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   /* For each element, create a new DIV that will act as the selected item: */
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   /* For each element, create a new DIV that will contain the option list: */
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     /* For each option in the original select element,
//     create a new DIV that will act as an option item: */
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function (e) {
//       /* When an item is clicked, update the original select box,
//       and the selected item: */
//       var y, i, k, s, h, sl, yl;
//       s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//       sl = s.length;
//       h = this.parentNode.previousSibling;
//       for (i = 0; i < sl; i++) {
//         if (s.options[i].innerHTML === this.innerHTML) {
//           s.selectedIndex = i;
//           h.innerHTML = this.innerHTML;
//           y = this.parentNode.getElementsByClassName("same-as-selected");
//           yl = y.length;
//           for (k = 0; k < yl; k++) {
//             y[k].removeAttribute("class");
//           }
//           this.setAttribute("class", "same-as-selected");
//           break;
//         }
//       }
//       h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function (e) {
//     /* When the select box is clicked, close any other select boxes,
//     and open/close the current select box: */
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }

// function closeAllSelect(elmnt) {
//   /* A function that will close all select boxes in the document,
//   except the current select box: */
//   var x, y, i, xl, yl, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt === y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
// document.addEventListener("click", closeAllSelect);

// const orderedTable =
//   <Table className="orderedTable">
//     <thead>
//       <tr>
//         <th scope="col">Trạng thái</th>
//         <th scope="col">Mã đơn hàng</th>
//         <th scope="col">Ngày mua</th>
//         <th scope="col">Chi tiết</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr className="DaGiao">
//         <td>Đã giao</td>
//         <td>0x0001</td>
//         <td>31/02/2023</td>
//         <td><a href = "#" >Xem chi tiết</a></td>
//       </tr>
//       <tr className="DangGiao">
//         <td>Đang giao</td>
//         <td>0x0002</td>
//         <td>31/02/2023</td>
//         <td><a href = "#" >Xem chi tiết</a></td>
//       </tr>
//       <tr className="DaHuy">
//         <td>Đã hủy</td>
//         <td>0x0003</td>
//         <td>31/02/2023</td>
//         <td><a href = "#" >Xem chi tiết</a></td>
//       </tr>
//     </tbody>
// </Table>
const getStatusClass = (status) => {
  switch (status) {
    case 'Đã giao':
      return 'DaGiao';
    case 'Đang giao':
      return 'DangGiao';
    case 'Đã hủy':
      return 'DaHuy';
    case 'Đang xử lí':
      return 'DangXuLi';
    case 'Chờ thanh toán':
      return 'ChoThanhToan';
    default:
      return ''; // Không có class nếu không có trạng thái nào khớp
  }
};

function App() {
const [filter, setFilter] = useState('Tất cả'); // State để lưu giá trị filter, mặc định là '0' (Tất cả)
const handleFilterChange = (e) => {
  setFilter(e.target.value);
};
const data = [
  { trangThai: 'Đã giao', maDonHang: '0x0001', ngayMua: '31/02/2023' },
  { trangThai: 'Đang giao', maDonHang: '0x0002', ngayMua: '31/02/2023' },
  { trangThai: 'Đã hủy', maDonHang: '0x0003', ngayMua: '31/02/2023' },
  { trangThai: 'Đang xử lí', maDonHang: '0x0004', ngayMua: '31/02/2023' },
  { trangThai: 'Chờ thanh toán', maDonHang: '0x0005', ngayMua: '31/02/2023' },
];

// Lọc dữ liệu theo giá trị của dropdown
const filteredData = 
filter === 'Tất cả' ? data : data.filter(item => item.trangThai.toLowerCase() === filter.toLowerCase());
const filterDropdown =
  <div class="filterDropdown">
    <select onChange={handleFilterChange} value={filter}>
      <option value="Tất cả">Tất cả</option>
      <option value="Đã giao">Đã giao</option>
      <option value="Đang giao">Đang giao</option>
      <option value="Đang xử lí">Đang xử lí</option>
      <option value="Chờ thanh toán">Chờ thanh toán</option>
      <option value="Đã hủy">Đã hủy</option>
    </select>
  </div>

  const orderedTable =
    <div className="table-container">
      <Table className="orderedTable">
        <thead>
          <tr>
            <th scope="col">Trạng thái</th>
            <th scope="col">Mã đơn hàng</th>
            <th scope="col">Ngày mua</th>
            <th scope="col">Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className={getStatusClass(item.trangThai)}>
              <td>{item.trangThai}</td>
              <td>{item.maDonHang}</td>
              <td>{item.ngayMua}</td>
              <td><a href="#">Xem chi tiết</a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      {filterDropdown}
      {orderedTable}
      <Footer />
    </React.Fragment>
  );
}
export default App;
// export { Product };