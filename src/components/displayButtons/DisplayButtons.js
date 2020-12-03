import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchLaunchesByYear, fetchLaunchesAndArrange } from '../../actions'

import sortIcon from '../../assets/icon/sort.png'

import "./DisplayButtons.scss"

class DisplayButtons extends React.Component {

  fetchLaunchesByYear = (value) => {
    this.props.fetchLaunchesByYear(value)
  }

  fetchLaunchesAndArrange = () => {
    this.props.fetchLaunchesAndArrange()
  }

  render() {
    return (
      <div className="display-buttons">
        <DropdownButton
          className="filter-button"
          id="button-content"
          title="Filter by Year   "
          onSelect={(key) => this.fetchLaunchesByYear(key)}
        >
          <Dropdown.Item eventKey="2006">2006</Dropdown.Item>
          <Dropdown.Item eventKey="2007" >2007</Dropdown.Item>
          <Dropdown.Item eventKey="2008">2008</Dropdown.Item>
          <Dropdown.Item eventKey="2009">2009</Dropdown.Item>
          <Dropdown.Item eventKey="2010">2010</Dropdown.Item>
          <Dropdown.Item eventKey="2011">2011</Dropdown.Item>
          <Dropdown.Item eventKey="2012">2012</Dropdown.Item>
          <Dropdown.Item eventKey="2013">2013</Dropdown.Item>
          <Dropdown.Item eventKey="2014">2014</Dropdown.Item>
          <Dropdown.Item eventKey="2015">2015</Dropdown.Item>
          <Dropdown.Item eventKey="2016">2016</Dropdown.Item>
          <Dropdown.Item eventKey="2017">2017</Dropdown.Item>
          <Dropdown.Item eventKey="2018">2018</Dropdown.Item>
          <Dropdown.Item eventKey="2019">2019</Dropdown.Item>
          <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
        </DropdownButton>
        <button className="sort-button" onClick={this.fetchLaunchesAndArrange}>
          <p className="button-content"> Sort Descending </p>
          <img src={sortIcon} alt="up and down Icons" className="icon" />
        </button>

      </div>
    )
  }
}

export default connect(null, { fetchLaunchesByYear, fetchLaunchesAndArrange })(DisplayButtons)
