import React, {Component} from 'react'

class Lounge extends Component {
    constructor(props) {
        super(props)

    }
    render(){
        if (this.props.enemyPosition === 4) {
            return(
                <div className = "componentView" id="eLounge"></div>
            )
        }
        return(
            <div className="componentView" id="lounge"></div>
        )
    }
}

export default Lounge
