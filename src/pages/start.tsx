import React, { useState } from 'react'
import { setupGame } from '../utils/api'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button'
import Input from '../components/input'
import './start.css'
import Points from '../components/points'

function Start() {
  const [name, setName] = useState('')
  const [teamCount, setTeamCount] = useState(2)
  const [noteCount, setNoteCount] = useState(3)
  const navigate = useNavigate()

  const startGame = () => {
    let id
    setupGame(name, teamCount, noteCount)
      .then((res) => {
        id = res.data
        navigate(`/${id}`, { replace: true })
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <div className="start">
      <Input
        label="Name of the game"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />

      <Input
        label="Notes per person"
        id="note-count"
        value={noteCount}
        onChange={(e) => setNoteCount(parseInt(e.target.value, 10))}
        type="number"
      />

      <Button onClick={startGame} text="Start game" />
    </div>
  )
}

export default Start
