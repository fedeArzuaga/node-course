const fs = require('fs');
const colors = require('colors');

const createFile = ( base, list, limite ) => {

    return new Promise(( resolve, reject ) => {

        const regex = /[0-9]/;
        const based = parseInt(base);
        let output, consoleOutput = '';
        const fileName = `./output/tabla-${base}.txt`;

        for ( let i = 1; i <= limite; i++ ) {
            consoleOutput += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            output += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFileSync( fileName, output );

        if ( list ) {
            console.log(consoleOutput);
        }

        ( regex.test(based) && typeof based === 'number' ) 
            ? resolve(`${fileName} has been created succesfully!`)
            : reject(`${fileName} couldn't be created.`)
            
    });

}

module.exports = {
    createFile
}