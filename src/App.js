import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './components/menu';
import Options from './components/options'
import Game from './components/game';


const App = () => {

    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={ Menu } />
          <Route path="/options" component={ Options }/>
          <Route path="/game" component={ Game } />
        </div>
      </Router>
    );
}

export default App;
