import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './components/menu';
import Game from './components/game';


const App = () => {

    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={ Menu } />
          <Route path="/game" component={ Game } />
          <Route path="/tutorial" component={ Tutorial } />
        </div>
      </Router>
    );
}

export default App;
