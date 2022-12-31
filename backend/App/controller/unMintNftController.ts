const { unMintNft } = require("../model/nftModel");
const conn = require("../../index");
const { nftCount } = require("./nftCount");
export {};
const nftUnMint = async (ctx: any) => {
  try {
    const obj = ctx.request.body;

    const nftsUnMinted = await unMintNft(obj);

    if (!nftsUnMinted) throw "Nfts not found";
    if (nftsUnMinted.error) throw nftsUnMinted.error;
    if (nftsUnMinted) {
      const count = await nftCount();
      conn.io.sockets.emit("nftCount", { count });
    }

    ctx.body = nftsUnMinted;
  } catch (error) {
    console.error(error);
    ctx.body = { error: error };
  }
};

module.exports = { nftUnMint };
