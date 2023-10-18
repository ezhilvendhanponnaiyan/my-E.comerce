import React, { useState } from 'react';
import Nav from './components/nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/rout';
import Footer from './components/footer';
import Search from './components/search';
import Productdetail from './components/productdetail';
import About from './components/About';
import './components/product.css';

const App = () => {
  const [product, setProduct] = useState(Productdetail);
  const [productType, setProductType] = useState('');
  const searchbtn = (product) => {
    setProductType(product);
  };
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        {productType?.length > 0 ? (
          <Search productType={productType} product={product} />
        ) : (
          
          <Rout />
        )}
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
