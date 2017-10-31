import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './components/menu';
import Game from './components/game';
import Tutorial from './components/tutorial';
import Credits from './components/credits';


const App = () => {
        var thunderstorm = new Audio('/sounds/thunderstorm.mp3')
        thunderstorm.play()
    return (
      <Router>
        <div className="App">
            <div className="warning">WARNING LOUD NOISES!</div>
          <Route exact={true} path="/" component={ Menu } />
          <Route path="/game" render = {(props) => <Game {...props} thunderstorm={thunderstorm} />}/>
          <Route path="/tutorial" component={ Tutorial } />
          <Route path="/credits" component={ Credits } />
        </div>
      </Router>
    );
}

export default App;
