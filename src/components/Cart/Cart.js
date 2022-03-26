import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className='cart'>
            <h2>Selected Pesticides</h2>
            <h3>Selected items: {cart.length}</h3>
        </div>
    );
};

export default Cart;