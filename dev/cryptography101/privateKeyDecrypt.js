const NodeRSA = require('node-rsa');
const fs = require('fs');
const colors = require('colors');

const key = new NodeRSA();

const privateKey = fs.readFileSync('./privateKey.txt');

key.importKey(privateKey);

const encryptedData = fs.readFileSync('./encryptedData.txt', 'utf8');
try{
    const encrypt = key.decrypt(encryptedData, 'utf8');
    console.log(`Data Successfully Encrypted: `.green + encrypt.yellow);
}catch(e){
    console.log(`Incorrect Key`.red);
}

