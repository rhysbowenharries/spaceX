import React from 'react'
import Header from './Header'
import LaunchList from './LaunchList'

const App = () => {
  return (
    <>
      <div className="header-container"><Header /></div>
      <div className="list-container"><LaunchList /></div>
    </>
  )
}

export default App