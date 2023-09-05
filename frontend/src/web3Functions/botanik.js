import { CONTRACT_ABI, CONTRACT_ADDRESS } from "contract";
import { CommonUtility } from "utility/common";
import Web3 from "web3";
import environment from "enviornment";

class Botanik {
  // <<<<--- READ FUNCTIONS --->>>>
  getBTKData = async () => {
    const web3 = new Web3(environment.rpc);
    try {
      if (web3) {
        let config = {
          name: null,
          symbol: null,
          owner: null,
          mintFee: null,
          isPaused: null,
          totalSupply: null,
          maxSupply: null,
        };

        config.name = await this.name(web3);
        config.symbol = await this.symbol(web3);
        config.owner = await this.owner(web3);
        config.mintFee = Number(await this.mintFee(web3));
        config.isPaused = await this.isPaused(web3);
        config.totalSupply = Number(await this.totalSupply(web3));
        config.maxSupply = Number(await this.maxSupply(web3));
        return config;
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  async name(web3) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const name = await contract.methods.name().call();
      return name;
    } catch (error) {
      console.log("Error in name func", error);
      return error;
    }
  }

  async owner(web3) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const owner = await contract.methods.owner().call();
      return owner;
    } catch (error) {
      console.log("Error in owners func", error);
      return error;
    }
  }

  async symbol(web3) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const symbol = await contract.methods.symbol().call();
      return symbol;
    } catch (error) {
      console.log("Error in symbol func", error);
      return error;
    }
  }

  async totalSupply(web3) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const totalSupply = await contract.methods.totalSupply().call();
      return totalSupply;
    } catch (error) {
      console.log("error in totalSupply func", error);
      return error;
    }
  }

  async maxSupply(web3) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const maxSupply = await contract.methods.MAX_SUPPLY().call();
      return maxSupply;
    } catch (error) {
      console.log("error in maxSupply func", error);
      return error;
    }
  }

  async mintFee(web3) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const fee = await contract.methods.mintFee().call();
      return fee;
    } catch (error) {
      console.log("error in mint fee func", error);
      return error;
    }
  }

  async isPaused(web3) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const isPaused = await contract.methods.paused().call();
      return isPaused;
    } catch (error) {
      console.log("error in mint fee func", error);
      return error;
    }
  }

  //   <<<<--- WRITE FUNCTIONS ---->>>>

  async mint(web3, account, amount) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const price = await this.mintFee(web3);
      const mint = await contract.methods
        .mint(account, amount)
        .send({ from: account, value: Number(amount) * Number(price) });
      return mint;
    } catch (error) {
      console.log("error in mint func", error);
      return error;
    }
  }

  async setMintFee(web3, account, amount) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const txn = await contract.methods
        .setMintFee(amount)
        .send({ from: account });
      return txn;
    } catch (error) {
      console.log("error in set Mint fee func", error);
      return error;
    }
  }

  async pause(web3, account) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const txn = await contract.methods.pause().send({ from: account });
      return txn;
    } catch (error) {
      console.log("error in pause func", error);
      return error;
    }
  }

  async unpause(web3, account) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const txn = await contract.methods.unpause().send({ from: account });
      return txn;
    } catch (error) {
      console.log("error in pause func", error);
      return error;
    }
  }

  async renounceOwnership(web3, account) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const txn = await contract.methods
        .renounceOwnership()
        .send({ from: account });
      return txn;
    } catch (error) {
      console.log("error in renounce func", error);
      return error;
    }
  }

  async transferOwnership(web3, newOwner, account) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const txn = await contract.methods
        .transferOwnership(newOwner)
        .send({ from: account });
      return txn;
    } catch (error) {
      console.log("error in transfer owner func", error);
      return error;
    }
  }

  async withdraw(web3, to, account) {
    try {
      const contract = CommonUtility.contract(
        web3,
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const txn = await contract.methods
        .withdrawEth(to)
        .send({ from: account });
      return txn;
    } catch (error) {
      console.log("error in withdraw func", error);
      return error;
    }
  }
}

const BotanikService = new Botanik();
Object.freeze(BotanikService);
export { BotanikService };
