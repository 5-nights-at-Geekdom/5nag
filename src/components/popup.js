import React, {Component} from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'


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
          		<a className="clickMe" href="https://geekdom.com/join-us/" target="_blank">Click Me</a>
          	</div>
    	)
    }
}

export default Pop_Up