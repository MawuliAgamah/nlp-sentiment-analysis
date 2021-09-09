
import './App.css';
import { MainScreen } from './Components/MainScreen'
import React, { useState, useEffect } from 'react';


function App() {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/').then(res => res.json()).then(data => {
      setCurrentTime(data.text);
    });
  }, []);

  return (
    <div className="App">
      <div className='center'>
        <div className='main-screen-container'>
          <h1> HI {currentTime} </h1>
          <MainScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
