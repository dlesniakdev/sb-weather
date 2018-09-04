import React, { Component } from 'react';
import SidebarToggleButton from './SidebarToggleButton';

class Main extends Component {
  render() {
    return (
      <div>
        <SidebarToggleButton />
        <div id="content">
          <h1>sb-weather</h1>
          <p>Frontend to sb-weather-api.</p>
          <p>Displays temperature, humidity and pressure graphs for three predefined cities London, Washington, New York.</p>
          <br/>
          <p>First attempt to React.</p>
        </div>
      </div>);
  }
}

export default Main;
