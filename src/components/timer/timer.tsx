import React, { useEffect, useState } from 'react'

interface TimerProps {
  setActiveRound:React.Dispatch<React.SetStateAction<boolean>>
  finishRound: () => void
}

function Timer({setActiveRound, finishRound}:TimerProps) {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {
      if(countdown < 2){
        alert("Slut på tid!")
        setActiveRound(false)
        finishRound()
      }
      setCountdown(countdown - 1);
    }, 1000);
  
    return () => clearInterval(interval);
  }, [countdown])

  return <p>{countdown}</p>
}

export default Timer
