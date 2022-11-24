const { getRandomNftForMint } = require("../model/nftModel");

const getRandomNft = async (ctx: any) => {
  try {
    const { number } = ctx.request.body;
    const randomNft = await getRandomNftForMint(number);

    if (!randomNft) throw "Random Nft not found";
    if (randomNft.error) throw randomNft.error;

    ctx.body = randomNft;
  } catch (error) {
    console.error(error);
    ctx.body = { error: error };
  }
};

module.exports = { getRandomNft };
