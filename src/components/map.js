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
    			<button className="btn" onClick={() => this.props.handleClick(1)}>Cam 1</button>
    			<button className="btn" onClick={() => this.props.handleClick(2)}>Cam 2</button>
    			<button className="btn" onClick={() => this.props.handleClick(3)}>Cam 3</button>
    			<button className="btn" onClick={() => this.props.handleClick(4)}>Cam 4</button>
    			<button className="btn" onClick={() => this.props.handleClick(5)}>Cam 5</button>
    			<button className="btn" id="ping"onClick={() => this.props.handlePing()}>Ping</button>
    		</div>
    	)
    }

    //map needs to be included on all components
    //map will have all buttons to change component states
}

export default Map
