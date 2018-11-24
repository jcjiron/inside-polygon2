const { readFileSync, saveFile } = require('./save-file') 
const math = require('mathjs')

const variablesfileName= 'datosdolsilarcfip_santi.csv';
const matrizFileName = 'matrizdolsilarcfip_santi.csv';
let result = '';
let matrixInv = [];



const variablesContent = readFileSync(variablesfileName);
let variables = variablesContent.split('\n');

const matrizContent = readFileSync(matrizFileName);
let matriz = matrizContent.split('\n');

variables = variables.map((row) => {
    row = row.split(',').map((variable)=>{
        variable = Number(variable);
        return variable;
    });
    return row;
});

variables = variables.map((row)=>{
    let vector = [];
    row.forEach(element => {
        vector.push([element])        
    });
    return vector;
});

matriz = matriz.map((m) => {
    m = m.split(',').map((variable)=>{
        variable = Number(variable);
        return variable;
    });
    return m;
});

matrixInv = math.inv(matriz);





variables.forEach((v)=>{
    let row = ''+math.multiply( matrixInv, v)+ '\n';
    result+=row;
});

saveFile(`${variablesfileName.split('.')[0]}_${matrizFileName.split('.')[0]}_result.csv`, result)
    .then((data)=>{
        console.log(data);
        
    })
    .catch((err)=>{
        console.log(err);
    });

