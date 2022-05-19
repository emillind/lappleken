import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGameState } from '../utils/api'

function Notes() {
  const { id } = useParams()
  const [ notesLimit, setNotesLimit ] = useState(0)
  const [ noteTextEntry, setNoteTextEntry ] = useState('')
  const [ stagedNotes, setStagedNotes ] = useState<string[]>([])

  useEffect(() => {
    const fetchGame = async () => {
      if (!id) return
      const { noteCount } = await getGameState(id)
      setNotesLimit(noteCount)
    }
    fetchGame()
  }, [id])

  const sendNotes = () => {
    // TODO
  }

  return notesLimit === 0 ? 
  <div/> 
  :
  (
    <div>
      <div>
        <label htmlFor="note-input">Add new note</label>
        <input 
          type="text" 
          placeholder="e.g. Albert Einstein"
          id="note-input"
          value={noteTextEntry}
          onChange={(e) => setNoteTextEntry(e.target.value)}
        />
        <button onClick={() => {
          setStagedNotes([...stagedNotes, noteTextEntry])
        }}>
          Add note
        </button>
      </div>

      {stagedNotes.map((noteText, noteIndex)=> (
        <div key={noteText}>
          <div>
            {noteText}
          </div>
          <button onClick={
            e => {
              setStagedNotes(stagedNotes.filter((_, index) => index !== noteIndex))
            }} >
            Remove
          </button>
        </div>
      ))}

      <button onClick={sendNotes}>Enter notes</button>
    </div>
  )
}

export default Notes
