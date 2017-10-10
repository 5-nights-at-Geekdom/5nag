import React from 'react';
import Menu from './components/menu';
import Game from './components/game';


const App = () => {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to 5NAG</h1>
        </header>
        <Menu />
        <Game />
      </div>
    );
}

export default App;
