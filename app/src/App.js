
import './App.css';
import { MainScreen } from './Components/MainScreen'
import { Sidebar } from './Components/SideBar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GoogleNews } from './Components/GoogleNews';


function App() {

  return (
    <Router>
      <div className="App">
        <div className='center'>
          <div className='side-bar-container'>
            <Sidebar />
          </div>
          <Switch>
            <Route exact path='/'>
              <div className='main-screen-container' >
                <MainScreen />
              </div>
            </Route>
            <Route exact path='/google'>
              <div className='main-screen-container' >
                <GoogleNews />
              </div>
            </Route>
            <Route exact path='/google'>
              <div className='main-screen-container' >
                <GoogleNews />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
