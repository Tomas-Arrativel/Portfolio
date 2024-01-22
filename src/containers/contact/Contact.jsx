import React from 'react';
import { Forms } from '../../components/exports';
import { FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact__container section__padding' id='contact'>
      <h2>Contact</h2>
      <h3>If I can be of assistance, please do not hesitate to contact me.</h3>
      <div className='contact__forms'>
        <Forms
          icon={
            <FaInstagram
              style={{
                height: '40px',
                width: '40px',
                color: 'var(--dark)',
              }}
            />
          }
          text='Instagram'
          name='arrativel.tomas'
          link='https://www.instagram.com/arrativel.tomas/'
        />
        <Forms
          icon={
            <FaLinkedin
              style={{
                height: '40px',
                width: '40px',
                color: 'var(--dark)',
              }}
            />
          }
          text='LinkedIn'
          name='Tomás Arrativel'
          link='https://www.linkedin.com/in/juan-tom%C3%A1s-arrativel-59281a240/'
        />
        <Forms
          icon={
            <FaMailBulk
              style={{
                height: '40px',
                width: '40px',
                color: 'var(--dark)',
              }}
            />
          }
          text='E-mail'
          name='arrativeltomas@gmail.com'
          link='#'
        />
      </div>
    </div>
  );
};

export default Contact;
