const { createBlacklistToken } = require("../model/blacklistModel");
import * as jwt from "jsonwebtoken";
const SHA256 = require("crypto-js/sha256");

const addBlacklistToken = async (ctx: any) => {
  try {
    const theToken = ctx.request.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(
      theToken,
      JSON.stringify(SHA256(process.env.ADMIN_TOKEN).words)
    );
    const data = await createBlacklistToken(decoded, theToken);
    if (data.error) throw data.error;
    ctx.body = {
      response: "success",
      status: 200,
      data: data,
    };
  } catch (error) {
    console.log(error);
    ctx.body = {
      response: "failure",
      status: 505,
      error: error,
    };
  }
};

export { addBlacklistToken };
