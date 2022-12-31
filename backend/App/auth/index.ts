
const jwt = require("jsonwebtoken")
const SHA256 = require('crypto-js/sha256');
const { AdminLogin } = require("../model/adminModel");





const adminLogin = async (ctx:any) => {
    try {
        const { accounts } = ctx.request.body
      const data = await AdminLogin(accounts);
      if(data.error) throw data.error;
  
                const token = jwt.sign({ id: accounts }, JSON.stringify(SHA256(process.env.ADMIN_TOKEN).words), { expiresIn: '1d' });
                      ctx.body = {
                          response: "success",
                          status: 200,
                          data: { token: token }
                      }
  
          ctx.body = {
            response: "success",
            data: { token: token },
          };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        response: "failure",
        error,
      };
    }
  };
const checkAuth = async (ctx: any) => {
    ctx.body = {
        response: "success",
        status: 200,
        auth: true
    }
}

export {
    adminLogin,
    checkAuth
}