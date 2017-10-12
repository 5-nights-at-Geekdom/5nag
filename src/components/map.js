import React, {Component} from 'react'

class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active_cam: 1,
        }
    }
    render(){
    	return(
    		<div id="map"></div>
    	)
    }

    //map needs to be included on all components
    //map will have all buttons to change component states
}

export default Map
