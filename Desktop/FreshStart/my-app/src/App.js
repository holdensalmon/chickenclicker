import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import chick from './pics/chicken-sprite-main.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <img id="mainChick" src={chick} onclick="Click()"  />
        <p id="clickNum">Clicks: 0</p>
      </div>
    );
  }
}

export default App;
