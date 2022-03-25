import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, price, name } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <p>Name: {name}</p>
        </div>
    );
};

export default Product;