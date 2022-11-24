const { mintNfts } = require("../model/nftModel");
const conn = require("../../index");
const { nftCount } = require("./nftCount");
export {};

const nftMint = async (ctx: any) => {
  try {
    const obj = ctx.request.body;

    const nftsMinted = await mintNfts(obj);

    if (!nftsMinted) throw "Nfts not found";
    if (nftsMinted.error) throw nftsMinted.error;
    if (nftsMinted) {
      const count = await nftCount();
      conn.io.sockets.emit("nftCount", { count });
    }
    ctx.body = nftsMinted;
  } catch (error) {
    console.error(error);
    ctx.body = { error: error };
  }
};

module.exports = { nftMint };
