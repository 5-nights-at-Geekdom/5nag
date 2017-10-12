import React, {Component} from 'react'
import Kitchen from './kitchen'
import Corner from './corner'
import Lounge from './lounge'
import Main_Hall from './main_hall'

class Front_Desk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            enemy: false,
        }
    }
    getCamFeed(){
    	console.log('hi daniel')
    	const cam = this.props.camFeed;

    	switch(cam) {
    		case 1:
    		return <Kitchen />
    		case 2: 
    		return <Main_Hall />
    		
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
