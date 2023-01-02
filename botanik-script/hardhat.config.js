require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  networks: {
    goerli: {
      url: `${process.env.GOERLI_URL}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    mainnet : {
      url: `${process.env.MAINNET_URL}`,
      accounts:[process.env.PRIVATE_KEY]

    }
  },
  solidity: {
    version: "0.8.5",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  etherscan: {
    apiKey:`${process.env.ETHERSCAN_KEY}`
  },

};
