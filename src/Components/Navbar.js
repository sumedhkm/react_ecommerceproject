import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './Assets/logo.png';
import image from './Assets/images.png';

import cart_icon from './Assets/cart_icon.png';
import { AuthContext } from './Context';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menu, setMenu] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  const navbar = ['/loginsignup', '/register'];

  if (navbar.includes(location.pathname)) {
    return null;
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>SMITH</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu('shop')} className={menu === 'shop' ? 'active' : ''}>
          <Link to='/'>Shop</Link>
          {menu === 'shop' && <hr />}
        </li>
        <li onClick={() => setMenu('mens')} className={menu === 'mens' ? 'active' : ''}>
          <Link to='/category/mens'>Men</Link>
          {menu === 'mens' && <hr />}
        </li>
        <li onClick={() => setMenu('womens')} className={menu === 'womens' ? 'active' : ''}>
          <Link to='/category/womens'>Women</Link>
          {menu === 'womens' && <hr />}
        </li>
        <li onClick={() => setMenu('kids')} className={menu === 'kids' ? 'active' : ''}>
          <Link to='/category/kids'>Kids</Link>
          {menu === 'kids' && <hr />}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/card'>
          <img src={cart_icon} alt='Cart' />
        </Link>
        {user ? (
          <>
            <Link to='/profile'>
<span className='profile'><img src={image}/> </span>           </Link>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <>
            <Link to='/loginsignup'>
              <button>Login</button>
            </Link>
            <Link to='/register'>
              <button>Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
