import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu'


class App extends Component {

    constructor(){
        this.state = {
            time: 0,
        }
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to 5NAG</h1>
        </header>
        <Menu />
      </div>
    );
  }
}

export default App;
