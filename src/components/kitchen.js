import React, {Component} from 'react'

class Kitchen extends Component {
    constructor(props) {
        super(props)

    }
    render(){
        if (this.props.enemyPosition === 3) {
            return(
                <div className = "componentView" id="eKitchen"></div>
            )
        }
        return(
            <div className="componentView" id="kitchen"></div>
        )
    }
}

export default Kitchen
