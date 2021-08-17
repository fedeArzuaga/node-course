// Requerir paquetes
const colors = require('colors');
const { createFile } = require('./helpers/multiply.js');
const yargs = require('./config/yargs.js')

console.clear();

const { base, list, hasta } = yargs;

// NO HACER
// const [ , , totalString = 'base=5'] = process.argv;
// const [ , baseString = 5] = totalString.split('=');
// const base = parseInt(baseString);

console.log(base, list, hasta);

createFile( base, list, hasta )
    .then( output => console.log(output.inverse) )
    .catch( err => console.log(err.red) )