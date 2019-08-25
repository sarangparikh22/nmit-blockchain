const Prompt = require('prompt');
const Wallet = require('ethereumjs-wallet');
const Web3   = require('web3');
const fs = require('fs');

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('https://rinkeby.infura.io/v3/ae01c2f20b6046b1b351e20a79eba386'));

var schema = {
    properties: {
        wallet: {
            description: "Wallet File",
            required: true,
        }
    }
};

Prompt.start();
Prompt.get(schema, function(err, res) {
    let walletFile = fs.readFileSync(res.wallet,'utf8');
  web3.eth.getBalance('0x'+JSON.parse(walletFile).address)
  .then(function(balance) {
    console.log('\n Balance: ' + web3.utils.fromWei(balance, 'ether') + '\n');
  })
});
