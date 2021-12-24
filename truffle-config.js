var HDWalletProvider = require("truffle-hdwallet-provider")
var infura = 'add infura Id here'
var fs = require('fs');
var mnemonic = fs.readFileSync('.env').toString().trim();


module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, infura),
      network_id: "4",
      gas: 4500000
    }
  }
};
