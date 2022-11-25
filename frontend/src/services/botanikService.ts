import { BotanikService } from "web3Functions/botanik";
import Web3 from "web3";
 
  
  class BTKNfts {
  
    getBTKData = async (set) => {
      try {
        const web3 = new Web3('https://goerli.infura.io/v3/2b2b802ce8414591a6c76a30cf192ad3');
        if (web3) {
          let config = {
            name: null,
            symbol: null,
            owner: null,
            baseUri: null,
            mintFee: null,
            phaseLimit: null
          };
  
          config.name = await BotanikService.name(web3);
          config.symbol = await BotanikService.symbol(web3);
          config.owner = await BotanikService.owner(web3);
          config.baseUri = await BotanikService.baseURI(web3);
          config.mintFee = await BotanikService.mintFee(web3);
          config.phaseLimit = await BotanikService.phaseLimit(web3);
          set(config);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
  }
  
  const BTKService = new BTKNfts();
  Object.freeze(BTKService);
  export { BTKService };