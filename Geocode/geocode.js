const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true

}, (error, response, body) => {

    if (error) {
        callback('Unable to connect to Google Servers')
    } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find that address')
    } else if (body.status === 'OK') {
        callback(undefined, {
            address: body.results[0].formatted_address,
            lat: body.results[0].geometry.location.lat,
            lng: body.results[0].geometry.location.lng
        });
    }
})
};

module.exports.geocodeAddress = geocodeAddress;



//app.js sends in an address from the input
// geocode.js encodes it, and makes a request to the API for the full address, lat and long
//exports the info back to app.js