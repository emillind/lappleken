import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import logo from '../../logo.svg';

const Header = (props) => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Lappleken</h1>
    </div>
  )
}

export default Header
