const fs = require('fs');
const Web3     = require('web3');
const colors = require('colors');
const GiniContract = require('./GiniContract')

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('https://rinkeby.infura.io/v3/ae01c2f20b6046b1b351e20a79eba386'));


let participants = fs.readFileSync('./participants.json');
let participantsArray = [];
participantsArray = JSON.parse(participants);

let rankArray = [];
let rank = 0;
console.log('\tNMIT BLOCKCHAIN WORKSHOP'.bold.underline.inverse.bgBlue)
console.log('\tGINI TOKEN (GINI)'.underline.italic.cyan)
for(let i=0;i<participantsArray.length;i++){
    var instance = new web3.eth.Contract(GiniContract.abi, GiniContract.address);
    instance.methods.balanceOf(participantsArray[i].address).call(function(err, result) {
      //console.log(`${participantsArray[i].name}:${result}`);
      rankArray.push({
          name: participantsArray[i].name,
          balance: result
      })
      rank += 1;
      checkRank();
  });
}
function checkRank(){
    if(rank === participantsArray.length){
        rankArray.sort(function(a, b){return a.balance-b.balance}).reverse();
        rankArray.map((participant,index)=>{
            if(index < 5){
                let val = 50 - participant.name.length;
                console.log(colors.green(`${index+1}. ${participant.name} ${'.'.repeat(val)} ${participant.balance} `))
            }else{
                let val = 50 - participant.name.length;
                console.log(colors.yellow(`${index+1}. ${participant.name} ${'.'.repeat(val)} ${participant.balance} `))
            }
        })
    }
}


