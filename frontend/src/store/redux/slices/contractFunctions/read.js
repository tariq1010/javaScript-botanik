import EthContract from "web3-eth-contract";

export const mintStatusWeb3 = async (contract) => {
  try {
    const result = await contract?.methods.paused().call();
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const whitelistMintStatus = async (contract) => {
  try {
    const result = await contract?.methods._openForWhitelisted().call();
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const isMintingPaused = async (contract) => {
  try {
    const result = await contract?.methods.pause().call();
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const totalSupply = async (contract) => {
  try {
    const result = await contract?.methods.totalSupply().call();
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const mintLimit = async (contract) => {
  try {
    const result = await contract?.methods._mintingLimit().call();
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};
