
const axios = require('axios');

const getPlaceWithLatLong = async (location) => {

    const response = await axios({
        method: 'get',
        url: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        headers: { 'x-rapidapi-key': 'ad688f4a3emsh18840915beb0c45p171f7bjsna7f36da970df' },
        params: { location: location }
    });
    if (response.data.Results.lenght === 0) {
        throw new Error('No results');
    }

    const data = response.data.Results[0];
    const address = data.name;
    const latitude = data.lat;
    const longitude = data.lon;
    return {
        address,
        latitude,
        longitude
    };
}

module.exports = { getPlaceWithLatLong };
