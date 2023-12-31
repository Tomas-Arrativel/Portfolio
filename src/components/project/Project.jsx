import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import './project.css';

const Project = ({ img, title, text, technologies, link, srcLink }) => {
  const [dropdown, setDropdown] = useState('false');

  return (
    <div className='main__projects-container__project'>
      <img src={img} alt={title} />

      <div className='main__projects-container__project-info'>
        <h2 className='project-title'>{title}</h2>
        <p>{text}</p>

        {title === 'Fake Bank' ? (
          <div className='accounts-dropdown'>
            <button
              onClick={() =>
                dropdown ? setDropdown(false) : setDropdown(true)
              }
            >
              Demo accounts{' '}
              <IoMdArrowDropdown
                style={!dropdown ? { transform: 'rotate(180deg)' } : ''}
              />
            </button>
            <div
              className={dropdown ? 'dropdown-menu discover' : 'dropdown-menu'}
            >
              <ul>
                <li>
                  <p>
                    User: ta <span>Pin: 1111</span>
                  </p>
                </li>
                <li>
                  <p>
                    User: jd <span>Pin: 2222</span>
                  </p>
                </li>
                <li>
                  <p>
                    User: stw <span>Pin: 3333</span>
                  </p>
                </li>
                <li>
                  <p>
                    User: ss <span>Pin: 4444</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className='main__projects-container__project-info__technologies'>
          <h3>Technologies: </h3>
          {technologies.map((tech, key) => (
            <p className='tech-style' key={key}>
              {tech}
            </p>
          ))}
        </div>

        <div className='buttons'>
          <a href={link} target='_blank'>
            <button className='btn2'>View project</button>
          </a>
          <a href={srcLink} target='_blank'>
            <button className='btn2'>Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
