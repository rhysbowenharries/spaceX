import React from 'react'
import spaceXLogo from '../assets/spacex-logo.png'
import './Header.scss'

const Header = () => {
  return (
    <div className="logo-container">
      <img src={spaceXLogo} alt="SpaceX Logo" className="logo" />
      <p className="logo-text">LAUNCHES</p>
    </div>
  )
}

export default Header