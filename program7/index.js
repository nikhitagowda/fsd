var request = require('request')

const url =
  'http://api.weatherstack.com/current?access_key=6df6668e78c64c52b75e96919fc79746&query=india&units=f'

request({ url: url }, (err, response) => {
  const data = JSON.parse(response.body)

  console.log('The current temperature is ', data.current.temperature)
  console.log('Country is', data.location.country)
})