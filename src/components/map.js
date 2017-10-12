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
    		<div id="map">
    			<button>Cam1</button>
    			<button>Cam2</button>
    			<button>Cam3</button>
    			<button>Cam4</button>
    			<button>Cam5</button>
    			<button>Ping</button>
    		</div>
    	)
    }

    //map needs to be included on all components
    //map will have all buttons to change component states
}

export default Map
