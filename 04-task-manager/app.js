const colors = require('colors');
const { inquirerMenu, pause, readInput, removeTasks, confirm } = require('./helpers/inquirer.js');
const { saveDB, readDB } = require('./helpers/saveData.js');
const Task = require('./models/task.js');
const Tasks = require('./models/tasks.js');

const main = async () => {

    let opt = '';
    const tasks = new Tasks();
    const tasksDB = readDB();

    if ( tasksDB ) {
        tasks.loadTasksFromArray(tasksDB);
    }

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
                tasks.completedList();
            break; 

            case '3': // Display only completed tasks
                tasks.listOnlyCompletedOrPendingTasks(true);
            break;
            
            case '4': // Display only pending tasks
                tasks.listOnlyCompletedOrPendingTasks(false);
            break; 

            case '6': // Delete a task
                const id = await removeTasks(tasks.listArr);

                if ( id !== '0' ) {
                    const ok = await confirm('Are  you sure want to delete this item from the list?');
                
                    if ( ok ) {
                        tasks.removeTask(id);
                        console.log('Task removed succesfully!');
                    }
                }

            break; 

        }

        saveDB( tasks.listArr );

        await pause();

    } while ( opt !== '0' );

}

main();