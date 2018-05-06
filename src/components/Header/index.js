import React from 'react'
import './style.css'
import logo from '../../resources/logo.svg';
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className='header'>
      <Link to="/">
        <img src={logo} className="header-logo" alt="logo" />
      </Link>
      <h1 className="header-title">Lappleken</h1>
    </div>
  )
}

export default Header
