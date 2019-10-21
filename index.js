const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: ' city address',
        demand: true
    }
}).argv;

const axios = require('axios');
console.log(argv.direction);
getLocationData(argv.direction);

function getLocationData(location){
    axios({
        method: 'get',
        url: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        headers: { 'x-rapidapi-key': 'ad688f4a3emsh18840915beb0c45p171f7bjsna7f36da970df' },
        params: { location: location }
    })
        .then(function (response) {
            // handle success
            console.log(response.data.Results[0]);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}


