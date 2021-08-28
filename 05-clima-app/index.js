require('dotenv').config();

require('colors');
const {readInput, inquirerMenu, pause, listPlaces} = require('./helpers/inquirer');
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
                const places = await search.city( place );
                // Search place
                // Select the correct place
                const selectedID = await listPlaces(places);
                const selectedPlace = places.find( place => place.id === selectedID );
                const { name, lng, lat } = selectedPlace;

                // Weather data

                // Show results 
                console.log('\nCity Information\n'.blue);
                console.log('City: '.blue, name);
                console.log('Lat: '.blue, lat);
                console.log('Lng: '.blue, lng);
                console.log('Temperature: '.blue, );
                console.log('Max: '.blue, );
                console.log('Min: '.blue, );
                
            break;

        }

        await pause();
        
    } while ( option !== 0 )


}

console.log(process.env)

main();