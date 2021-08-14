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

const id = 5;

const getEmployee = ( id, callback ) => {

    const empleado = employees.find( (e) => e.id == id )

    if ( empleado ) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe.`);
    }

} 

const getSalary = ( id, callback ) => {

    const salary = salarios.find( e => e.id === id );

    if ( salary ) {
        callback( null, salary );
    } else {
        callback(`Salario del empleado con id ${id} no existe.`);
    }

}

getEmployee( id, ( err, empleado) => {
    
    if ( err ) {
        console.log('ERROR!');
        return console.log(err);
    }

    getSalary( id, ( err, salary) => {
    
        if ( err ) {
            console.log('ERROR!');
            return console.log(err);
        }
    
        console.log(`El empleado ${empleado.name} tiene un salario de ${salary.salary}`);
        console.log(salary.salary);
    
    });

});