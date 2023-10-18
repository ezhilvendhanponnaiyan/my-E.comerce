import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import './cart.css';

export default function Cart() {
  const getItem = localStorage.getItem('cartList');
  const storedArray = JSON.parse(getItem);
  const [productType, setProductType] = useState(storedArray);
  const [total, setTotal] = useState(0)

      // useEffect(()=>{
      //    productType?.map((curElm, index) => {
             
      //        let total+ =curElm.Price;
      //        setTotal(total)
      //     });
      // },[])
        
      

  return (
    <div className='' style={{ margin: '40px 70px' }}>
      <table className='cart-items' style={{ width: '100%' }}>
        <thead className='cart__header'>
          <tr>
            <th className='product-info' colspan='2' scope='col'>
              Product
            </th>
            <th className='product-price' scope='col'>
              Price
            </th>
            <th className='product-quantity hidden-sm-down' scope='col'>
              Quantity
            </th>
            <th className='total-product hidden-sm-down' scope='col'>
              Total
            </th>
          </tr>
        </thead>
        {productType?.map((curElm, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th
                  className='product-info'
                  colspan='2'
                  scope='col'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={curElm.Img}
                    alt={curElm.Title}
                    style={{ width: '150px' }}
                  />{' '}
                  <span>{curElm.Cat}</span>
                </th>
                <th className='product-price' scope='col'>
                  {curElm.Price}
                </th>
                <th className='product-quantity hidden-sm-down' scope='col'>
                  <input
                    type='number'
                    id='quantity'
                    name='quantity'
                    min='1'
                    max='5'
                    value='1'
                  />
                </th>
                <th className='total-product hidden-sm-down' scope='col'>
                  {curElm.Price}
                </th>
              </tr>
            </tbody>
          );
        })}
        <h3>
        {total}
        </h3>
      </table>
    </div>
  );
}
