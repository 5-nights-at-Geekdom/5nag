import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Tutorial extends Component {
    constructor(props) {
        super(props)
    }

    render(){
      return (
            <div id="tutorial">
              <Link to={'/game'}>Start Game</Link>
            </div>
      )
    }
}

export default Tutorial