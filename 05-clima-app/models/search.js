const axios = require('axios');

class Search {

    constructor(lat, long) {
        this.lat = lat
        this.long = long
    }

    get paramsMapbox() {
        return {
            'limit': 5,
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY || ''
        }
    }

    get paramsOpenWeather() {
        return {
            'lat': this.lat,
            'lon': this.long,
            'appid': process.env.OPENWEATHER_KEY || '',
            'units': 'metric'
        }
    }

    set newLat( value ) {
        return this.lat = value;
    }

    set newLong( value ) {
        return this.long = value;
    }

    async city( place = '' ) {

        try {

            // HTTP Request
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapbox
            });

            const response = await instance.get();
            
            return response.data.features.map( place => ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0],
                lat: place.center[1]
            }));

        } catch ( error ) {

            return [];

        }

    }

    async weatherOfPlace( lat, long ) {

        try {

            this.newLat = lat;
            this.newLong = long;

            // axios instance
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: this.paramsOpenWeather
            });

            // HTTP Request
            const response = await instance.get();

            // Weahter description
            const { description } = response.data.weather[0];

            // Weather main data
            const { temp, feels_like, temp_min, temp_max } = response.data.main;
            
            return {
                temp, 
                feels_like, 
                temp_min, 
                temp_max, 
                description
            }

        } catch ( err ) {
            console.log( err );
        }

    }

}

module.exports = Search;