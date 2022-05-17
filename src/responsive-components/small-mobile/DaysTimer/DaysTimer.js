import React, { Component } from "react";
import DaysCounter from "./DaysCounter";
// import '../assets/daystimer.css';

class DaysTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "May, 31, 2022"};
  }
  render() {
    return (
      <div className="days-timer-small-mobile">
        <div className="days-timer-title-date-small-mobile">
          <div className="days-timer-title-small-mobile">Countdown To Graduation</div>
          <div className="days-timer-date-small-mobile">{this.state.deadline}</div>
        </div>
        <DaysCounter deadline={this.state.deadline} />
      </div>
    );
  }
}
export default DaysTimer;
