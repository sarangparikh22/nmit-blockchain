const Wallet = require('ethereumjs-wallet')
const hdkey = require('ethereumjs-wallet/hdkey')
const bip39 = require('bip39')
const fs = require('fs')
const prompt = require('prompt');

prompt.start();

const schema = {
    properties:{
        wallet:{
            description: 'Enter File Name',
            required: true 
        }
    }
}

prompt.get(schema, (err,res) => {
    //Decrypting the Wallet File
    let v3WalletData = fs.readFileSync(res.wallet,'utf8');
    try{
        console.log(`Wallet Address: ${JSON.parse(v3WalletData).address}`);
    }catch(e){
        console.log('Some Error')
    }
})

