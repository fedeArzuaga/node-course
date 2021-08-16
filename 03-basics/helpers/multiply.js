const createFile = ( base = 5 ) => {

    return new Promise(( resolve, reject ) => {

        const regex = /[0-9]/;
        const based = parseInt(base);
        let output = '';

        for ( let i = 1; i <= 10; i++ ) {
            output += `${base} x ${i} = ${base * i}\n`;
        }

        // fs.writeFileSync( fileName, output );

        ( regex.test(based) && typeof based === 'number' ) 
            ? resolve(output)
            : reject(`${output} couldn't be displayed.`)
            
    });

}

module.exports = {
    createFile
}