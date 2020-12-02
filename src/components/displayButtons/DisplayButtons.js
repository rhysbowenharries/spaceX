import React from 'react'

import downIcon from '../../assets/icon/select.png'
import sortIcon from '../../assets/icon/sort.png'

import "./DisplayButtons.scss"

const DisplayButtons = () => {
  return (
    <div className="display-buttons">

      <button className="filter-button">
        <p className="button-content"> Filter by Year </p>
        <img src={downIcon} alt="Down Arrow Icon" className="icon" id="arrow-icon" />
      </button>

      <button className="sort-button">
        <p className="button-content"> Sort Descending </p>
        <img src={sortIcon} alt="up and down Icons" className="icon" />
      </button>
    </div>
  )
}

export default DisplayButtons