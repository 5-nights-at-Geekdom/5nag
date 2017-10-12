import React, {Component} from 'react'
import Front_Desk from './front_desk'
import Map from './map'

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: 0,
            gametime: 0,
            enemyPosition: 6,
            counter: 0,
            level: 1,
            currentCam: 1,
            ping:{
                charges: 1,
                cooldown: 13,
            },
        }
    }
    enemyMovement(){
       switch (this.state.level) {
          case 1:
              if(this.state.counter < 6){
                  let newPos = Math.floor(Math.random()*6) + 1;
                  let newCount = this.state.counter + 1;
                  this.setState({counter: newCount,enemyPosition: newPos});

              }else {
                  let newPos = this.state.enemyPosition - 1;
                  this.setState({enemyPosition: newPos});
              }
          break;
          case 2:
              if(this.state.counter < 5){
                  let newPos = Math.floor(Math.random()*6) + 1;
                  let newCount = this.state.counter + 1;
                  this.setState({counter: newCount,enemyPosition: newPos});

              }else {
                 let newPos = this.state.enemyPosition - 1;
                 this.setState({enemyPosition: newPos});
              }
          break;
          case 3:
              if(this.state.counter < 4){
                  let newPos = Math.floor(Math.random()*6) + 1;
                  let newCount = this.state.counter + 1;
                  this.setState({counter: newCount,enemyPosition: newPos});

              }else {
                  let newPos = this.state.enemyPosition - 1;
                  this.setState({enemyPosition: newPos});
              }
          break;
          case 4:
              if(this.state.counter < 2){
                  let newPos = Math.floor(Math.random()*6) + 1;
                  let newCount = this.state.counter + 1;
                  this.setState({counter: newCount,enemyPosition: newPos});

              }else {
                  let newPos = this.state.enemyPosition - 1;
                  this.setState({enemyPosition: newPos});
              }
          break;
          case 5:
              if(this.state.counter < 1){
                  let newPos = Math.floor(Math.random()*6) + 1;
                  let newCount = this.state.counter + 1;
                  this.setState({counter: newCount,enemyPosition: newPos});

              }else {
                  let newPos = this.state.enemyPosition - 1;
                  this.setState({enemyPosition: newPos});
              }
          break;
          case 6:
              if(this.state.counter < 1){
                  let newPos = Math.floor(Math.random()*6) + 1;
                  let newCount = this.state.counter + 1;
                  this.setState({counter: newCount,enemyPosition: newPos});

              }else {
                  let newPos = this.state.enemyPosition - 1;
                  this.setState({enemyPosition: newPos});
              }
          break;


           default:

       }
    }
    componentDidMount(){
        this.enemyMovement()
    }
    render () {
        console.log(this.state);
        return(
          <div id='mainContainer'>
            <Front_Desk camFeed={this.state.currentCam} />
            <Map />
          </div>
        )
    }
}

export default Game
