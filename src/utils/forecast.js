const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/b86f39e511955d5190fd10c215b7affb/' + latitude + ',' + longitude + '?lang=es'

  request({ url, json: true }, (error, { body }) => {    
    if (error) {
      callback('Incapaz de conectarse al servicio de meterológico...', undefined)
    } else if (body.error) {
      callback('Incapaz de encontrar la locación...', undefined)
    } else {
      console.log(body.daily.data[0])
      callback(undefined, body.daily.data[0].summary + ' La temperatura actual es ' + body.currently.temperature + ' grados. Hay un ' + body.currently.precipProbability + ' % posibilidad de precipitación. La temperatura alta es ' + body.daily.data[0].temperatureHigh + ' y la temperatura baja es ' + body.daily.data[0].temperatureLow + '.')
    }
  })
}

module.exports = forecast
