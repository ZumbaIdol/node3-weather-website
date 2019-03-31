const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoienVtYmFpZG9sIiwiYSI6ImNqdGR6Y2p3ZjAxeWIzeW9hOXo1Z2hmdHEifQ.c2N5sCQhIpwfWHQwuSMC9Q&limit=1'

  request({ url, json: true }, (error, { body} ) => {
    if (error) {
      callback('Incapaz de conectarse a la locación', undefined)
    } else if (body.features.length === 0) {
      callback('Incapaz de encontrar la locación; intenta una búsqueda diferente', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}
  

module.exports = geocode
