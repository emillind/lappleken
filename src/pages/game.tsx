import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/button'
import Points from '../components/points'
import { getGameState, IGameState } from '../utils/api'
import './game.css'

function Game() {
  const { id } = useParams()
  const [gameState, setGameState] = useState<IGameState | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const fetchGame = async () => {
      if (!id) return
      const gameState = await getGameState(id)
      setGameState(gameState)
    }
    fetchGame()
  }, [id])

  const startGame = () => {
    alert('start')
    setStarted(true)
  }

  if (!gameState) return <div className="game">Could not find game with ID {id}</div>

  if (!started) {
    return (
      <div className="game">
        <p>
          Go to <strong>localhost:3000/{id}/notes</strong> to add your notes
          <br />
          <br />
          There are currently {gameState.notes.length} notes in the game
        </p>
        <Button text="Start game" onClick={startGame} />
      </div>
    )
  }

  return (
    <div className="game">
      <Points teams={gameState.teams} />
    </div>
  )
}

export default Game
