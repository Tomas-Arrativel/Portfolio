import React from 'react';
import './navbar.css';
import { CgMenuRightAlt } from 'react-icons/cg';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const showSidebar = () => setToggle(!toggle);
  return (
    <nav className='header__navbar'>
      <div className='header__navbar--logo'>
        <a href='#'>
          <h2 className='header__navbar--logo__title'>Tomás Arrativel</h2>
        </a>
      </div>
      <div className='vanish'>
        <ul className='header__navbar--links'>
          <li>
            <a href='#home' className='header__navbar--links__link'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='header__navbar--links__link'>
              About me
            </a>
          </li>
          <li>
            <a href='#projects' className='header__navbar--links__link'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='header__navbar--links__link'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='header__navbar--hamburger'>
        <CgMenuRightAlt size={19} onClick={showSidebar} />
        {toggle ? (
          <ul className='header__navbar--hamburger__menu-links'>
            <li>
              <a
                href='#home'
                className='header__navbar--hamburger__menu-links_link'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='header__navbar--hamburger__menu-links_link'
              >
                About me
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='header__navbar--hamburger__menu-links_link'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='header__navbar--hamburger__menu-links_link'
              >
                Contact
              </a>
            </li>
          </ul>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Navbar;
