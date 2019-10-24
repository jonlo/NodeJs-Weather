const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: ' city address',
        demand: true
    }
}).argv;

const location = require('./Location/location');
const weather = require('./Location/weather');



const getInfo = async (address) => {
    try {
        const coords = await location.getPlaceWithLatLong(address);
        const temp = await weather.getWeather(coords.latitude, coords.longitude)
        return `El clima de ${address} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${address}`;
    }
}

getInfo(argv.direction).then(console.log).catch(console.log);