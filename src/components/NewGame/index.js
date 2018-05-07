import React from 'react'
import './style.css'
import check from '../../resources/check.svg'
import { getGames } from '../../services/games'
import { nextID } from '../../services/gamefunctions'

class NewGame extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.state = {
      name: '',
      notes: 2,
      games: getGames()
    }
  }

  handleStart (e) {
    let { history } = this.props
    e.preventDefault()
    let redirectURL = '/game/' + nextID() + '/enter'
    history.push(redirectURL)
  }

  handleChange (e) {
    e.preventDefault()
    if (e.target.name === 'notes') this.setState({notes: e.target.value})
    if (e.target.name === 'name') this.setState({name: e.target.value})
  }

  handleClick (e, name) {
    e.preventDefault()
    let prevGames = this.state.games
    let newGames = prevGames.map(game => {
      game.checked = game.name === name ? !game.checked : game.checked
      return game
    })
    this.setState({games: newGames})
  }

  gamesList(games) {
    return games.map((game, i) => {
      return (
        <div key={i} className='box'>
          <div className='game'>
            <p className='game-name'>{game.name}
            </p>
            <a onClick={(e) => this.handleClick(e, game.name)}>
              <div className='checkbox'>
                {game.checked ? (<img src={check} className="checkmark" alt="checkmark" />) : ''}
              </div>
            </a>
          </div>
          <p className='game-description'>{game.description}
          </p>
        </div>
      )
    })
  }

  render () {
    let { games } = this.state
    return (
      <div className='content'>
        <h2 className='form-title'>Omgångsnamn</h2>
        <input
          className='text-input'
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}/>
        <h2 className='form-title'>Antal lappar per spelare</h2>
        <input
          className='text-input'
          type='number'
          name='notes'
          min={0}
          value={this.state.notes}
          onChange={this.handleChange}/>
        <h2 className='form-title'>Delgrenar</h2>
        <div className='games'>
          {this.gamesList(games)}
        </div>
        <a onClick={this.handleStart}>
          <div className='start'>Starta omgång</div>
        </a>
      </div>
    )
  }
}

export default NewGame;
