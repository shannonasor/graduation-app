import React, { Component } from "react";

class DaysCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }


  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }


  leading0(num) {
    return num < 10 ? "0" + num : num;
  }


  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 58)) % 24 + 4);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div className="countdown-container-mobile">

        <div className="count-mobile days">
          <div className="timer-days">{this.leading0(this.state.days)}</div>
          <div>Days</div>
        </div>

        <div className="count-mobile hours">
          <div className="timer-hours">{this.leading0(this.state.hours)} </div>
          <div>Hours</div>
        </div>

        <div className="count-mobile minutes">
          <div className="timer-minutes">{this.leading0(this.state.minutes)}</div>
          <div>Minutes</div>
        </div>

        <div className="count-mobile seconds">
          <div className="timer-seconds">{this.leading0(this.state.seconds)} </div>
          <div>Seconds</div>
        </div>

      </div>
    );
  }
}
export default DaysCounter;
