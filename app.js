const polygon = require('./polygon');
const matrix = require('./matrix');
const yargs = require('./config/yargs').yargs;

const command = yargs._[0];

switch (command) {
    case 'inside':
        polygon.insidePolygon(yargs.p, yargs.c);
        break;
    case 'matrix':
        matrix.solveMatrixFromFiles(yargs.m, yargs.r)
        break;
        default:
        console.log('Command not recognized');
        
        break;
}




