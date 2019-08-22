const Wallet = require('ethereumjs-wallet');
const hdkey = require('ethereumjs-wallet/hdkey');
const bip39 = require('bip39');
const fs = require('fs');
const prompt = require('prompt');


prompt.start();

const schema = {
    properties:{
        password:{
            description: 'Enter Password for the Wallet',
            hidden: true,
            replace: "*",
            required: true
        }
    }
}

prompt.get(schema, (er,res) => {

    //Wallet Generation Process

    //Generating Mnemonic
    const mnemonic = bip39.generateMnemonic();

    //Creating HD-Wallet with Mnemonic as Seed
    const hdWallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));

    //Path to Define Constants Realted to Ethereum Addressing 
    const path = "m/44'/60'/0'/0/0";

    //Generating Wallet
    const wallet = hdWallet.derivePath(path).getWallet();

    //Encrypting and Saving the Wallet File
    const v3 = wallet.toV3(res.password);
    fs.writeFileSync('safe.wallet',JSON.stringify(v3));
    fs.writeFileSync('mnemonic.txt', mnemonic);

    //Testing Only
    console.log(`Address: ${wallet.getAddressString()}`);
    console.log('\n'+ `NOTE: Don't tell this Password to anyone, Keep the Wallet file safely, Store Mnemonic Securely`);
    console.log(`----- NMIT Team -------`);
})



