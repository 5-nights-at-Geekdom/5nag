import React, {Component} from 'react'
import FrontDesk from './front_desk'
import Map from './map'
import ErrorPing from './error'
import ContinueModal from './continueModal'
import Death from './death'
import Clock from './clock'
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
        if(this.state.ping.cooldown === 0){
            this.setState({ping:{cooldown: 15}})
            let newPos = Math.floor(Math.random()*6) + 3
            if (this.state.counter < 3) {
                var newCount = 0
            }else {
                var newCount = this.state.counter - 3
            }
            this.setState({ counter: newCount, enemyPosition: newPos })
        }
        else {
            $("#errorMessage").show()
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

    continueScreen(){
        if (this.state.time === 0) {
            let newLevel = this.state.level + 1
            this.setState ({
                time: 120,
                gametime: 12,
                enemyPosition: 6,
                counter: 0,
                level: newLevel,
                currentCam: 1,
                ping:{
                    cooldown: 0,
                },
            });

            this.gameStart();

            $(".continue").hide();
        }

        console.log("DONT BE A CHEATER")

    }
    gameTimer(){
        // Increment time by 1 sec
        let newTime  = this.state.time - 1
        this.setState({ time: newTime})

        // Toggles Losing Screen

        if (this.state.enemyPosition === 0) {
            clearInterval(this.interval)
            $(".lose").show();
        }

        // toggles ping cooldown
        if (this.state.ping.cooldown !== 0) {
            let cooldown = this.state.ping.cooldown - 1
            this.setState({ping:{cooldown: cooldown}})
        } else {
            $("#errorMessage").hide()
        }
        console.log("this is the current enemy position:" + this.state.enemyPosition)
        console.log("this is the current camera:" + this.state.currentCam);

        // toggles level completed modal
        if (this.state.time <= 0) {
            console.log("Night survived")
            clearInterval(this.interval)
            $(".continue").show();
        }

        // moves the enemy
        if (this.state.time % 5 === 0 && this.state.enemyPosition !== this.state.currentCam) {
            this.enemyMovement()
            console.log("the cureent count is :" + this.state.counter);
        }

        // changes game hour
        if (this.state.time % 20 === 0) {
            let newHour = (this.state.gametime + 1) % 12
            this.setState({gametime: newHour})
        }

        // toggles pop up

        if (this.state.time % 15 === 0) {
            console.log("TEN SECONDS HAVE PASSED");
            if (this.state.enemyPosition === this.state.currentCam) {
                console.log("POP UP HAS POPPED");
                $(".popUp").show()
                this.enemyMovement()
            }
        }


    }

    gameStart(){
        this.interval = setInterval(() => {
            this.gameTimer()
        }, 1000);
    }

    componentDidMount(){

        this.gameStart();

    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render () {

        return(
          <div id='mainContainer'>


            <Clock clock={this.state.gametime} />
            <Map handleClick={this.handleClick.bind(this)} handlePing={this.handlePing.bind(this)} />
            <FrontDesk camFeed={this.state.currentCam} enemyPosition={this.state.enemyPosition} />
            <ErrorPing cooldown={this.state.ping.cooldown}/>
            <ContinueModal continueScreen={this.continueScreen.bind(this)} />
            <Death />

          </div>
        )
    }
}

export default Game
