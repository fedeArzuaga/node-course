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

}

module.exports = Tasks;