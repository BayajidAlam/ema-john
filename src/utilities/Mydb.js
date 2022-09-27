const addToDd = id => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem('shoping-cart');
  if(storedCart){
    shoppingCart = JSON.parse(storedCart);
  }
  
  const quantity = shoppingCart[id];
  if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  else{
    shoppingCart[id] = 1;
  }

  localStorage.setItem('shoping-cart',JSON.stringify(shoppingCart));
}


const getStoredCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem('shoping-cart');
  if(storedCart){
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
}

const removeFromDb = id => {
  const storedCart = localStorage.getItem('shoping-cart');
  if(storedCart){
    const shoppingCart = JSON.parse(storedCart);
    if(id in shoppingCart){
      delete shoppingCart[id];
      localStorage.setItem('shoping-cart',JSON.stringify(shoppingCart));
    }
  }
}

const deleteShoppingCart = () => {
  localStorage.removeItem('shoping-cart');
}

export {
  addToDd,
  removeFromDb,
  deleteShoppingCart,
  getStoredCart
}