import React from 'react';
import logo from '../../images/pesticide.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h1 className='header-text'>Pesticide Shop</h1>
            <div className='header-img'>
                <img src={logo} alt="" />
            </div>
        </nav>
    );
};

export default Header;