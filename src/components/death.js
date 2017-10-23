import React, {Component} from 'react'

class Death extends Component {
    constructor(props) {
        super(props)

    }
    render(){
    	return(
    		<div id="gameOverWrapper">
    			<div id="gameOver"></div>
    			<div id="deathAnimation" className="lose"></div>
    		</div>
    	)
    
    }
}

export default Death