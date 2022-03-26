import React from 'react';
import SelectProduct from '../SelectProduct/SelectProduct';
import './Cart.css'

const Cart = ({ cart }) => {


    return (
        <div className='cart'>
            <h2>Selected Pesticides</h2>
            {
                cart.map(carts => <SelectProduct cart={carts}></SelectProduct>)
            }
        </div>
    );
};

export default Cart;