import { useState } from 'react';
import './App.css';

function App() {

  const [lionSize, setLionSize] = useState(1);
  console.log('||', lionSize);

  return (
    <div className="App">
      <section className='fight-container'>
        <div className='lion'>
          <p>🦁</p>
          <div className='btn-container'>
            <button onClick={() => setLionSize(lionSize + 1)}>Lion Increases</button>
            <button onClick={() => setLionSize(lionSize - 1)}>Lion Decreases</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
