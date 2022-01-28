import { useState } from 'react';
import './App.css';

function App() {

  const [lionSize, setLionSize] = useState(1);
  const lionStyle = { fontSize: `${lionSize}rem` };
  const [mouseSize, setMouseSize] = useState(1);
  const mouseStyle = { fontSize: `${mouseSize}rem` };
  console.log('||', 'lion size' - lionSize, 'mouse size' - mouseSize);

  return (
    <div className="App">
      <section className='fight-container'>
        <div className='lion'>
          <p style={lionStyle}>🦁</p>
          <div className='btn-container'>
            <button onClick={() => setLionSize(lionSize + 1)}>Lion Roars!</button>
            <button onClick={() => setLionSize(lionSize - 1)}>Mouse Bites!</button>
          </div>
        </div>
        <div className='mouse'>
          <p style={mouseStyle}>🐭</p>
          <div className='btn-container'>
            <button onClick={() => setMouseSize(mouseSize + 1)}>Mouse Squeaks!</button>
            <button onClick={() => setMouseSize(mouseSize - 1)}>Lion Pounces!</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
