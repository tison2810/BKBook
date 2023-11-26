import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, onCancel, productToUpdate }) => {
  const [productInfo, setProductInfo] = useState({
    name: '',
    author: '',
    publisher: '',
    productId: '',
    price: '',
    country: '',
    category: '',
    quantity: '',
    importDate: '',
    warehouse: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    if (productToUpdate) {
      setProductInfo(productToUpdate);
    } else {
      setProductInfo({
        name: '',
        author: '',
        publisher: '',
        productId: '',
        price: '',
        country: '',
        category: '',
        quantity: '',
        importDate: '',
        warehouse: '',
        image: '',
        description: '',
      });
    }
  }, [productToUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(productInfo);
  };

  return (
    <div className="product-form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <label>
          Tên sản phẩm:
          <input type="text" name="name" value={productInfo.name} onChange={handleChange} />
        </label>
        <label>
          Tác giả:
          <input type="text" name="author" value={productInfo.author} onChange={handleChange} />
        </label>
        <label>
          Nhà xuất bản:
          <input type="text" name="publisher" value={productInfo.publisher} onChange={handleChange} />
        </label>
        <label>
          Mã sản phẩm:
          <input type="text" name="productId" value={productInfo.productId} onChange={handleChange} />
        </label>
        <label>
          Giá:
          <input type="text" name="price" value={productInfo.price} onChange={handleChange} />
        </label>
        <label>
          Quốc gia:
          <input type="text" name="country" value={productInfo.country} onChange={handleChange} />
        </label>
        <label>
          Thể loại:
          <input type="text" name="category" value={productInfo.category} onChange={handleChange} />
        </label>
        <label>
          Số lượng:
          <input type="text" name="quantity" value={productInfo.quantity} onChange={handleChange} />
        </label>
        <label>
          Ngày nhập hàng:
          <input type="text" name="importDate" value={productInfo.importDate} onChange={handleChange} />
        </label>
        <label>
          Kho chứa:
          <input type="text" name="warehouse" value={productInfo.warehouse} onChange={handleChange} />
        </label>
        <label>
         Hình ảnh:
          <input type="text" name="image" value={productInfo.image} onChange={handleChange} />
        </label>
        <label>
          Mô tả:
          <textarea name="description" value={productInfo.description} onChange={handleChange} />
        </label>
        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={onCancel}>Hủy</button>
          <button type="submit" className="submit-button">Xác Nhận</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;