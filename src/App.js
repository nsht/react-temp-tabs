import React, { Component } from "react";
import "./css/App.css";
import "./components/SiteInput";
import SiteInput from "./components/SiteInput";
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
  render() {
    return (
      <div className="App">
        <div className="title">
          <span>Temp Tabs</span>
        </div>
        <div className="site-input">
          <SiteInput setTime={this.setTime} minutes={this.state.minutes} />
        </div>
      </div>
    );
  }
}

export default App;
