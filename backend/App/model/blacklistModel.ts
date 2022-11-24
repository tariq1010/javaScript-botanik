const { BlacklistTokens } = require("../schema/blacklistToken");


const createBlacklistToken = async (obj: any, token: string) => {
    try {
        const data = await BlacklistTokens.create({
            user_id: obj.id,
            iat: obj.iat,
            exp: obj.exp,
            token: token,
        })

        if (!data) throw "not inserted"
        return data
    }
    catch (error) {
        return { 'error': error }
    }
}

const getToken = async (token: any) => {
    try {
        const result = await BlacklistTokens.find({
            $and: [
                { token: token },
            ],
        });

        return result
    }
    catch (error) {
        return { "error": error }
    }

}


export {
    createBlacklistToken,
    getToken
}