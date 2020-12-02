import React from 'react'

import spaceXLogo from '../../assets/spacex-logo.png'
import reloadIcon from "../../assets/icon/refresh.png"
import './Header.scss'

const Header = () => {
  return (
    <div className="logo-container">
      <img src={spaceXLogo} alt="SpaceX Logo" className="logo" />
      <p className="logo-text">LAUNCHES</p>
      <button className="reload-button">
        <p className="button-content"> Reload Data </p>
        <img src={reloadIcon} alt="Reload Icon" className="icon" />

      </button>
    </div>
  )
}

export default Header