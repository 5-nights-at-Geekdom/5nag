import React, {Component} from 'react'

class Corner extends Component {
    constructor(props) {
        super(props)

    }
    render(){
        if (this.props.enemyPosition === 4) {
            return(
                <div className = "componentView" id="eCorner"></div>
            )
        }
        return(
            <div className="componentView" id="corner"></div>
        )
    }
}

export default Corner
