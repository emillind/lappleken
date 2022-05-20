import React, { useEffect, useState } from 'react'
import { ITeam } from '../../types'
import Button from '../button'
import Timer from '../timer/timer'
import './gameRunner.css'

interface GameRunnerProps {
  teams: ITeam[]
}

function GameRunner({ teams }: GameRunnerProps) {
  const [activeRound, setActiveRound] = useState(false)
  const [activeTeam, setActiveTeam] = useState(teams[0].name)
  const [teamsLeft, setTeamsLeft] = useState(teams.filter((_, i) => i !== 0))
  
  const startRoundHandler = () => {
      setActiveRound(true)
  }

  const finishRound = () => {
    if(teamsLeft.length > 0){
      const teams = teamsLeft
      const nextTeam = teams.shift()
      if(nextTeam){
        setActiveTeam(nextTeam.name)
      }
      setTeamsLeft(teams)
    }else{
      alert("No more teams")
    }
  }

  if (activeRound) {
    return (
    <div className="game-runner">
      {activeTeam}
      <Timer setActiveRound={setActiveRound} finishRound={finishRound}/>
    </div>)
  }

  return (
    <div className="game-runner">
      <h1>Next round {activeTeam}</h1>
      <Button text="Start round" onClick={startRoundHandler} />
    </div>
  )
}

export default GameRunner
