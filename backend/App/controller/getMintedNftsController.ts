const { mintedNfts } = require("../model/nftModel");

const getMintedNfts = async (ctx: any) => {
  try {
    const nftsMinted = await mintedNfts();

    if (!nftsMinted) throw "Nfts not found";
    if (nftsMinted.error) throw nftsMinted.error;

    ctx.body = nftsMinted;
  } catch (error) {
    console.error(error);
    ctx.body = { error: error };
  }
};

module.exports = { getMintedNfts };
