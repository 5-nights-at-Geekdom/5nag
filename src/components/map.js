import React, {Component} from 'react'

class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentCam: 1,
        }
    }

    render(){
    	return(
    		<div id="map">
    			<button onClick={() => this.props.handleClick(1)}>Cam1</button>
    			<button onClick={() => this.props.handleClick(2)}>Cam2</button>
    			<button onClick={() => this.props.handleClick(3)}>Cam3</button>
    			<button onClick={() => this.props.handleClick(4)}>Cam4</button>
    			<button onClick={() => this.props.handleClick(5)}>Cam5</button>
    			<button onClick={() => this.props.handlePing()}>Ping</button>
    		</div>
    	)
    }

    //map needs to be included on all components
    //map will have all buttons to change component states
}

export default Map
