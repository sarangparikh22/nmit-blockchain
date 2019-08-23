const aes256 = require('aes256');
const colors = require('colors');
const key = "saru";

const plainText = "Text to Encrypt";

const encryptedText = aes256.encrypt(key, plainText);

console.log('Encrypted Text: '.yellow + encryptedText.blue);

const decryptedText = aes256.decrypt(key, encryptedText);


console.log('Decrypted Text: '.yellow + decryptedText.green);
