import React from 'react'
import { useParams } from 'react-router-dom'

function Notes() {
  const { id } = useParams()
  return <div>Notes {id}</div>
}

export default Notes
