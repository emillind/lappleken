import React from 'react'
import './style.css'

class JoinGame extends React.Component {
  constructor (props) {
    super(props)
    this.state = {id: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({id: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    let { history } = this.props
    let redirectURL = '/game/' + this.state.id + '/enter'
    history.push(redirectURL)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className='form-label'>
            <p id='id-label'>Ange spel-id</p>
            <input className='text-input' type='text' name='game-id' placeholder="Ex. 123456" value={this.state.id} onChange={this.handleChange}/>
          </label>
      </form>
      </div>
    )
  }
}

export default JoinGame;
