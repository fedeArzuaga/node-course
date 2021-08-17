const yargs = require('yargs')
                    .option( 'b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Base of the multiply talbe',
                    })
                    .option( 'l', {
                        alias: 'list',
                        type: 'boolean',
                        default: false,
                        describe: 'List the table in the terminal'
                    })
                    .option( 'h', {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: false,
                        describe: 'Numero limitante por el cual se va a multiplicar'
                    })
                    .check( (yargs, options) => {
                        if ( isNaN(yargs.b) ) {
                            throw 'La base debe de ser un numero';
                        }
                        if ( isNaN(yargs.h) ) {
                            throw 'El limite debe de ser un numero';
                        }
                        return true;
                    })
                    .argv;

module.exports = yargs;