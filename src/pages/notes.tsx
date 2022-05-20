import React, { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/button'
import ListInput from '../components/listInput'
import { getGameState } from '../utils/api'
import './notes.css'

function Notes() {
  const { id } = useParams()
  const [noOfNotes, setNoOfNotes] = useState(0)
  const [stagedNotes, setStagedNotes] = useState<string[]>([])

  useEffect(() => {
    const fetchGame = async () => {
      if (!id) return
      const gameState = await getGameState(id)
      setNoOfNotes(gameState.noOfNotes)
    }
    fetchGame()
  }, [id])

  const sendNotes = () => {
    // TODO
    alert(stagedNotes)
  }

  return (
    <div className="notes">
      <ListInput
        showInput={noOfNotes > stagedNotes.length || noOfNotes === 0}
        formLabel="Add new note"
        list={stagedNotes}
        setList={setStagedNotes}
      />

      <Button text="Enter notes" onClick={sendNotes} disabled={stagedNotes.length !== noOfNotes} />
    </div>
  )
}

export default Notes
