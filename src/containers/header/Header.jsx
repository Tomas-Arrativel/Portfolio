import React from 'react';
import './header.css';
import { Navbar, IAm } from '../../components/exports';

const Header = () => {
  return (
    <header>
      <Navbar />
      <IAm />
    </header>
  );
};

export default Header;
