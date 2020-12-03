import React from 'react'
import DisplayButtons from './displayButtons/DisplayButtons'
import Header from './header/Header'
import LaunchList from './launchList/LaunchList'

import launchImage from '../assets/img/launch-home.png'

import './App.scss'

const App = () => {
  return (
    <>
      <div className="header-container"><Header /></div>
      <div className="body-container">
        <div className="image-container">
          <img src={launchImage} alt="SpaceX Launch" className="launch-image" />
        </div>
        <div className="display-buttons-container"><DisplayButtons /></div>
        <div className="list-container"><LaunchList /></div>
      </div>
    </>
  )
}

export default App