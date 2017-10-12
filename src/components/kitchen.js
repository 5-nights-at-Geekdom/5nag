import React, {Component} from 'react'

class Kitchen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            enemy: false,
        }
    }
    render(){
    	return(
    		<div className="componentView" id="kitchen"></div>
    	)
    }
}

export default Kitchen
