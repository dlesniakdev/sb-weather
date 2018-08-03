export function gatherData(forecasts) {
  var result = {
    dates: [],
    temperature: [],
    temperatureMin: [],
    temperatureMax: [],
    pressure: [],
    humidity: [],
    temperatureUnit: forecasts[0].temperature.unit,
    pressureUnit: forecasts[0].pressure.unit,
    humidityUnit: forecasts[0].humidity.unit
  }

  forecasts.forEach(function (element) {
    result.dates.push(element.calculationDate)
    result.temperature.push(element.temperature.value)
    result.temperatureMin.push(element.temperature.min)
    result.temperatureMax.push(element.temperature.max)
    result.pressure.push(element.pressure.value)
    result.humidity.push(element.humidity.value)
  });

  return result
}
