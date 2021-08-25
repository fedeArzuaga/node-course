require('colors');
const {readInput, inquirerMenu, pause} = require('./helpers/inquirer');
const Search = require('./models/search');

const main = async () => {

    let option;
    const search = new Search();

    do {

        option = await inquirerMenu();

        switch( option ) {

            case 1:
                // Show message
                const place = await readInput('City: ');
                console.log(place);
                // Search place
                // Select the correct place
                // Weather data
                // Show results 
            break;

        }

        await pause();
        
    } while ( option !== 0 )


}

main();