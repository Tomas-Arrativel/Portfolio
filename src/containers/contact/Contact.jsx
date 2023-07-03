import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Forms } from '../../components/exports';
import { FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2k6c6kd',
        'template_mirgio4',
        form.current,
        'I_H9zPOTE9J72Ir0r',
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success('Message sent 🎉!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('There was an error 👀', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
      );
  };

  return (
    <div className='contact__container section__padding' id='contact'>
      <h2>Contact</h2>
      <h3>If I can be of assistance, please do not hesitate to contact me.</h3>
      <div className='contact__forms'>
        <form ref={form} onSubmit={sendEmail} className='contact__forms-form'>
          <input type='text' name='user_name' required placeholder='Name' />

          <input type='email' name='user_email' required placeholder='E-mail' />

          <textarea name='message' required placeholder='Message' />
          <input type='submit' value='Contact me' className='form-btn' />
        </form>
        <div className='contact__forms-others'>
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
            name='arrativel.tomi'
            link='https://www.instagram.com/arrativel.tomi/'
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
            link='https://www.linkedin.com/in/tom%C3%A1s-arrativel-59281a240/'
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
      <ToastContainer />
    </div>
  );
};

export default Contact;
