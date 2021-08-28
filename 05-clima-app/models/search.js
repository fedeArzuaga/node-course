const axios = require('axios');

class Search {

    constructor() {

    }

    get paramsMapbox() {
        return {
            'limit': 5,
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY || ''
        }
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

}

module.exports = Search;