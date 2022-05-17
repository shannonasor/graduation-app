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
      <div className="days-timer-med-screen">
        <div className="days-timer-title-date-med-screen">
          <div className="days-timer-title-med-screen">Countdown To Graduation</div>
          <div className="days-timer-date-med-screen">{this.state.deadline}</div>
        </div>
        <DaysCounter deadline={this.state.deadline} />
      </div>
    );
  }
}
export default DaysTimer;
