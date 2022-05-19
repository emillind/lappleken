import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGameState } from '../utils/api'

function Notes() {
  const { id } = useParams()
  const [notes, setNotes] = useState<string[]>([])

  useEffect(() => {
    const fetchGame = async () => {
      if (!id) return
      const { noteCount } = await getGameState(id)
      const initialNotes = []
      for (let i = 0; i < noteCount; i++) {
        initialNotes.push('')
      }
      setNotes(initialNotes)
    }
    fetchGame()
  }, [id])

  return (
    <div>
      Game id: {id}, Notes: [{notes.map((note) => note + ', ')}]
    </div>
  )
}

export default Notes
