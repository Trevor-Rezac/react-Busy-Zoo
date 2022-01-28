import { useState } from 'react';
import './App.css';

function App() {

  const [lionSize, setLionSize] = useState(1);
  // console.log('||', lionSize);
  
  return (
    <div className="App">
      <section className='fight-container'>
        <div className='lion'>
          <p>🦁</p>
          <div className='btn-container'>
            <button>Lion Increases</button>
            <button>Lion Decreases</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
