import React, { useState } from 'react'
import { setupGame } from '../utils/api'
import { useNavigate } from 'react-router-dom'

function Start() {
  const [name, setName] = useState('')
  const [teamSize, setTeamSize] = useState(2)
  const [notes, setNotes] = useState(3)
  const navigate = useNavigate()

  const startGame = () => {
    let id
    setupGame(name, teamSize, notes)
    .then(res => {
      id = res.data
      navigate(`/${id}`, { replace: true })
    })
    .catch(err => {
      alert(err)
    })
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Name of the game</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="team-size">Team size</label>
        <input
          type="number"
          name="team-size"
          id="team-size"
          value={teamSize}
          onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
        />
      </div>

      <div>
        <label htmlFor="note-count">Notes per person</label>
        <input
          type="number"
          name="note-count"
          id="note-count"
          value={notes}
          onChange={(e) => setNotes(parseInt(e.target.value, 10))}
        />
      </div>

      <button onClick={startGame}>Start game</button>
    </div>
  )
}

export default Start
