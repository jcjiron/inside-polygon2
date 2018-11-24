const fs = require('fs');


const saveFile = (fileName, content) => {
    return new Promise((resolve, reject) => {


        fs.writeFile(fileName, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`${fileName} created`);
            }
        });


    });
};

const readFile = (fileName) =>{
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, (err, data) => {
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        });
    });
}

const readFileSync = (fileName)=>{
    const text = fs.readFileSync(fileName, 'utf8')
    return text;
}

module.exports = {
    saveFile,
    readFile,
    readFileSync
}