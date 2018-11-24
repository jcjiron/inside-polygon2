const inside = require('point-in-polygon');
const { readFileSync, saveFile } = require('./save-file') 

const pointsFileName= 'NM.csv';
const polygonFileName = 'ANH-DOL-ARC.csv';
let result = '';


const pointsContent = readFileSync(pointsFileName);
let points = pointsContent.split('\n');

const polygonContent = readFileSync(polygonFileName);
let polygon = polygonContent.split('\n');


points = points.map((row) => {
    row = row.split(',').map((coord)=>{
        coord = Number(coord);
        return coord;
    });
    return row;
});

polygon = polygon.map((row) => {
    row = row.split(',').map((coord) => {
        coord = Number(coord);
        return coord;
    });
    return row;
});

points.forEach((point)=>{
    let row = `${point[0]},${point[1]},${inside(point, polygon)}\n`;

    result+=row;

});

saveFile(`${pointsFileName.split('.')[0]}_${polygonFileName.split('.')[0]}_result.csv`, result)
    .then((data)=>{
        console.log(data);
        
    })
    .catch((err)=>{
        console.log(err);
    });


