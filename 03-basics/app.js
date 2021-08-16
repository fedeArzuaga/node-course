// Requerir paquetes
const { createFile } = require('./helpers/multiply.js');

console.clear();

const [ , , totalString = 'base=5'] = process.argv;
const [ , baseString = 5] = totalString.split('=');
const base = parseInt(baseString);

createFile( base )
    .then( output => console.log(output) )
    .catch( err => console.log(err) );






