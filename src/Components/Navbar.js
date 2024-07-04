import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Assets/logo.png';
import cart_icon from './Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>SMITH</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu('shop')} className={menu === 'shop' ? 'active' : ''}>
          <Link to='/shop'>Shop</Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('mens')} className={menu === 'mens' ? 'active' : ''}>
          <Link to='/shop/category/mens'>Men</Link>
          {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('womens')} className={menu === 'womens' ? 'active' : ''}>
          <Link to='/shop/category/womens'>Women</Link>
          {menu === 'womens' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('kids')} className={menu === 'kids' ? 'active' : ''}>
          <Link to='/shop/category/kids'>Kids</Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login-signup'>
          <button>Login</button>
        </Link>
        <Link to='/card'>
          <img src={cart_icon} alt='' />
        </Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};

export default Navbar;
