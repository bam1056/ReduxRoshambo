import React, { Component } from 'react'
import _ from 'underscore'
import OUTCOMES from './data.json'

class Main extends Component {
  static propTypes = {
    incrementPlayer: React.PropTypes.func,
    incrementComputer: React.PropTypes.func,
    declareTie: React.PropTypes.func,
    computerWinCount: React.PropTypes.number,
    playerWinCount: React.PropTypes.number,
    message: React.PropTypes.string
  }
  someOnePressedTheButton = (event) => {
    const outcomes = OUTCOMES.OUTCOMES
    let humanGuess = event.target.innerText
    let computerGuess = _.sample(['Rock', 'Paper', 'Scissors'])
    let whoWins = outcomes.find((outcome) => {
      return (outcome[0] === computerGuess && outcome[1] === humanGuess)
    })[2]
    if (whoWins === 'player') {
      const message = `The Player chose:${humanGuess} and the Computer chose:${computerGuess}. The winner is ${whoWins}!`
      this.props.incrementPlayer(message)
    } else if (whoWins === 'computer') {
      const message = `The Player chose: ${humanGuess} and the Computer chose: ${computerGuess}. The winner is ${whoWins}!`
      this.props.incrementComputer(message)
    } else {
      const message = `The Player chose: ${humanGuess} and the Computer chose: ${computerGuess}. It's a tie!`
      this.props.declareTie(message)
    }
  }

  render () {
    return <div>
      <h1>Ro Sham Bo!</h1>
      <div className='output'>
        <p>Computer Win Count: {this.props.computerWinCount}</p>
        <p>Player Win Count: {this.props.playerWinCount}</p>
        <p>{this.props.message}</p>
      </div>
      <div className='input'>
        <button onClick={this.someOnePressedTheButton} className='rock'>Rock</button>
        <button onClick={this.someOnePressedTheButton} className='scissors'>Scissors</button>
        <button onClick={this.someOnePressedTheButton} className='paper'>Paper</button>
      </div>
    </div>
  }
}
export default Main
