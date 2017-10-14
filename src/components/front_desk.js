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
            console.log("looking at cam 1: Kitchen")
    		return <Kitchen />
    		case 2:
            console.log("looking at cam 2: MainHall")
    		return <MainHall />
    		case 3:
            console.log("looking at cam 3: Corner")
    		return <Corner />
    		case 4:
            console.log("looking at cam 4: Lounge")
    		return <Lounge />
    		case 5:
            console.log("looking at cam 5: CreepyHallway")
    		return <CreepyHallway />
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
