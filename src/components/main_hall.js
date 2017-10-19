import React, {Component} from 'react'

class Main_Hall extends Component {
    constructor(props) {
        super(props)

    }
    render(){
        if (this.props.enemyPosition === 1) {
            return(
                <div className = "componentView" id="eMainHall"></div>
            )
        }
        return(
            <div className="componentView" id="mainHall"></div>
        )
    }
}

export default Main_Hall
