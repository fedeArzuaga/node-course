const colors = require('colors');
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer.js');
const { saveDB, readDB } = require('./helpers/saveData.js');
const Task = require('./models/task.js');
const Tasks = require('./models/tasks.js');

const main = async () => {

    let opt = '';
    const tasks = new Tasks();
    const tasksDB = readDB();

    if ( tasksDB ) {
        // Establecer las tareas
    }

    await pause();

    do {

        // Print menu on the console = Return a response from the user.
        opt = await inquirerMenu();
        
        // Validate that option to execute some function related to the selected option before
        switch ( opt ) {

            case '1': // Create a task
                const desc = await readInput( `Description:` );
                tasks.createTask( desc );
            break;

            case '2': // Display tasks on the console
                console.log(tasks.listArr);
            break; 

        }

        // saveDB( tasks.listArr );

        await pause();

    } while ( opt !== '0' );

}

main();