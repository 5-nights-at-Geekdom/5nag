import React, {Component} from 'react'
import Kitchen from './kitchen'
import Corner from './corner'
import Lounge from './lounge'
import MainHall from './main_hall'
import CreepyHallway from './creepy_hallway'

class Front_Desk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            enemy: false,
        }
    }
    getCamFeed(){
    	const cam = this.props.camFeed;

    	switch(cam) {
    		case 1:
    		return <Kitchen />
    		case 2:
    		return <MainHall />
    		case 3:
    		return <Corner />
    		case 4:
    		return <Lounge />
    		case 5:
    		return <CreepyHallway />
        default:
        break;

    	}

    }
    render(){
    	console.log(this.props.camFeed)
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
