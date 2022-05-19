import React from 'react'
import './button.css'

interface ButtonProps {
  text: string
  onClick: () => void
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
