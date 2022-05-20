import React from 'react'
import { ITeam } from '../../types'
import './points.css'

interface PointsProps {
  teams: ITeam[]
}

function Points({ teams }: PointsProps) {
  return (
    <div className="points">
      <h2 className="title">Points</h2>
      <div className="teams">
        {teams.map(({ name, points }) => {
          return (
            <p key={name} className="team">
              <strong>{name}</strong>: {points}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Points
