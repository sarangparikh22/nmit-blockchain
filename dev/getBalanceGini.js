const Web3     = require('web3');
const Prompt = require('prompt');
const GiniContract = require('./GiniContract');


var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('https://rinkeby.infura.io/v3/ae01c2f20b6046b1b351e20a79eba386'));

var schema = {
    properties: {
        address: {
            description: 'Address',
            required: true,
        },
    }
};

Prompt.start();
Prompt.get(schema, function(err, result) {
  var instance = new web3.eth.Contract(GiniContract.abi, GiniContract.address);
  instance.methods.balanceOf(result.address).call(function(err, result) {
    console.log('\n\tBalance: ' + result + ' GINIs\n');
  });
});