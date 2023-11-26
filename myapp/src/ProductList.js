import React, { useState } from 'react';
import './styles.css'; // Import file CSS để tùy chỉnh giao diện

const ProductList = ({ products, onSelectProduct }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (productId) => {
    onSelectProduct(productId);
  };
  return (
    <div className="product-list-container">
      {products.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Mã sản phẩm</th>
              <th>Giá tiền</th>
              <th>Tác giả</th>
              <th>Số lượng trong kho</th>
              <th>Số lượng đã bán</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.image}</td>
                <td>{product.name}</td>
                <td>{product.code}</td>
                <td>{product.price}</td>
                <td>{product.author}</td>
                <td>{product.quantity}</td>
                <td>{product.soldQuantity}</td>
                <td>
                <input
                  type="checkbox"
                  checked={product.isSelected}
                  onChange={() => handleCheckboxChange(product.id)}
                />
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="empty-message">Trống</p>
      )}
    </div>
  );
};

export default ProductList;
