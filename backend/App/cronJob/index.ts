const {
  mintedNfts,
  offChainMint,
  offChainUnMint,
} = require("../model/nftModel");
const { contract } = require("../helpers/index");
const { nftCount } = require("../controller/nftCount");
const conn = require("../../index");

const web3CronJob = async () => {
  try {
    let nftCountFromBlockchain = await contract.methods.totalSupply().call();

    let nftCountFromOffChain = await mintedNfts();
    nftCountFromOffChain = nftCountFromOffChain.length
    if (Number(nftCountFromBlockchain) > nftCountFromOffChain) {
      let difference = Number(nftCountFromBlockchain) - nftCountFromOffChain;
      const res = await offChainMint(difference);
      const count = await nftCount();
      conn.io.sockets.emit("nftCount", { count });

      console.log(
        "onchain count:",
        nftCountFromBlockchain,
        "offchain count:",
        nftCountFromOffChain,
        "updated res:",
        res,
        "minted:",
        count,
        "onChain"
      );
    } else if (Number(nftCountFromBlockchain) < nftCountFromOffChain) {
      let difference = nftCountFromOffChain - Number(nftCountFromBlockchain);
      const res = await offChainUnMint(difference);
      const count = await nftCount();
      conn.io.sockets.emit("nftCount", { count });

      console.log(
        "onchain count:",
        nftCountFromBlockchain,
        "offchain count:",
        nftCountFromOffChain,
        "updated res:",
        res,
        "minted:",
        count,
        "offchain"
      );
    } else
      console.log(
        "onchain count:",
        nftCountFromBlockchain,
        "offchain count:",
        nftCountFromOffChain,
        "equal"
      );
  } catch (error) {
    console.error(error);
    // ctx.body = { "error": error };
  }
};

export { web3CronJob };
