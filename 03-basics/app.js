// Requerir paquetes
const { createFile } = require('./helpers/multiply.js');
const yargs = require('yargs').argv;

console.clear();

console.log( process.argv );
console.log( yargs );

console.log( yargs.base );

// NO HACER
// const [ , , totalString = 'base=5'] = process.argv;
// const [ , baseString = 5] = totalString.split('=');
// const base = parseInt(baseString);

// createFile( base )
//     .then( output => console.log(output) )
//     .catch( err => console.log(err) )