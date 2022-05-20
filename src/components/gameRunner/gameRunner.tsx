import React, { useState } from 'react'
import { ITeam } from '../../types'
import Button from '../button'
import './gameRunner.css'

interface GameRunnerProps {
  teams: ITeam[]
}

function GameRunner({ teams }: GameRunnerProps) {
  const [activeRound, setActiveRound] = useState(false)

  const getNextTeam = () => {
    return teams.find((team) => team.next)?.name
  }

  const getActiveTeam = () => {
    return teams.find((team) => team.active)?.name
  }

  const startRoundHandler = () => {
    // TODO
  }

  if (activeRound) {
    return <div className="game-runner"></div>
  }

  return (
    <div className="game-runner">
      <h1>Next round {getNextTeam()}</h1>
      <Button text="Start round" onClick={startRoundHandler} />
    </div>
  )
}

export default GameRunner
