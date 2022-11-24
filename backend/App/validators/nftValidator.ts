const validate = async (ctx: any, next: any, keys: Array<string>) => {
  try {
    keys.map((key) => {
      if (!ctx.request.body[key]) throw `${key} is required`;
    });
    return next();
  } catch (err) {
    return (ctx.body = { error: err });
  }
};

const validateTokenId = async (ctx: any, next: any, keys: Array<string>) => {
  try {
    keys.map((key) => {
      if (!ctx.request.params[key]) throw `${key} is required`;
    });
    return next();
  } catch (err) {
    return (ctx.body = { error: err });
  }
};

const validateWallet = async (ctx: any, next: any) => {
  try {
    if (!ctx.request.body.accounts) throw "account id is required";
    return next();
  } catch (err) {
    ctx.body = { error: err };
  }
};

export { validate, validateWallet, validateTokenId };
