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
      <div className="days-timer-big-screen">
        <div className="days-timer-title-date-big-screen">
          <div className="days-timer-title-big-screen">Countdown To Graduation</div>
          <div className="days-timer-date-big-screen">{this.state.deadline}</div>
        </div>
        <DaysCounter deadline={this.state.deadline} />
      </div>
    );
  }
}
export default DaysTimer;
