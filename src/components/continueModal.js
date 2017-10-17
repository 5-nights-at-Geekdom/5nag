import React, {Component} from 'react'

class ContinueModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (

            <div className="continue">

                <button
                onClick={()=> this.props.continueScreen()}
                >Next Level</button>

            </div>


        )
    }
}

export default ContinueModal
