import React, { useState } from 'react';
import './tech.css';

const Tech = ({ name, img }) => {
  const [isTargeted, setIsTargeted] = useState(false);

  const onEnter = () => {
    setIsTargeted(true);
  };
  const onLeave = () => {
    setIsTargeted(false);
  };

  return (
    <div className='main__aboutme--techstack__tech'>
      <p className={isTargeted ? '' : 'hidden'}>{name}</p>
      <div
        className='main__aboutme--techstack__tech-icon'
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {img}
      </div>
    </div>
  );
};

export default Tech;
