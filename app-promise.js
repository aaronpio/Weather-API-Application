const yargs = require('yargs');
const axios = require('axios');

const key = '572938371cf5f35c728ba357a3f15dae';

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('unable to find the address')
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);

}).then((response) => {

var temperature = response.data.currently.temperature;
var apparentTemperature = response.data.currently.apparentTemperature;
console.log(`It's currently ${temperature}, but feels like ${apparentTemperature}.`);

}).catch((error) => {

    if (error.code === 'ENOTFOUND'){
    console.log('unable to connect to API servers'); 
    } else {
        console.log(error.message);
    }

});


// establish a object
// use axios as it has built in promises into the api
// encode https request and get location back with long & lattitude
// use long and lat to request weather
// catch errors if applicable, and log results from promises











