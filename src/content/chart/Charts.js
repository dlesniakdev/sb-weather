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
      isError: false,
      name: name
    };
  }

  prepareRequest = () => {
    const { name } = this.state.name;

    var headers = new Headers();
    headers.append("Authorization", "Basic dXNlcjp1c2Vy");

    return ({
      uri: encodeURI('http://localhost:8080/api/sbforecast?city=a' + name),
      headers: headers
    })
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const { name } = this.state.name

    var requestTemlate = this.prepareRequest()
    fetch(requestTemlate.uri, { headers: requestTemlate.headers })
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
      .then(json => json.forecasts)
      .then(forecasts => gatherData(forecasts))
      .then(data => {
        return (
          <div>
            <h1 className='chart-title'>Forecast charts for {name}</h1>
            <ReactEcharts option={temperatureChart(data)} />
            <div className='mt4' />
            <ReactEcharts option={pressureChart(data)} />
            <div className='mt4' />
            <ReactEcharts option={humidityChart(data)} />
          </div>
        )
      })
      .then(forecasts => this.setState({ forecasts: forecasts, isLoading: false }))
      .catch(err =>
        err.text().then(errorMessage => {
          this.setState({ isError: true, isLoading: false });
          console.error(err)
        })
      )

  }

  render() {
    const { isLoading, isError } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    } else if (isError) {
      return <p>Error occurred, please try again later.</p>
    }

    return (
      <div className="charts-wrapper">
        {this.state.forecasts}
      </div>);
  }
}

export default Charts;
