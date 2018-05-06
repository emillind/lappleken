import React from 'react'
import './style.css'
import check from '../../resources/check.svg'

const availableGames = [
  {
    name: 'Med andra ord',
    description: 'Lorem ipsum...'
  },
  {
    name: 'Med ett ord',
    description: 'Lorem ipsum...'
  },
  {
    name: 'Charader',
    description: 'Lorem ipsum..'
  },
  {
    name: 'Nynna',
    description: 'Lorem ipsum..'
  }
]

const getGames = () => {
  return availableGames.map(game => Object.assign(game, {checked: false}))
}

class NewGame extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.state = {
      name: '',
      games: getGames()
    }
  }

  handleStart (e) {
    e.preventDefault()
    console.log(this.state)
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({name: e.target.value})
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

  render () {
    let { games } = this.state
    return (
      <div className='content'>
        <h2 className='form-title'>Omgångsnamn</h2>
        <input className='text-input' value={this.state.name} onChange={this.handleChange}/>
        <h2 className='form-title'>Delgrenar</h2>
        <div className='games'>
          {games.map((game, i) => {
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
          })}
        </div>
        <a onClick={this.handleStart}>
          <div className='start'>Starta omgång</div>
        </a>
      </div>
    )
  }
}

export default NewGame;
