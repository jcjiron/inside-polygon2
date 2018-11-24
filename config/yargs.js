const yargs = require('yargs')
    .command('inside', 'Determine if poinst are inside a polygon', {
        points: {
            demand: true,
            alias: 'p'
        },
        coords: {
            demand: true,
            alias: 'c'
        }
    })
    .command('matrix', 'Solve matrix reding a matrix file and a result vertor file', {
        matrix: {
            demand: true,
            alias: 'm'
        },
        result: {
            demand: true,
            alias: 'r'
        }
    })
    .help()
    .argv;


    module.exports = {
        yargs
    };