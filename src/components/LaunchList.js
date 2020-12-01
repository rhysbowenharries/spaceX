import React from 'react'
import { connect } from 'react-redux'
import { fetchLaunches } from '../actions'

import "./LaunchList.scss"

class LaunchList extends React.Component {

  componentDidMount() {
    this.props.fetchLaunches()
  }

  dateHelper(unixTimestamp) {
    const milliseconds = unixTimestamp * 1000
    const nth = function (d) {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    }

    const unformatedDate = new Date(milliseconds);
    const date = unformatedDate.getDate();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][unformatedDate.getMonth()];

    return `${date}${nth(date)} ${month} ${unformatedDate.getFullYear()}`;
  }

  renderList() {
    return this.props.launches.map(launch => {
      return (
        <div className="list-item" key={launch.flight_number}>
          <div className="left-data">
            <h1 className="flight-number">#{launch.flight_number} </h1>
          </div>
          <div className="centre-data">
            <h2 className="mission-name">{launch.mission_name}</h2>
          </div>
          <div className="right-data">
            <p className="launch-date">{this.dateHelper(launch.launch_date_unix)} </p>
            <p className="rocket-name">{launch.rocket.rocket_name}</p>
          </div>
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