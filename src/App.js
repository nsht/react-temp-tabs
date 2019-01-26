import React, { Component } from 'react';
import './css/App.css';
import './components/SiteInput';
import SiteInput from './components/SiteInput';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="site-input">
          <SiteInput></SiteInput>
        </div>
      </div>
    );
  }
}

export default App;
