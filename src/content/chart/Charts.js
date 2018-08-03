import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { gatherData } from './forecast';
import { temperatureChart, humidityChart, pressureChart } from './chartDefinitionFactory'
import { mt2 } from 'bootstrap-css-modules/css/marginTop.css';

class Charts extends Component {

  constructor(name) {
    super()
    this.state = {
      forecasts: [],
      isLoading: false,
      name: name
    };
  }

  prepareRequest = () => {
    const { name } = this.state.name

    var headers = new Headers();
    headers.append("Authorization", "Basic dXNlcjp1c2Vy");

    return ({
      uri: encodeURI('http://sb-weather-api.eu-central-1.elasticbeanstalk.com/api/sbforecast?city=' + name),
      headers: headers
    })
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const { name } = this.state.name

    var requestTemlate = this.prepareRequest()
    fetch(requestTemlate.uri, {headers: requestTemlate.headers})
      .then(result => result.json())
      .then(json => json.forecasts)
      .then(forecasts => gatherData(forecasts))
      .then(data => {
        return (
          <div>
            <h1 className='chart-title'>Forecast charts for {name}</h1>
            <ReactEcharts option={temperatureChart(data)} />
            <div className='mt4'/>
            <ReactEcharts option={pressureChart(data)} />
            <div className='mt4'/>
            <ReactEcharts option={humidityChart(data)} />
          </div>
        )
      })
      .then(forecasts => this.setState({ forecasts: forecasts, isLoading: false }))
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="charts-wrapper">
        {this.state.forecasts}
      </div>);
  }
}

export default Charts;
