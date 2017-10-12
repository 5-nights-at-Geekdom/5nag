import React, {Component} from 'react'

class Main_Hall extends Component {
    constructor(props) {
        super(props)

        this.state = {
            enemy: false,
        }
    }
    render(){
    	return(
    		<div className="componentView" id="mainHall"></div>
    	)
    }
}

export default Main_Hall
