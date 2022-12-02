const { contract } = require("../helpers/index");

const getFee = async (ctx: any) => {
  try {
    // let nftFee = await contract.methods._mintingPrice().call();

    // nftFee = (nftFee / 10 ** 18).toFixed(4);
    ctx.body = 0;
  } catch (error) {
    console.error(error);
    ctx.body = { error: error };
  }
};

export = { getFee };
