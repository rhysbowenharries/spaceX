import React from 'react'
import { connect } from 'react-redux'
import { fetchLaunches } from '../../actions'

import spaceXLogo from '../../assets/spacex-logo.png'
import reloadIcon from "../../assets/icon/refresh.png"
import './Header.scss'

class Header extends React.Component {

  fetchLaunches = () => {
    this.props.fetchLaunches()
  }

  render() {
    return (
      <div className="logo-container">
        <img src={spaceXLogo} alt="SpaceX Logo" className="logo" />
        <p className="logo-text">LAUNCHES</p>
        <button className="reload-button" onClick={this.fetchLaunches}>
          <p className="button-content"> Reload Data </p>
          <img src={reloadIcon} alt="Reload Icon" className="icon" />

        </button>
      </div>
    )
  }
}

export default connect(null, { fetchLaunches })(Header)