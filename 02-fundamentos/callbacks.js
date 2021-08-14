// setTimeout( () => {
//     console.log('HelloWorld!');
// }, 1000);

const getUser = ( id, callback ) => {
    
    const user = {
        id,
        name: 'Fede'
    }

    setTimeout( () => {
        callback(user);
    }, 1500);

}

getUser( 10, ( user ) => {
    console.log( user );
} );
