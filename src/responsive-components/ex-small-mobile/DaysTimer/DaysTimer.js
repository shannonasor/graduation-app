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
      <div className="days-timer-ex-small-mobile">
        <div className="days-timer-title-date-ex-small-mobile">
          <div className="days-timer-title-ex-small-mobile">Countdown To Graduation</div>
          <div className="days-timer-date-ex-small-mobile">{this.state.deadline}</div>
        </div>
        <DaysCounter deadline={this.state.deadline} />
      </div>
    );
  }
}
export default DaysTimer;
