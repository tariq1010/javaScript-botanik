const { uploadNftModel } = require("../model/uploadModel");

const uploadNFt = async (ctx: any, args: any) => {
  try {
    let data = ctx.request.body;

    const nfts = await uploadNftModel(data.data);

    ctx.body = nfts;
  } catch (error) {
    console.error(error);
    ctx.body = { error: error };
  }
};

export = { uploadNFt };
