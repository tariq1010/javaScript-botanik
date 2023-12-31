const { contract } = require("../helpers/index");
const conn = require("../../index");
const { mintedNfts } = require("../model/nftModel");


const nftCount = async () => {
  try {
    let totalSupply = await contract.methods.totalSupply().call();
    // let mintLimit = await contract.methods.phaseLimit().call();
    const nftsMinted = await mintedNfts();
    // const phaseLimit= +(mintLimit - nftsMinted.length)
    // const phaseMintedCount= +(totalSupply - nftsMinted.length)
    const count = {
      totalSupply: +totalSupply,
      offChainCount: nftsMinted.length
    }
    return count;
  } catch (error) {
    console.error(error);
    return "error occured";
  }
};

const getUpdatedCount = async () => {
  const count = await nftCount();
  conn.io.sockets.emit("nftCount",  count );
};

export = { nftCount, getUpdatedCount };
