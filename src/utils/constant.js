const setAddToCart = (products) => {
  localStorage.setItem('cartList', products);
};

const getAddToCart = () => {
  let getItem = localStorage.getItem('cartList');
  return getItem;
};

export { setAddToCart, getAddToCart };
