import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(() =>
    localStorage.getItem('count') !== null
      ? JSON.parse(localStorage.getItem('count'))
      : []
  );

  const handleResetBtn = () => setCount(0);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="btn-wrapper">
          <button onClick={() => setCount((prev) => (prev = count + 1))}>
            count is {count}
          </button>
          <button onClick={handleResetBtn}>reset</button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
