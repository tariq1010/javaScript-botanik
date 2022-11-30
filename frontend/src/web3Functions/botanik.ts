import { renounceOwnership, transferOwnership } from './../store/redux/slices/contractFunctions/write';
import { CONTRACT_ABI,CONTRACT_ADDRESS } from "contract";
import { CommonUtility } from "utility/common";
import Web3 from "web3";


class Botanik {
  // <<<<--- READ FUNCTIONS --->>>>
  getBTKData = async () => {
    const web3 = new Web3('https://goerli.infura.io/v3/2b2b802ce8414591a6c76a30cf192ad3');
    try {
      if (web3) {
        let config = {
          name: null,
          symbol: null,
          owner: null,
          baseUri: null,
          mintFee: null,
          phaseLimit: null,
          isPaused: null,
          totalSupply: null
        };

        config.name = await this.name(web3);
        config.symbol = await this.symbol(web3);
        config.owner = await this.owner(web3);
        config.baseUri = await this.baseURI(web3);
        config.mintFee = Number(await this.mintFee(web3));
        config.phaseLimit = Number(await this.phaseLimit(web3));
        config.isPaused = await this.isPaused(web3);
        config.totalSupply =Number(await this.totalSupply(web3));
        return (config);
      }
    } catch (error) {
      console.log("error", error);
    }
  };


  async name(web3: any) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const name = await contract.methods.name().call();
      return name;
    } catch (error) {
      console.log("Error in name func", error);
      return error;
    }
  }

  async owner(web3: any) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const owner = await contract.methods.owner().call();
      return owner;
    } catch (error) {
      console.log("Error in owners func", error);
      return error;
    }
  }


  async baseURI(web3: any) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const uri = await contract.methods.getBaseUri().call();
      return uri;
    } catch (error) {
      console.log("Error in base Uri func", error);
      return error;
    }
  }

  async symbol(web3: any) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const symbol = await contract.methods.symbol().call();
      return symbol;
    } catch (error) {
      console.log("Error in symbol func", error);
      return error;
    }
  }

  async totalSupply(web3:any) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const totalSupply = await contract.methods.totalSupply().call();
      return totalSupply;
    } catch (error) {
      console.log("error in totalSupply func", error);
      return error;
    }
  }


  async maxSupply(web3:any) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const maxSupply = await contract.methods.MAX_SUPPLY().call();
      return maxSupply;
    } catch (error) {
      console.log("error in maxSupply func", error);
      return error;
    }
  }


  async phaseLimit(web3:any) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const phaseLimit = await contract.methods.phaseLimit().call();
      return phaseLimit;
    } catch (error) {
      console.log("error in phase limit func", error);
      return error;
    }
  }


  
  async mintFee(web3:any) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const fee = await contract.methods.mintFee().call();
      return fee;
    } catch (error) {
      console.log("error in mint fee func", error);
      return error;
    }
  }


  async isPaused(web3:any) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const isPaused = await contract.methods.paused().call();
      return isPaused;
    } catch (error) {
      console.log("error in mint fee func", error);
      return error;
    }
  }



  //   <<<<--- WRITE FUNCTIONS ---->>>>

  async mint(web3: any, account: string,amount:Number) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const price = await this.mintFee(web3)
      const mint = await contract.methods.mint(account,amount).send({ from: account, value: Number(amount) * Number(price)});
      return mint;
    } catch (error) {
      console.log("error in mint func", error);
      return error;
    }
  }



  async setMintFee(web3: any, account: string,amount:Number) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const txn = await contract.methods.setMintFee(amount).send({ from: account });
      return txn;
    } catch (error) {
      console.log("error in set Mint fee func", error);
      return error;
    }
  }


  async setPhaseLimit(web3: any, account: string,amount:Number) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const txn = await contract.methods.setPhaseLimit(amount).send({ from: account });
      return txn;
    } catch (error) {
      console.log("error in setPhase limit func", error);
      return error;
    }
  }

  async pause(web3: any, account: string) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const txn = await contract.methods.pause().send({ from: account });
      return txn;
    } catch (error) {
      console.log("error in pause func", error);
      return error;
    }
  }


  async unpause(web3: any, account: string) {
    try {
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const txn = await contract.methods.unpause().send({ from: account });
      return txn;
    } catch (error) {
      console.log("error in pause func", error);
      return error;
    }
  }


  async renounceOwnership(web3:any,account :string) {
    try{
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const txn = await contract.methods.renounceOwnership().send({ from: account });
      return txn;
    }
    catch (error){
      console.log("error in renounce func", error);
      return error;
    }
  }

  
  async transferOwnership(web3:any,newOwner:string,account :string) {
    try{
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const txn = await contract.methods.transferOwnership(newOwner).send({ from: account });
      return txn;
    }
    catch (error){
      console.log("error in transfer owner func", error);
      return error;
    }
  }


  async withdraw(web3:any,to:string,account :string) {
    try{
      const contract = CommonUtility.contract(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
      const txn = await contract.methods.withdrawEth(to).send({ from: account });
      return txn;
    }
    catch (error){
      console.log("error in withdraw func", error);
      return error;
    }
  }
}


const BotanikService = new Botanik();
Object.freeze(BotanikService);
export {BotanikService};