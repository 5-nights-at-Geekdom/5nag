import React, {Component} from 'react'

class Lounge extends Component {
    constructor(props) {
        super(props)

        this.state = {
            enemy: false,
        }
    }
    render(){
    	return(
    		<div className="componentView" id="lounge"></div>
    	)
    }
}

export default Lounge
