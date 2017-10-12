import React, {Component} from 'react'

class Corner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            enemy: false,
        }
    }
    render(){
    	return(
    		<div className="componentView" id="corner"></div>
    	)
    }
}

export default Corner
