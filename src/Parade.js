import React from 'react';
import Animal from './Animal.js';

export default function Parade({ animalArr }) {
  return <div className='parade'>
    {animalArr.map((animal, i) => <Animal key={`${animal}-${i}`} animal={animal}></Animal>)}
  </div>;
}
