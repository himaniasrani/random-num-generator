import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [randomNum, setRandomNum] = useState(0);

  const getRandomNum = () => {
    return fetch('https://random-num-worker.himani19-ha.workers.dev/')
      .then(response => response.json()) 
  }

  useEffect(() => {
    getRandomNum()
      .then(data => {
        setRandomNum(data);
      })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <p>Random number : {randomNum}</p>
      </header>
    </div>
  );
}

export default App;
