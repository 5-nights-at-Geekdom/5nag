import React, {Component} from 'react'
import FrontDesk from './front_desk'
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
    handleClick(camNum){
      this.enemyMovement()
      this.setState({currentCam: camNum})
      console.log("=================================================")
      console.log("the enemy is in room " + this.state.enemyPosition)
      this.enemyPresentInRoom()
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
    enemyPresentInRoom(){
      if (this.state.enemyPosition === this.state.currentCam){
        switch (this.state.currentCam) {

          case 1:
          console.log("I can see the enemy on cam 1")
          break;
          case 2:
          console.log("I can see the enemy on cam 2")
          break;
          case 3:
          console.log("I can see the enemy on cam 3")
          break;
          case 4:
          console.log("I can see the enemy on cam 4")
          break;
          case 5:
          console.log("I can see the enemy on cam 5")
          break;

          default:

        }
      } else {

      console.log("no enemy, all clear!!!")
      }
    }

    render () {
        return(
          <div id='mainContainer'>
            <Map handleClick={this.handleClick.bind(this)} />
            <FrontDesk camFeed={this.state.currentCam} />
          </div>
        )
    }
}

export default Game
