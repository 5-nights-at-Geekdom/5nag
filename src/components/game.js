import React, {Component} from 'react'
import FrontDesk from './front_desk'
import Map from './map'
import ErrorPing from './error'
import $ from 'jquery'

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: 120,
            gametime: 12,
            enemyPosition: 6,
            counter: 0,
            level: 1,
            currentCam: 1,
            ping:{
                cooldown: 0,
            },
        }
    }
    handleClick(camNum){
      this.setState({currentCam: camNum})
    }

    handlePing(){
        if(this.state.ping.cooldown == 0){
            this.setState({ping:{cooldown: 11}})    
        }
        let newPos = Math.floor(Math.random()*6) + 3;
        if (this.state.ping.cooldown !== 0) {
            $("#errorMessage").show()
        }
        if (this.state.counter < 3) {
            var newCount = 0
        }else {
            var newCount = this.state.counter - 3
        }
        this.setState({ counter: newCount, enemyPosition: newPos })

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
    gameTimer(){
        let newTime  = this.state.time - 1
        this.setState({ time: newTime})
        if (this.state.ping.cooldown !== 0) {
            let cooldown = this.state.ping.cooldown - 1
            this.setState({ping:{cooldown: cooldown}})
        } else {
            $("#errorMessage").hide()
        }
        console.log(this.state.enemyPosition)
        if (this.state.time <= 0) {
            console.log("Night survived")
            clearInterval(this.interval)
            let newLevel = this.state.level + 1
            this.setState ({
                time: 120,
                gametime: 12,
                enemyPosition: 6,
                counter: 0,
                level: newLevel,
                currentCam: 1,
                ping:{
                    charges: 1,
                    cooldown: 11,
                },
            });


        }
        if (this.state.time % 5 === 0) {
            this.enemyMovement()
            console.log("the cureent count is :" + this.state.counter);
        }
        if (this.state.time % 20 === 0) {
            let newHour = this.state.gametime + 1
            this.setState({gametime: newHour})
            console.log(this.state.gametime)
        }

    }

    componentDidMount(){

        this.interval = setInterval(() => {
            this.gameTimer()
        }, 1000);

    }

    render () {

        return(
          <div id='mainContainer'>
            <FrontDesk camFeed={this.state.currentCam} enemyPosition={this.state.enemyPosition} />
            <Map handleClick={this.handleClick.bind(this)} handlePing={this.handlePing.bind(this)} />
            <ErrorPing cooldown={this.state.ping.cooldown}/>
          </div>
        )
    }
}

export default Game
