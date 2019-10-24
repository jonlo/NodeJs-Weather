


const axios = require('axios');

const getWeather = async (latitude, longitude) => {

    const response = await axios({
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: { appid: "f011236639788310da459f4eb41eea14", lat: latitude, lon: longitude }
    });
    if (!response) {
        throw new Error('No results');
    }
    return response.data.main.temp;
}

module.exports = { getWeather };
