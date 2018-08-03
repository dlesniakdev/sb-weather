export function temperatureChart(data) {
  return ({
    title: {
      text: 'Temperature (°' + data.temperatureUnit + ')'
    },
    tooltip: {},
    xAxis: {
      data: data.dates
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °' + data.temperatureUnit
      }
    },
    dataZoom: [
      {  
        type: 'slider',
        start: 0,
        end: 100
      },
      {  
        type: 'inside',
        start: 0,
        end: 100
    }
    ],
    series: [{
      name: 'Temperature',
      type: 'line',
      data: data.temperature,
      markPoint: {
        data: [
          { type: 'max', name: 'Highest' },
          { type: 'min', name: 'Lowest' }
        ]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Average' }
        ]
      }
    }],
  })
}

export function humidityChart(data) {
  return commonBarChart(data.dates, data.humidity, data.humidityUnit, "Humidity");

}

export function pressureChart(data) {
  var pressureChart = commonBarChart(data.dates, data.pressure, data.pressureUnit, "Pressure");
  pressureChart.yAxis.min = Math.min(...data.pressure) - 5;
  pressureChart.yAxis.max = Math.max(...data.pressure) + 5;
  return pressureChart;
}

function commonBarChart(xAxis, values, unit, name) {
  return ({
    title: {
      text: name + '(' + unit + ')'
    },
    tooltip: {},
    xAxis: {
      data: xAxis
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} ' + unit
      }
    },
    dataZoom: [
      {  
        type: 'slider',
        start: 0,
        end: 100
      },
      {  
        type: 'inside',
        start: 0,
        end: 100
    }
    ],
    series: [{
      name: name,
      type: 'bar',
      data: values
    }],
  })
}