const { nftByToken } = require("../model/nftModel");

const getNftByToken = async (ctx: any) => {
  try {
    console.log("token_id", ctx);
    const { token_id } = ctx.request.params;

    const uniqueNft = await nftByToken(token_id);
    console.log("uniqueNft", uniqueNft);
    if (!uniqueNft) throw "Random Nft not found";
    if (uniqueNft.error) throw uniqueNft.error;
    let obj = {
      name: `${uniqueNft.name} #${token_id}`,
      image: uniqueNft.image,
      description: uniqueNft.description,
      dna: uniqueNft.dna,
      edition: uniqueNft.edition,
      date: uniqueNft.date,
      attributes: uniqueNft.attributes,
      token_id: uniqueNft.token_id,
      is_minted: uniqueNft.is_minted,
    };
    ctx.body = obj;
  } catch (error) {
    console.error(error);
    let obj = {
      name: "Nft will be revealed soon",
      imaeg:
        "https://gateway.pinata.cloud/ipfs/QmRavPHS6ufNaXb1kbEeLuEnvZcAvmuvNt2nccAeVExFa1",
      description: "The ultimate web3 worrior",
    };
    ctx.body = obj;
  }
};

module.exports = { getNftByToken };
