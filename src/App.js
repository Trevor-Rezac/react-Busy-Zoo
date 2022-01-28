import { useState } from 'react';
import './App.css';
import fightBackground from './landscape.png';
import Sign from './Sign.js';

function App() {
  
  const [lionSize, setLionSize] = useState(1);
  const lionStyle = { fontSize: `${lionSize}rem` };
  const [mouseSize, setMouseSize] = useState(1);
  const mouseStyle = { fontSize: `${mouseSize}rem` };
  // console.log('||', 'lion size', lionSize, 'mouse size', mouseSize);

  const [isOpen, setIsOpen] = useState(false);
  const [signColor, setSignColor] = useState('red');
  console.log('||', 'zoo is open', isOpen, 'sign color is', signColor);

  return (
    <div className="App">
      <section className='fight-container' style={{ backgroundImage: `url(${fightBackground})` }}>
        <div className='lion'>
          <p style={lionStyle}>🦁</p>
          <div className='btn-container'>
            <button onClick={() => setLionSize(lionSize + .5)}>Lion Roars!</button>
            <button onClick={() => setLionSize(lionSize - .5)}>Mouse Bites!</button>
          </div>
        </div>
        <div className='mouse'>
          <p style={mouseStyle}>🐭</p>
          <div className='btn-container'>
            <button onClick={() => setMouseSize(mouseSize + .5)}>Mouse Squeaks!</button>
            <button onClick={() => setMouseSize(mouseSize - .5)}>Lion Pounces!</button>
          </div>
        </div>
      </section>
      <section className='sign-container'>
        <Sign isOpen={isOpen} signColor={signColor}/>
        <div className='sign-btn-container' style={ { backgroundColor: signColor } }>
          <button className='open-btn' onClick={() => {setIsOpen(true); setSignColor('green');}} >Open</button>
          <button className='closed-btn' onClick={() => {setIsOpen(false); setSignColor('red');}}>Closed</button>
        </div>
      </section>

    </div>
  );
}

export default App;
