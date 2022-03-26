import React from 'react';
import SelectProduct from '../SelectProduct/SelectProduct';
import './Cart.css'

const Cart = ({ cart }) => {

    // const [watch, setWatch] = useState([]);

    const getRandomProducts = () => {
        const getRandom = cart[Math.floor(Math.random() * cart.length)];
        return getRandom;
    };

    // const randomSelect = () => {
    //     const randomProduct = getRandomProducts();
    //     if (!randomProduct) {
    //         alert("please add  minimum number 4");
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