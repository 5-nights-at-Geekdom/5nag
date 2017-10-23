import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Death extends Component {
    constructor(props) {
        super(props)

    }
    render(){
    	return(
    		<div id="gameOverWrapper">
    			<div id="gameOver">GAME OVER
    				<div id="toMenuWrapper"><Link className="menu" to={'/'}>Menu</Link></div>
    			</div>
    			<div id="deathAnimation" className="lose"></div>
    		</div>
    	)
    
    }
}

export default Death