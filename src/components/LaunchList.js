import React from 'react'
import { connect } from 'react-redux'
import { fetchLaunches } from '../actions'
import "./LaunchList.css"

class LaunchList extends React.Component {

  componentDidMount() {
    this.props.fetchLaunches()
  }

  dateHelper(unixTimestamp) {
    const milliseconds = unixTimestamp * 1000
    const dateObject = new Date(milliseconds)
    return dateObject.toLocaleString(
      "en-GB",
      {
        day: "numeric",
        month: "short",
        year: "numeric"
      })
  }

  renderList() {
    return this.props.launches.map(launch => {
      return (
        <div className="item" key={launch.flight_number}>
          <h1 className="flight-number">#{launch.flight_number} </h1>
          <h2 className="mission-name">{launch.mission_name}</h2>
          <p className="launch-date">{this.dateHelper(launch.launch_date_unix)} </p>
          <p className="rocket-name">{launch.rocket.rocket_name}</p>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="list">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { launches: state.launches }
}

export default connect(mapStateToProps, { fetchLaunches })(LaunchList)