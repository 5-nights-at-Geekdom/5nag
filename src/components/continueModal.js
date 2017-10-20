import React, {Component} from 'react'

class ContinueModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (

            <div className="continue">
                <div>

                    <h1>YOU SURVIVED THE NIGHT</h1>
                    <h2>CLICK TO CONTINUE TO NEXT NIGHT</h2>

                    <button
                    onClick={()=> this.props.continueScreen()}
                    >Next Level
                    </button>

                </div>

            </div>


        )
    }
}

export default ContinueModal
