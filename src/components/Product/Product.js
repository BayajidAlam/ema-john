import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'
const Product = ({product,handleAddToCart}) => {
  // const {product,handleAddToCart} = props;
  const {img,name,price,ratings,seller} =  product;

  return (
    <div className='product'>
      <img src={img} alt="logoimage" />
      <div className='product-info'> 
      <p className='product-name'>{name}</p>
      <p className='product-price'>Price:${price}</p>
      <p>Manufacturer :{seller}</p>
      <p><small>Reting: {ratings} stars</small></p>
      </div>
      <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;