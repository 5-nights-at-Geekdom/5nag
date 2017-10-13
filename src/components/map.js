import React, {Component} from 'react'

class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active_cam: 1,
        }
    }
    handleClick(camNum){
    	console.log("the CamNum is " + camNum)
    	this.setState({active_cam: camNum})
    }
    render(){
    	return(
    		<div id="map">
    			<button onClick={this.handleClick(1)}>Cam1</button>
    			<button onClick={this.handleClick(2)}>Cam2</button>
    			<button onClick={this.handleClick(3)}>Cam3</button>
    			<button onClick={this.handleClick(4)}>Cam4</button>
    			<button onClick={this.handleClick(5)}>Cam5</button>
    			<button onClick={this.handleClick(1)}>Ping</button>
    		</div>
    	)
    }

    //map needs to be included on all components
    //map will have all buttons to change component states
}

export default Map
