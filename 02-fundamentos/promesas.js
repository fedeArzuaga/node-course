const employees = [
    {
        id: 1,
        name: "Pablo"
    },
    {
        id: 2,
        name: "Camila"
    },
    {
        id: 3,
        name: "Hector"
    }
];

const salarios = [
    {
        id: 1,
        salary: 2000
    },
    {
        id: 2,
        salary: 1500
    }
];

const id = 2;

const getEmployee = ( id ) => {

    return new Promise( ( resolve, reject ) => {
        
        const empleado = employees.find( (e) => e.id == id );

        ( empleado ) 
            ? resolve(empleado) 
            : reject(`El empleado no existe vieja!`);

    } );

}

const getSalary = ( id ) => {

    return new Promise( ( resolve, reject ) => {
        
        const salario = salarios.find( (e) => e.id == id );

        ( salario ) 
            ? resolve(salario) 
            : reject(`El salario del empleado no existe vieja!`);

    } );

}

// getEmployee( id )
//     .then( employee => console.log( employee ) )
//     .catch( err => console.log(err) );

// getSalary( id )
//     .then( salary => console.log( salary ) )
//     .catch( err => console.log(err) );

getEmployee( id )
    .then( empleado => {
        getSalary( id )
            .then( salary => {
                console.log(`El empleado ${empleado.name} tiene un salario de ${salary.salary}`);

            } )
            .catch( err => console.log(err) );
    })
    .catch( err => console.log(err) );
