const jwt = require("jsonwebtoken")
const SHA256 = require('crypto-js/sha256');
const { Admin } = require("../schema/adminSchema");
const { environment } = require("../../environment")
const {generateHashPass} =require('../utils/common')


const adminLogin = async (ctx: any) => {
    try {
        const { accounts } = ctx.request.body
        if (accounts != process.env.WALLET_ADDREES) {
            ctx.body = {
                response: "failure",
                status: 404,
                error: "user name not found"
            }
        }

        else {
                const token = jwt.sign({ id: accounts }, JSON.stringify(SHA256(process.env.ADMIN_TOKEN).words), { expiresIn: '1d' });
                ctx.body = {
                    response: "success",
                    status: 200,
                    data: { token: token }
                }
            
        }
    }
    catch (error) {
        ctx.body = {
            response: "failure",
            status: 505,
            error: error
        }
    }
}

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