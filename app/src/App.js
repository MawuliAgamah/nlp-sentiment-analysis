
import './App.css';
import { MainScreen } from './Components/MainScreen'
import { Sidebar } from './Components/SideBar';
import React from 'react';


function App() {


  return (
    <div className="App">
      <div className='center'>
        <div className='side-bar-container'>
          <Sidebar />
        </div>
        <div className='main-screen-container'>
          <MainScreen />
        </div>
      </div>

    </div>
  );
}

export default App;
