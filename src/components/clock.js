import React, {Component} from 'react'

class Clock extends Component {
    constructor(props) {
        super(props)
    }

    render(){

        return(
            <div className="clock">{this.props.clock}:00 AM</div>
        )
    }
}

export default Clock
