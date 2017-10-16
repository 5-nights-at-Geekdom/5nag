import React, {Component} from 'react'

class ErrorPing extends Component {
    constructor(props) {
        super(props)

    }

    render(){
        return (
            <div id="errorMessage">ERROR::YOU MUST WAIT {this.props.cooldown} SECONDS </div>
        )

    }
}
export default ErrorPing
