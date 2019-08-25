const NodeRSA = require('node-rsa');
const fs = require('fs');
const colors = require('colors');
const key = new NodeRSA();

const publicKey = fs.readFileSync('./publicKey.txt');

key.importKey(publicKey);

const plaintext = "Yay!! It's Working!! Congratulations!!";

const encrypt = key.encrypt(plaintext, 'base64');

fs.writeFileSync('./encryptedData.txt', encrypt);

console.log('Data Successfully Encrypted'.green);
