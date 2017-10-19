import React, {Component} from 'react'

class Creepy_Hallway extends Component {
    constructor(props) {
        super(props)

    }
    render(){
        if (this.props.enemyPosition === 5) {
            return(
                <div className = "componentView" id="eCreepyHallway"></div>
            )
        }
        return(
            <div className="componentView" id="creepyHallway"></div>
        )
    }
}

export default Creepy_Hallway
