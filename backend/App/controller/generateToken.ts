import * as jwt from "jsonwebtoken";
require("dotenv").config();

const generateToken = (ctx: any) => {
  const { accounts } = ctx.request.body;

  try {
    //move this in env
    const token = jwt.sign({ id: accounts }, "_secuRe@walLeton&apI2coNnect_4", {
      expiresIn: "1d",
    });

    ctx.body = {
      token: token,
    };
  } catch (err) {
    ctx.body = {
      error: err,
    };
  }
};

module.exports = {
  generateToken,
};
