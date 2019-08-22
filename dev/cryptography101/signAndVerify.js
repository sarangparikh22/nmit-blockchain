const fs = require('fs');
const NodeRSA = require('node-rsa');
// const crypto = require("crypto");
//initializing the key
const key = new NodeRSA();

//importing the key
let getPrivateKey = fs.readFileSync('./privateKey.txt');
key.importKey(getPrivateKey,'pkcs1');

let sig = key.sign('Hello','base64');
console.log(`Signature: ${sig}`);

let publicKey = fs.readFileSync('publicKey.txt');
key.importKey(publicKey,'pkcs1-public-pem');

let verify = key.verify('Hello',sig,'utf8','base64');
console.log(verify);
