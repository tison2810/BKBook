import React, { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';
import ProductForm from './ProductForm';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Sách 1',
      author: 'Tác giả A',
      publisher: 'Nhà xuất bản X',
      code: 'SP001',
      price: 100000,
      country: 'Việt Nam',
      category: 'Văn học',
      quantity: 50,
      importDate: '01/01/2023',
      storage: 'Kho 1',
      image: 'sach1.jpg',
      description: 'Mô tả về Sách 1',
      soldQuantity: 20,
    },
    {
      id: 2,
      name: 'Sách 2',
      author: 'Tác giả B',
      publisher: 'Nhà xuất bản Y',
      code: 'SP002',
      price: 120000,
      country: 'Việt Nam',
      category: 'Khoa học',
      quantity: 30,
      importDate: '02/01/2023',
      storage: 'Kho 2',
      image: 'sach2.jpg',
      description: 'Mô tả về Sách 2',
      soldQuantity: 15,
    },
    {
      id: 3,
      name: 'Sách 3',
      author: 'Tác giả C',
      publisher: 'Nhà xuất bản Z',
      code: 'SP003',
      price: 150000,
      country: 'Việt Nam',
      category: 'Lịch sử',
      quantity: 40,
      importDate: '03/01/2023',
      storage: 'Kho 3',
      image: 'sach3.jpg',
      description: 'Mô tả về Sách 3',
      soldQuantity: 10,
    },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const [isUpdateProductModalOpen, setUpdateProductModalOpen] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSelectProduct = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, isSelected: !product.isSelected } : product
    );
    setProducts(updatedProducts);

    const selectedIds = updatedProducts.filter((product) => product.isSelected).map((p) => p.id);
    setSelectedProducts(selectedIds);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setAddProductModalOpen(false);
  };

  const handleUpdateProduct = (productId, updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      )
    );
    setUpdateProductModalOpen(false);
    setProductToUpdate(null);
  };

  const handleDeleteProduct = () => {
    if (selectedProducts.length > 0) {
      const confirmDelete = window.confirm('Bạn có chắc muốn xóa sản phẩm đã chọn?');
      if (confirmDelete) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => !selectedProducts.includes(product.id))
        );
        setSelectedProducts([]);
      }
    } else {
      alert('Vui lòng chọn ít nhất một sản phẩm để xóa!');
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      alert('Nhập từ khóa tìm kiếm!');
    }
  };

  const handleAddClick = () => {
    setAddProductModalOpen(true);
  };

  const handleDeleteClick = () => {
    handleDeleteProduct();
  };

  const handleUpdateClick = () => {
    if (selectedProducts.length === 1) {
      const product = products.find((p) => p.id === selectedProducts[0]);
      setProductToUpdate(product);
      setUpdateProductModalOpen(true);
    } else {
      alert('Vui lòng chọn đúng một sản phẩm để cập nhật!');
    }
  };

  return (
    <div>
      <Header onSearchChange={(value) => setSearchQuery(value)} onSearch={handleSearch} />
      <ProductList 
        products={searchQuery.trim() !== '' ? searchResults : products}
        onSelectProduct={handleSelectProduct} 
      />
      <Footer
        onAddClick={handleAddClick}
        onDeleteClick={handleDeleteClick}
        onUpdateClick={handleUpdateClick}
      />
      {isAddProductModalOpen && (
        <ProductForm onSubmit={handleAddProduct} onCancel={() => setAddProductModalOpen(false)} />
      )}
      {isUpdateProductModalOpen && (
        <ProductForm
          onSubmit={(formData) => handleUpdateProduct(productToUpdate.id, formData)}
          onCancel={() => {
            setUpdateProductModalOpen(false);
            setProductToUpdate(null);
          }}
          productToUpdate={productToUpdate}
        />
      )}
    </div>
  );
};

export default App;