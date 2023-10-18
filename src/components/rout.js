import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home';

import Product from './product';
import Cart from './Cart';
import Contact from './Contact';
import WishList from './WishList';
import Login from './Login';
import Register from './Register';
import About from './About';

export const Rout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wishList' element={<WishList />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </>
  );
};

export default Rout;
