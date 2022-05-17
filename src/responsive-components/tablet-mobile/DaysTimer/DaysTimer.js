import React, { Component } from "react";
import DaysCounter from "./DaysCounter";

class DaysTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "May, 31, 2022"};
  }
  render() {
    return (
      <div className="days-timer-tablet-mobile">
        <div className="days-timer-title-date-tablet-mobile">
          <div className="days-timer-title-tablet-mobile">Countdown To Graduation</div>
          <div className="days-timer-date-tablet-mobile">{this.state.deadline}</div>
        </div>
        <DaysCounter deadline={this.state.deadline} />
      </div>
    );
  }
}
export default DaysTimer;
