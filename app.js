const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./Forecast API/Forecast');


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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage) ;
    } else {
        console.log(results.address);
        weather.getWeather(results.lat, results.lng, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage) 
            } else {
                console.log(`Right now it is ${weatherResults.temperature}, but it feels like ${weatherResults.apparentTemperature}.`);
            }
        });
    }
});












