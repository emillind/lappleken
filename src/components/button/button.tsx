import React from 'react'
import './button.css'

interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
}

function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
