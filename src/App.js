import { useState } from 'react';
import './App.css';
import fightBackground from './landscape.png';

function App() {
  
  const [lionSize, setLionSize] = useState(1);
  const lionStyle = { fontSize: `${lionSize}rem` };
  const [mouseSize, setMouseSize] = useState(1);
  const mouseStyle = { fontSize: `${mouseSize}rem` };
  // console.log('||', 'lion size', lionSize, 'mouse size', mouseSize);

  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

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
        <div className='sign'>Open/Closed</div>
        <div className='btn-container'>
          <button className='open-btn'>Open</button>
          <button className='closed-btn'>Closed</button>
        </div>
      </section>

    </div>
  );
}

export default App;
