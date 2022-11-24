const { fetchAllNfts, nftByImage, updateNftImageById } = require('../model/nftModel')
const getAll = async (ctx: any) => {
    try {
        let result = await fetchAllNfts()
        let imgLength = [];
        let imgLink = [];

        // for (let i = 0; i < nftFee.length; i++) {
        //     let img = nftFee[i].image
        //     if (img.length != 23) {
        //         imgLength.push(img.length);
        //         imgLink.push(img);

        //     }
        // }
        // // console.log("imgLength",imgLength)
        // let tokenIdA = imgLength.sort(function(a:any, b:any) {
        //     return a - b;
        //   });
        // var input = [1, 2, 3, 1, 3, 1];

        // var duplicates = input.reduce(function(acc:any, el, i, arr) {
        //   if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
        // }, []);

        // let findDuplicates = (arr: any) => arr.filter((item: any, index: any) => arr.indexOf(item) != index)
        // var duplicates = findDuplicates(imgLink);
        // console.log("duplicates",duplicates)
        // let imgDataArr = []
        // for (let i = 0; i < duplicates.length; i++) {
        //     let imgNftData = await nftByImage(duplicates[i])
        //     imgDataArr.push(imgNftData)
        // }

        // console.log("imgDataArr",imgDataArr[0])
        // for (let l = 0; l < imgDataArr.length; l++) {
        //     let ind = imgDataArr[l]
        //     for (let p = 0; p < ind.length; p++) {
        //         let id = ind[p]._id
        //         let edition = ind[p].edition
        //         // console.log("id",id,"edition",edition)
        //         let im = `https://illowls.mypinata.cloud/ipfs/QmQwgcmYp1EB33ZhT5pdKjprrJ1rBgSdy6Q2ss5z9hUJh6/${edition}.png`
        //         let s = await updateNftImageById(id, im)
        //     }
        // }
        ctx.body = {
            response: "success",
            status: 200,
            data: result
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

module.exports = { getAll };
