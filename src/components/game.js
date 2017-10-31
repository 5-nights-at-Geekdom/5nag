import React, {Component} from 'react'
import FrontDesk from './front_desk'
import Map from './map'
import ErrorPing from './error'
import ContinueModal from './continueModal'
import Death from './death'
import Clock from './clock'
import PopUp from './popup'
import WinScreen from './winScreen'
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
            sounds:{
                catScream: new Audio('/sounds/Cat_Scream.mp3'),
                creepyBackground: new Audio('/sounds/creepy-background.mp3'),
                suspense: new Audio('/sounds/Incoming_Suspense.mp3'),
                loudBang: new Audio('/sounds/Loud_Bang.mp3'),
                creakingDoor: new Audio('/sounds/creaking_door.mp3'),
                camSwitch: new Audio('/sounds/camSwitch.mp3'),
                camPing: new Audio('/sounds/ping.mp3'),
                alarmClock: new Audio('/sounds/alarmClock.mp3'),
                dixieHorn: new Audio('/sounds/alarmClock.mp3'),
                monster: new Audio('/sounds/monster.mp3'),
            }
        }
    }
    /*************** CLICKS **************/
    handleClick(camNum){
      this.state.sounds.camSwitch.play()
      this.setState({currentCam: camNum})
    }

    handlePing(){
        if(this.state.ping.cooldown === 0){
            this.state.sounds.camPing.play()
            this.setState({ping:{cooldown: 15}})
            let newPos = Math.floor(Math.random()*6) + 3
            if (this.state.counter < 3) {
                var newCount = 0
            }else {
                var newCount = this.state.counter - 3
            }
            this.setState({ counter: newCount, enemyPosition: newPos })

            $("#ping").addClass('clicked')
        }
        else {
            $("#errorMessage").show()
        }

    }


/****************************************************/

    /************* ENEMY MOVEMENT ***************/

    enemyMovement(){
      var newPos = Math.floor(Math.random()*6) + 1
       switch (this.state.level) {
          case 1:
              if(this.state.counter < 6){
                 while(newPos === this.state.currentCam){
                    newPos = Math.floor(Math.random()*6) + 1
                 }
                 let newCount = this.state.counter + 1
                 this.setState({counter: newCount,enemyPosition: newPos})

              }else {
                if(this.state.currentCam === this.state.enemyPosition) {
                   newPos = this.state.enemyPosition - 2
                  this.setState({enemyPosition: newPos})
                } else {
                   newPos = this.state.enemyPosition - 1
                  this.setState({enemyPosition: newPos})
                }
              }
          break
          case 2:
              if(this.state.counter < 5){
                  while(newPos === this.state.currentCam){
                    newPos = Math.floor(Math.random()*6) + 1
                 }
                 let newCount = this.state.counter + 1
                 this.setState({counter: newCount,enemyPosition: newPos})

              }else {
                  if(this.state.currentCam === this.state.enemyPosition) {
                     newPos = this.state.enemyPosition - 2
                    this.setState({enemyPosition: newPos})
                  } else {
                     newPos = this.state.enemyPosition - 1
                    this.setState({enemyPosition: newPos})
                  }
              }
          break
          case 3:
              if(this.state.counter < 4){
                  while(newPos === this.state.currentCam){
                    newPos = Math.floor(Math.random()*6) + 1
                 }
                 let newCount = this.state.counter + 1
                 this.setState({counter: newCount,enemyPosition: newPos})

              }else {
                  if(this.state.currentCam === this.state.enemyPosition) {
                     newPos = this.state.enemyPosition - 2
                    this.setState({enemyPosition: newPos})
                  } else {
                     newPos = this.state.enemyPosition - 1
                    this.setState({enemyPosition: newPos})
                  }
              }
          break
          case 4:
              if(this.state.counter < 2){
                  while(newPos === this.state.currentCam){
                    newPos = Math.floor(Math.random()*6) + 1
                 }
                 let newCount = this.state.counter + 1
                 this.setState({counter: newCount,enemyPosition: newPos})

              }else {
                  if(this.state.currentCam === this.state.enemyPosition) {
                     newPos = this.state.enemyPosition - 2
                    this.setState({enemyPosition: newPos})
                  } else {
                     newPos = this.state.enemyPosition - 1
                    this.setState({enemyPosition: newPos})
                  }
              }
          break
          case 5:
              if(this.state.counter < 1){
                  while(newPos === this.state.currentCam){
                    newPos = Math.floor(Math.random()*6) + 1
                 }
                 let newCount = this.state.counter + 1
                 this.setState({counter: newCount,enemyPosition: newPos})

              }else {
                  if(this.state.currentCam === this.state.enemyPosition) {
                     newPos = this.state.enemyPosition - 2
                    this.setState({enemyPosition: newPos})
                  } else {
                     newPos = this.state.enemyPosition - 1
                    this.setState({enemyPosition: newPos})
                  }
              }
          break
          case 6:
              if(this.state.counter < 1){
                  while(newPos === this.state.currentCam){
                    newPos = Math.floor(Math.random()*6) + 1
                 }
                 let newCount = this.state.counter + 1
                 this.setState({counter: newCount,enemyPosition: newPos})

              }else {
                  if(this.state.currentCam === this.state.enemyPosition) {
                     newPos = this.state.enemyPosition - 2
                    this.setState({enemyPosition: newPos})
                  } else {
                     newPos = this.state.enemyPosition - 1
                    this.setState({enemyPosition: newPos})
                  }
              }
          break


           default:

       }
    }


/***********************************************************/

/********************* CONTINUE FUNCTION *******************/
    continueScreen(){
        if (this.state.time === 0) {
            if (this.state.level === 5) {
                this.state.sounds.creepyBackground.pause()
                this.state.sounds.dixieHorn.play()
                $('.win').show()
            }else {
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
                })

                this.gameStart()

                $(".continue").hide()
            }

        }



    }

/**************************************************************/


    /************* CONTROLS ALL GAME FUNCTIONS THAT REACT TO TIME ****************/
    gameTimer(){
        // Increment time by 1 sec
        let newTime  = this.state.time - 1
        this.setState({ time: newTime})

        // Toggles Losing Screen

        if (this.state.enemyPosition === 0) {
            this.state.sounds.creepyBackground.pause()
            clearInterval(this.interval)

            $("#gameBackground").animate({opacity: '0.2'}, 3000)
            $("#map").animate({opacity: '0.2'}, 3000)
            setTimeout(function(){
              $("#gameOverWrapper").show()
            }, 3000)
              setTimeout(function(){
              $(".lose").show()
            }, 3500)
            setTimeout(function(){
              $("#gameOver").show()
            }, 6000)
        }

        // toggles ping cooldown
        if (this.state.ping.cooldown !== 0) {
            let cooldown = this.state.ping.cooldown - 1
            this.setState({ping:{cooldown: cooldown}})
        } else {
            $("#ping").removeClass('clicked')
            $("#errorMessage").hide()
        }



        // toggles level completed modal
        if (this.state.time <= 0) {
            if (this.state.level === 5) {

                clearInterval(this.interval)
                $(".win").show()

            }

            clearInterval(this.interval)
            $(".continue").show()
        }

        // moves the enemy
        if (this.state.time % 5 === 0 && this.state.enemyPosition !== this.state.currentCam) {
            this.enemyMovement()

        }

        // changes game hour
        if (this.state.time % 20 === 0) {
            let newHour = (this.state.gametime + 1) % 12
            this.setState({gametime: newHour})
            let randomSound = Math.floor(Math.random()*4) + 1



            switch (randomSound) {
                case 1:
                    this.state.sounds.catScream.play()
                    break
                case 2:
                    this.state.sounds.loudBang.play()
                    break
                case 3:
                    this.state.sounds.creakingDoor.play()
                    break
                case 4:
                    this.state.sounds.alarmClock.play()
                    break
                default:

            }
        }

        // toggles pop up

        if (this.state.time % 7 === 0) {
            if (this.state.enemyPosition === this.state.currentCam) {

                $("#popUp").show()
                this.enemyMovement()
            }
        }


    }

/******************************************************************/

/******************* START AND END GAME FUNCTIONS *****************/
    gameStart(){

        this.interval = setInterval(() => {
            this.gameTimer()
        }, 1000)
        this.props.thunderstorm.pause()
        this.state.sounds.creepyBackground.play()
    }

    gameEnd(){
        clearInterval(this.interval)
        this.state.sounds.creepyBackground.pause()
    }

    componentDidMount(){

        this.gameStart()

    }

    componentWillUnmount(){
        this.gameEnd()
    }
/**************************************************************/
    render () {

        return(
          <div id='mainContainer'>
            <Clock clock={this.state.gametime} />
            <Map handleClick={this.handleClick.bind(this)} handlePing={this.handlePing.bind(this)} />
            <FrontDesk camFeed={this.state.currentCam} enemyPosition={this.state.enemyPosition} />
            <ErrorPing cooldown={this.state.ping.cooldown}/>
            <ContinueModal continueScreen={this.continueScreen.bind(this)} />
            <Death />
            <PopUp />
            <WinScreen />


          </div>
        )
    }
}

export default Game
