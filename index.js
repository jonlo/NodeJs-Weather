const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc : ' city address',
        demand: true
    }
}).argv;

console.log(argv.direction);