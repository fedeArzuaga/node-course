const deadpool = {
    nombre: "Pepe",
    apellido: "Mano",
    poder: "Regeneracion",
    getNombre() {
        return `${this.nombre} ${this.apellido}`;
    }
}


function printHeroe( { nombre, apellido, poder, edad = 0 } ) {
    console.log(nombre, apellido, poder, edad);
}

// printHeroe( deadpool );

const heroes = ['Pepe', 'Banana', 'TUMAMA'];

/* const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2]; */

const [ , , h3 ] = heroes;

console.log(h3);

// console.log( nombre, apellido, poder, edad );
/* console.log(deadpool.getNombre()); */