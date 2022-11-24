const { SaveNft } = require("../model/nftModel");
// const { nfts } = require("../data/10000")

const saveSpotNfts = async (ctx: any) => {
  try {
    // const obj = ctx.request.body;
    // const result = await SaveNft(obj)

    ctx.body = {
      response: "success",
      status: 200,
      data: "result",
    };
  } catch (error) {
    console.log("error", error);
    ctx.body = {
      response: "failure",
      status: 401,
      error: error,
    };
  }
};

module.exports = { saveSpotNfts };
