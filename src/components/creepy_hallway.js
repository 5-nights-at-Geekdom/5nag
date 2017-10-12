import React, {Component} from 'react'

class Creepy_Hallway extends Component {
    constructor(props) {
        super(props)

        this.state = {
            enemy: false,
        }
    }
    render(){
    	return(
    		<div className="componentView" id="creepyHallway"></div>
    	)
    }
}

export default Creepy_Hallway
