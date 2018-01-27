const request = require('request');

var geocodeAddress = (address, callback) => {
};

module.exports.geocodeAddress = geocodeAddress;



//app.js sends in an address from the input
// geocode.js encodes it, and makes a request to the API for the full address, lat and long
//exports the info back to app.js