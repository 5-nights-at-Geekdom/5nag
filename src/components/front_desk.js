import React, {Component} from 'react'
import Kitchen from './kitchen'
import Corner from './corner'
import Lounge from './lounge'
import MainHall from './main_hall'
import CreepyHallway from './creepy_hallway'

class Front_Desk extends Component {
    constructor(props) {
        super(props)

    }
    getCamFeed(){
    	const cam = this.props.camFeed;

    	switch(cam) {
    		case 1:

    		return <Kitchen enemyPosition = {this.props.enemyPosition} />
    		case 2:

    		return <MainHall enemyPosition = {this.props.enemyPosition} />
    		case 3:

    		return <Corner enemyPosition = {this.props.enemyPosition} />
    		case 4:

    		return <Lounge enemyPosition = {this.props.enemyPosition} />
    		case 5:
            
    		return <CreepyHallway enemyPosition = {this.props.enemyPosition} />
        default:
        break;

    	}

    }
    render(){
    	return (
		 <div id="gameBackground">
          	<div id="camFeedView">
          	{this.getCamFeed()}
          	</div>
        </div>
    	)
    }
}

export default Front_Desk
