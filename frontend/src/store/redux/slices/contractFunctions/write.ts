import EthContract from "web3-eth-contract";

export const transferOwnership = async (
  contract: EthContract.Contract,
  account: string,
  newOwner: string
) => {
  try {
    const result = await contract?.methods
      .transferOwnership(newOwner)
      .send({ from: account });
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const renounceOwnership = async (
  contract: EthContract.Contract,
  account: string
) => {
  try {
    const result = await contract?.methods
      .renounceOwnership()
      .send({ from: account });
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const withdrawEthWeb3 = async (
  contract: EthContract.Contract,
  account: string,
  amount: string
) => {
  try {
    const result = await contract?.methods
      .withdrawEth(amount)
      .send({ from: account });
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const pauseWeb3 = async (
  contract: EthContract.Contract,
  account: string
) => {
  try {
    const result = await contract?.methods.pause().send({ from: account });
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const unpauseWeb3 = async (
  contract: EthContract.Contract,
  account: string
) => {
  try {
    const result = await contract?.methods.unpause().send({ from: account });
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};


export const toggleWhitelistStatus = async (
  contract: EthContract.Contract,
  account: string
) => {
  try {
    const result = await contract?.methods.toggleWhitelistingStatus().send({ from: account });
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const setPhaseSupplyAndPrice = async (
  contract: EthContract.Contract,
  account: string,
  values: any
) => {
  try {
    const { newPrice, updatedSupply }:{newPrice: number, updatedSupply: number} = values
    const result = await contract?.methods.updatePriceAndSupply(newPrice, updatedSupply).send({ from: account });
    return result;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};
