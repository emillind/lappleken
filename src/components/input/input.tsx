import React, { ChangeEventHandler } from 'react'
import './input.css'

interface InputProps {
  label: string
  onChange: ChangeEventHandler<HTMLInputElement>
  value: any
  type: string
  id: string
  placeholder?: string
}

function Input({ label, id, type, value, onChange, placeholder }: InputProps) {
  return (
    <div className="wrapper">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className="input"
        placeholder={placeholder}
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
