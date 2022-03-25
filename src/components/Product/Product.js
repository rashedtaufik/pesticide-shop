import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, price, name } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-text'>
                <p>Price: ${price}</p>
                <p>Name: {name}</p>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;