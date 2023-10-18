import React from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';

export default function Search({ product, productType }) {
  return (
    <div className='products'>
      <div className='container'>
        <div className='productbox'>
          <div className='contant'>
            {(productType?.length > 0
              ? product?.filter(
                  (item) =>
                    item?.Cat.toLowerCase() === productType.toLowerCase()
                )
              : product
            )?.map((curElm, index) => {
              return (
                <>
                  <div className='box' key={index}>
                    <div className='img-box'>
                      <img src={curElm.Img} alt={curElm.Title}></img>

                      <div className='icon'>
                        <li>
                          <AiOutlineShoppingCart />
                        </li>
                        <li>
                          <BsEye />
                        </li>
                        <li>
                          <AiOutlineHeart />
                        </li>
                      </div>
                    </div>
                    <div className='detail'>
                      <p>{curElm.Cat}</p>
                      <h3>{curElm.Title}</h3>
                      <h4>{curElm.Price}</h4>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
