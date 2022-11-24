const { nftForUnMint } = require("../model/nftModel");

const getNftForUnMint = async (ctx: any) => {
  try {
    const { number } = ctx.request.body;
    const nft = await nftForUnMint(number);

    if (!nft) throw "Random Nft not found";
    if (nft.error) throw nft.error;

    ctx.body = nft;
  } catch (error) {
    console.error(error);
    ctx.body = { error: error };
  }
};

module.exports = { getNftForUnMint };
