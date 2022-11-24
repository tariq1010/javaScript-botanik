const { allNfts } = require("../model/nftModel");

const getAllNfts = async (ctx: any) => {
    try {
        const nfts = await allNfts();

        if (!nfts) throw "Nfts not found";
        if (nfts.error) throw nfts.error

        ctx.body = {
            response: "success",
            status: 200,
            data: nfts
        }

    } catch (error) {
        console.error(error);
        ctx.body = {
            response: "failure",
            status: 401,
            error: error
        }
    }
};

module.exports = { getAllNfts };
