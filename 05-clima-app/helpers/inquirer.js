const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'question',
        message: 'What do you wish to do?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Search place`
            },
            {
                value: 2,
                name: `${'2.'.green} History`
            },
            {
                value: 0,
                name: `${'0.'.green} Exit`
            }
        ]
    }
]

const inquirerMenu = async () => {

    console.clear();

    console.log('========================='.green);
    console.log('    Select an option     '.black.bgBrightGreen);
    console.log('=========================\n'.green);

    const { question } = await inquirer.prompt(questions);

    return question;

}

const pause = async () => {

    const questions = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.green} to continue`
        }
    ];
    
    console.log('\n');
    await inquirer.prompt(questions);

}

const readInput = async ( message ) => {
    
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if ( value.length === 0 ) {
                    return 'Please type a message';
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question);
    return desc;

}

const listPlaces = async (places = [], i) => {

    let counter = 1;

    const choices = places.map( place => {

        let myCounter = `${counter}.`.green;
        counter++;

        return {
            value: place.id,
            name: `${myCounter} ${place.name}`
        }
    })

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'.red
    })

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Select a place',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions);

    return id;

    // {
    //     value: '0',
    //     name: `${'0.'.green} Exit`
    // }

}

const confirm = async (message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);

    return ok;

}

const showChecklist = async (tasks = [], i) => {

    let counter = 1;

    const choices = tasks.map( task => {

        let myCounter = `${counter}.`.green;
        counter++;

        return {
            value: task.id,
            name: `${myCounter} ${task.description}`,
            checked: ( task.completedAt ) ? true : false
        }
    })

    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(questions);

    return ids;

    // {
    //     value: '0',
    //     name: `${'0.'.green} Exit`
    // }

}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listPlaces,
    confirm,
    showChecklist
}