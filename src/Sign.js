import React from 'react';
import './sign.css';

export default function Sign({ isOpen, signColor }) {
  return <div className='sign' style={ { backgroundColor: signColor } }>
    {isOpen ? 'The Zoo is OPEN!' : 'The Zoo is CLOSED!'}
  </div>;
}
