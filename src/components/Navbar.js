import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';




import './Navbar.css';

const Navbar=()=> {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
   
        <div>
    
   
      <nav className='navbar'>
     
        <div className='navbar-container'>
       
    
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CODE-EDITOR
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
          
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/settings'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Settings
              </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About-Us
              </Link>
            </li>
           

            <li>
            
            </li>
          </ul>
       
        </div>
      
      </nav>
        
          </div>
   
  );
}

export default Navbar;