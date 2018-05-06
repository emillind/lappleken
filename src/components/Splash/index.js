import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Splash = (props) => {
  return (
    <div>
      <div className='controls'>
        <New/>
        <Join/>
      </div>
    </div>
  )
}

const New = () => (
  <nav>
    <Link to="/newgame"><div className='control'>Nytt spel</div></Link>
  </nav>
)

const Join = () => (
  <nav>
    <Link to="/joingame"><div className='control'>Anslut till spel</div></Link>
  </nav>
)

export default Splash
