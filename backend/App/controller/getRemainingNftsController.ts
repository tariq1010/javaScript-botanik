const { nftsLeft } = require("../model/nftModel");

const getNftsLeft = async (ctx: any) => {
  try {
    const nftsleft = await nftsLeft();

    if (!nftsleft) throw "Nfts not found";
    if (nftsleft.error) throw nftsleft.error;

    ctx.body = nftsleft;
  } catch (error) {
    console.error(error);
    ctx.body = { error: error };
  }
};

module.exports = { getNftsLeft };
