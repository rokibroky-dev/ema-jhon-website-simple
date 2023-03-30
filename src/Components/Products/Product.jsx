import React from 'react';
import './Product.css'

const Product = (props) => {
 
    const {img, name, seller, quantity, price, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
          <img src={img} alt=""/>
          <div className='product-info'>
          <h6 className='product-name'>{name}</h6>
          <p>Price: ${price}</p>
          <p>Manufacture: {seller}</p>
          {/* <p>Ratings: {ratings} Stars</p> */}
          </div>

          <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart </button>
        </div>
    );
};

export default Product;