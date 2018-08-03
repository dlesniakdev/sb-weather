import React, { Component } from 'react';
import SidebarToggleButton from './SidebarToggleButton';

class Main extends Component {
  render() {
    return (
      <div>
        <SidebarToggleButton />
        <div id="content">
          <h1>Interview Exercise</h1>
          <p>Imagine, that you are given the weather data from here: http://openweathermap.org/</p>
          <p>There is a free JSON API for a 5 day forecast: http://openweathermap.org/forecast5</p>
          <p>I'd like you to use this API to write a Java-based application using Spring Framework which shows
                            this data in nice charts.</p>
          <p>Let's use:</p>
          <ul>
            <li>temperature</li>
            <li>pressure</li>
            <li>humidity</li>
          </ul>
          <p>The charts should be presented only for: New York, Washington, London The user should be able to
              choose between those three locations. Please provide safe guards for not exceeding the 60 requests
              per minute free API limit. The charts should be interactive, e.g. user should be able to zoom
                            and pan them. This app will be a part of bigger application.</p>
        </div>
      </div>);
  }
}

export default Main;
