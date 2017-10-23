import React, {Component} from 'react'
import $ from 'jquery'


class Pop_Up extends Component {
    constructor(props) {
        super(props)
    }

    handleClick(){
    	$("#popUp").hide()
    }

    render(){
    	return (
          	<div id="popUp" className="popUpView">
          		<div className="littleX" onClick={() => this.handleClick()}></div>
          		<div className="clickMe" ></div>
          	</div>
    	)
    }
}

export default Pop_Up