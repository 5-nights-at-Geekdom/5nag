import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class WinScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="win">
            <div id="winMessage">CONGRATULATIONS
            You Survived All The Nights!</div>
            <Link to={'/'}id="strAgain">Play Again?</Link>

        </div>
    )
  }
}
export default WinScreen
