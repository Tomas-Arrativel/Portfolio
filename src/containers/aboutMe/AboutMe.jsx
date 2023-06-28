import React from 'react';
import './aboutMe.css';
import { Tech } from '../../components/exports';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from 'react-icons/fa';
import { SiExpress, SiMysql } from 'react-icons/si';

const AboutMe = () => {
  return (
    <div className='main__aboutme section__padding' id='about'>
      <div className='main__aboutme--info'>
        <h2>Know about me</h2>
        <p>
          I'm a <span>Frontend web developer</span> from Argentina currently
          learning about backend to become a fullstack web developer. I'm an{' '}
          <span>enthusiastic developer</span> with an addiction for discovering{' '}
          <span>new coding perspectives</span>. Check out some of my practice on
          my <span>projects</span> section
        </p>
        <p>
          I'm <span>open to Job opportunities</span> where I can contribute,
          learn and grow. If you have a good opportunity that matches my skills
          and experience then don't hesitate to
          <span> contact me.</span>
        </p>
        <a href='#contact'>
          <button className='btn'>Contact</button>
        </a>
      </div>
      <div className='main__aboutme--techstack'>
        <h2>Tech stack</h2>
        <div className='main__aboutme--techstack__container'>
          <Tech name='HTML' img={<FaHtml5 />} />
          <Tech name='CSS' img={<FaCss3Alt />} />
          <Tech name='Javascript' img={<FaJs />} />
          <Tech name='React' img={<FaReact />} />
          <Tech name='Git' img={<FaGitAlt />} />
          <Tech name='Node' img={<FaNodeJs />} />
          <Tech name='Express' img={<SiExpress />} />
          <Tech name='MySql' img={<SiMysql />} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
