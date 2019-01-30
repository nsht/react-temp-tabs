import React from "react";

class SiteInput extends React.Component {
  urlInput = React.createRef();
  FiveminuteRef = React.createRef();
  FiveminuteRef = React.createRef();
  FiveminuteRef = React.createRef();
  FiveminuteRef = React.createRef();

  handleSubmit = e => {
    // handle submit function in app which gets the time
    // from the timeselector componenent
    // then starts the timer display
    e.preventDefault();
    this.props.startTimer();
    var win = window.open(this.urlInput.current.value, "_blank");
    win.focus();
    setTimeout(function() {
      win.close();
    }, this.props.minutes * 60000);
  };

  handleClick = (e, data) => {
    // access to e.target here
    this.props.setTime(data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="url" placeholder="Enter Url" ref={this.urlInput} list="defaultURLs"/>

        <div className="time-selector">
          <span
            onClick={e => this.handleClick(e, 5)}
            className={this.props.minutes === 5 ? "selected" : ""}
          >
            5 Minutes
          </span>
          <span
            onClick={e => this.handleClick(e, 10)}
            className={this.props.minutes === 10 ? "selected" : ""}
          >
            10 Minutes
          </span>
          <span
            onClick={e => this.handleClick(e, 15)}
            className={this.props.minutes === 15 ? "selected" : ""}
          >
            15 Minutes
          </span>
          <span
            onClick={e => this.handleClick(e, 30)}
            className={this.props.minutes === 30 ? "selected" : ""}
          >
            30 Minutes
          </span>
        </div>
        <button>{`Open Url for ${this.props.minutes} minutes`}</button>
        <datalist id="defaultURLs">
          <option value="https://developer.mozilla.org/" />
          <option value="https://reddit.com/" />
          <option value="https://youtube.com/" />
          <option value="https://google.com/" />
          <option value="http://hckr.netlify.com/" />
        </datalist>
      </form>
    );
  }
}

export default SiteInput;
