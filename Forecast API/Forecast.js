const request = require('request');

const key = '572938371cf5f35c728ba357a3f15dae';

var getWeather = (lat, lng, callback) => {
request({
    url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
        });
    } else {
        callback('unable to fetch weather dog');
    }
})
};


module.exports.getWeather = getWeather;