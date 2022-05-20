import React, { FormEvent, useState } from 'react'
import Input from '../input'
import './listInput.css'

interface ListInputProps {
  formLabel: string
  list: string[]
  setList: (newList: string[]) => void
  showInput: boolean
}

function ListInput({ formLabel, list, setList, showInput }: ListInputProps) {
  const [value, setValue] = useState('')

  const addListItem = (e: FormEvent): void => {
    e.preventDefault()
    if (list.includes(value)) return
    setList([...list, value])
    setValue('')
  }

  const removeListItem = (index: number) => {
    setList(list.filter((_, i) => i !== index))
  }

  return (
    <div className="list-input">
      {showInput && (
        <form onSubmit={addListItem}>
          <Input
            id="note-input"
            label={formLabel}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      )}

      {list.map((listItem, index) => (
        <div key={listItem} className="list-item">
          <div className="text">{listItem}</div>
          <button className="remove" onClick={() => removeListItem(index)}>
            <img src="/delete.svg" alt="delete" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default ListInput
