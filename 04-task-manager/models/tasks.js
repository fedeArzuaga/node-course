const Task = require("./task");

class Tasks {

    get listArr() {

        const list = [];

        Object.keys( this._list ).forEach( key => {
            list.push(this._list[key])
        } )

        return list;

    }

    constructor( _list ) {
        this._list = {};
    }

    createTask ( desc ) {
        
        const task = new Task(desc);
        this._list[task.id] = task;

    }

    loadTasksFromArray( tasks = [] ) {

        tasks.forEach( task => {
            this._list[task.id] = task;
        })

    }

    completedList() {

        const list = this.listArr;
        let counter = 1;

        console.log('\n');

        list.forEach( task => {

            let taskStatus = ( task.completedAt !== null ) ? 'Completed' : 'In progress';
            let myCounter = counter.toString() + '.';

            if ( task.completedAt === null ) {
                console.log(`${myCounter.red} ${task.description} :: ${taskStatus.red}` );
            } else {
                console.log(`${myCounter.green} ${task.description} :: ${taskStatus.green}` );
            }

            counter++;

        });

    }

    listOnlyCompletedOrPendingTasks( completed = true ) {
        
        let counter = 1;

        console.log('\n');

        if ( completed ) {

            const completedTasks = this.listArr.filter( task => task.completedAt !== null );

            completedTasks.forEach(  task => {

                let myCounter = counter.toString() + '.';

                console.log(`${myCounter.green} ${task.description} :: ${'Completed'.green}` );
                counter++;

            });

        } else {

            const pendingTasks = this.listArr.filter( task => task.completedAt === null );

            pendingTasks.forEach(  task => {

                let myCounter = counter.toString() + '.';

                console.log(`${myCounter.red} ${task.description} :: ${'Pending'.red}` );
                counter++;

            });

        }

    }

}

module.exports = Tasks;