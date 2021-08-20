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

}

module.exports = Tasks;