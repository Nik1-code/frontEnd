import React from 'react';
import './App.css'

//components
import Home from './components/Home';
import Login from './components/Login';



function App() {
  return (
        <div>
            <header className='head'>
            <ul className="nav justify-content-end" >
              <li className="nav-item">
              <a className="nav-link App-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
              <a className="nav-link App-link" href="#Login">Login</a>
              </li>
            </ul>
            </header>
        <Home />
        <Login />
    </div>
  );
}

export default App;
