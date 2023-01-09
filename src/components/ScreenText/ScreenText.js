import React from 'react';
import './ScreenText.css';

const ScreenText = ({heading,subheading}) => {
  return (
    <div className='screen-text'>
        <div className='text-heading'>
            {heading}
        </div>
        <div className='text-subheading'>
            {subheading}
        </div>
    </div>
  );
};

export default ScreenText;