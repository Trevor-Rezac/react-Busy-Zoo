import React from 'react';

export default function Animal({ animal }) {
  return <div className='animal' style={{ fontSize: '5rem' }}>
    {animal === 'monkey' && '🐒'}
    {animal === 'gorilla' && '🦍'}
    {animal === 'tiger' && '🐅'}
    {animal === 'kangaroo' && '🦘'}
    {animal === 'giraffe' && '🦒'}
    {animal === 'llama' && '🦙'}
    {animal === 'elephant' && '🐘'}
    {animal === 'zebra' && '🦓'}
    {animal === 'camel' && '🐪'}
  </div>;
}
