import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023. All rights are reserved</p>
      <div>
        <a
          href='https://www.linkedin.com/in/tom%C3%A1s-arrativel-59281a240/'
          target='_blank'
        >
          <AiFillLinkedin size={20} color='#fff' />
        </a>
        <a href='https://github.com/Tomas-Arrativel' target='_blank'>
          <BsGithub size={20} color='#fff' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
