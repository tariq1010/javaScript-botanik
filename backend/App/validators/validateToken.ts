import * as jwt from 'jsonwebtoken';
const { environment } = require('../../environment')
const SHA256 = require('crypto-js/sha256');
const { getToken } = require('../model/blacklistModel')

export const validateToken = async (ctx: any, next: any) => {
   
    if (
        !ctx.request.headers.authorization ||
        !ctx.request.headers.authorization.startsWith('Bearer') ||
        !ctx.request.headers.authorization.split(' ')[1]
    ) {
        ctx.body = {
            response: "failure",
            status: 401,
            error: "please login"
        }
    }
    else {
        const theToken = ctx.request.headers.authorization.split(' ')[1];
        const check = await getToken(theToken)

        if (check.length > 0) {
        
            ctx.body = {
                response: "failure",
                status: 401,
                error: "unathorized attempt"
            }
        }
        else {
            return jwt.verify(theToken, JSON.stringify(SHA256(environment.ADMIN_TOKEN).words), (err: any, decoded: any) => {
                if (decoded) {
                    return next();
                }
                if (err) {
                    ctx.body = {
                        response: "failure",
                        status: 401,
                        error: "unathorized attempt"
                    }
                }
            });
        }

    }
}
