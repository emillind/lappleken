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

  const sendNotes = () => {
    // TODO
  }

  return (
    <div>
      Game id: {id}, Notes: [{notes.map((note) => note + ', ')}]
      {notes.map((note, i) => {
        const noteId = 'note-' + i
        return (
          <div key={noteId}>
            <br />
            <input
              type="text"
              name={noteId}
              id={noteId}
              value={note}
              onChange={(e) => {
                const newNotes = [...notes]
                newNotes[i] = e.currentTarget.value
                setNotes(newNotes)
              }}
            />
          </div>
        )
      })}
      {/* TODO: DISABLE */}
      <button onClick={sendNotes}>Send notes</button>
    </div>
  )
}

export default Notes
