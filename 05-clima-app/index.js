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
                const { name: cityName, lng, lat } = selectedPlace;

                // Weather data
                const weatherData = await search.weatherOfPlace(lat, lng);

                const { temp, feels_like, temp_min, temp_max, description } = weatherData;

                // Show results 
                console.log('\nCity Information\n'.green);
                console.log('City: '.green, cityName);
                console.log('Lat: '.green, lat);
                console.log('Lng: '.green, lng);
                console.log('Weather Description: ', description);
                console.log('Temperature: '.green, temp);
                console.log('It feels like: '.green, feels_like);
                console.log('Max: '.green, temp_max);
                console.log('Min: '.green, temp_min);
                
            break;

        }

        await pause();
        
    } while ( option !== 0 )


}

console.log(process.env)

main();