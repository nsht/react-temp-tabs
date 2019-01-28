import React, { Component } from "react";
import "./css/App.css";
import "./components/SiteInput";
import SiteInput from "./components/SiteInput";
import Countdown from "react-countdown-now";
class App extends Component {
  state = {
    minutes: 5,
    url: ""
  };

  setTime = time => {
    this.setState({
      minutes: time
    });
  };

  startTimer = () => {
    this.countdownRef.current.api.start();
    this.countdownRef2.current.api.start();

  };

  customRenderer = ({ hours, minutes, seconds, completed }) => {
    if (!completed) {
      let minutesString = minutes;
      let secondsString = seconds;

      if(minutes<10){
        minutesString = `0${minutes}`
      }
      if(seconds<10){
        secondsString = `0${seconds}`
      }
      document.title = `${minutesString}:${secondsString}`;
    }
    return <span />;
  };

  countdownRef = React.createRef();
  countdownRef2 = React.createRef();

  render() {
    return (
      <div className="App">
        <div className="title">
          <span>Temp Tabs</span>
        </div>
        <div className="site-input">
          <SiteInput
            setTime={this.setTime}
            minutes={this.state.minutes}
            startTimer={this.startTimer}
          />
        </div>
        <div className="timer">
          <Countdown
            ref={this.countdownRef}
            autoStart={false}
            date={Date.now() + this.state.minutes * 60000}
          />
          <Countdown
            ref={this.countdownRef2}
            autoStart={false}
            date={Date.now() + this.state.minutes * 60000}
            renderer={this.customRenderer}
          />
        </div>
      </div>
    );
  }
}

export default App;
