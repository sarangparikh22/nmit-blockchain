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
        },
        password:{
            description: 'Enter your password',
            hidden: true,
            replace: "*",
            required: true
        }
    }
}

prompt.get(schema, (err,res) => {
    //Decrypting the Wallet File
    let v3WalletData = fs.readFileSync(res.wallet,'utf8');
    try{
        let walletRead = Wallet.fromV3(JSON.parse(v3WalletData), res.password);
        console.log(`Public Key: ${walletRead.getAddressString()}`);
        console.log(`Wallet Password Entered is Correct`);
    }catch(e){
        console.log('Wrong Passphrase')
    }
})

