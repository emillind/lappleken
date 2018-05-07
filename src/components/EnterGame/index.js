import React from 'react'

class EnterGame extends React.Component {
  render () {
    let { name, match } = this.props
    let gameName = name || 'Omgångsnamn'
    return (
      <div>
        <p>{gameName}</p>
        <p>{match.params.id}</p>
      </div>
    )
  }
}

export default EnterGame;
