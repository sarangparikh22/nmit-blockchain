const NodeRSA = require('node-rsa');
const fs = require('fs');
const colors = require('colors');

const key = new NodeRSA({b: 512});

const privateKey = key.exportKey('pkcs1-private-pem');
fs.writeFileSync('./privateKey.txt', privateKey);

const publicKey = key.exportKey('pkcs1-public-pem');
fs.writeFileSync('./publicKey.txt', publicKey);

console.log('Keys Successfully Exported'.green);
console.log('Private Key: privateKey.txt'.yellow);
console.log('Public Key: publicKey.txt'.yellow)