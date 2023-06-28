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
    <div
      className='main__aboutme--techstack__tech'
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <p className={isTargeted ? '' : 'hidden'}>{name}</p>
      {img}
    </div>
  );
};

export default Tech;
