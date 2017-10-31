import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Credits extends Component {
    constructor(props) {
        super(props)
    }

    render(){
    	return (
          	<div id="credits">
          	 <Link to={'/'}>Back to Menu</Link>
             <div id="createdBy">Created by</div>
             <div className="names">Cody Hastings</div>
             <div className="names">Daniel Rojo</div>
             <div className="names">Adam Age</div>	
             <div id="reactDiv">Created using</div>
             <div className="names">React.js</div>
             <div className="names">React-Router</div>
             <div className="names">Jquery</div> 
          	</div>
    	)
    }
}

export default Credits