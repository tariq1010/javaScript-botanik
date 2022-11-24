const koaRouter = require('koa-router');

const { getAllNfts } = require('../controller/getAllNftsController')
const { getMintedNfts } = require('../controller/getMintedNftsController')
const { getNftByToken } = require('../controller/getNftByTokenController')
const { getRandomNft } = require('../controller/getRandomNftController')
const { getNftsLeft } = require('../controller/getRemainingNftsController')
const { nftMint } = require('../controller/mintRandomNftController')
const { generateToken } = require('../controller/generateToken')
const { validateToken } = require('../validators/validateToken')
const { saveSpotNfts } = require('../controller/saveSpotNft')
const { getNftForUnMint } = require('../controller/getNftForUnMintController')
const { nftUnMint } = require('../controller/unMintNftController')
const { getFee } = require('../controller/getFee')
const { getUpdatedCount } = require('../controller/nftCount')
const { getAll } = require('../controller/getAllNfts')
const { deleteNft } = require("../model/nftModel")
const { saveAddresses, checkAddress, generateMerkleRoot } = require('../controller/whitelistAddressesController')
const {updatePassword, updateUserName, createCredentials} = require('../controller/adminController')
const {addBlacklistToken} = require('../controller/blacklistController')
const { adminLogin,checkAuth} = require('../auth')

const { validate, validateWallet, validateTokenId } = require('../validators/nftValidator')


const router = new koaRouter()

router.put("/mint_nfts", validateToken, (ctx: any, next: any) => validate(ctx, next, ["count"]), nftMint)
router.put("/un_mint_nft", nftUnMint)
router.get("/all_nfts", getAllNfts);
router.post("/random_nft_for_mint", (ctx: any, next: any) => validate(ctx, next, ["number"]), validateToken, getRandomNft);
router.post("/nft_for_un_mint", (ctx: any, next: any) => validate(ctx, next, ["number"]), validateToken, getNftForUnMint);
router.get("/nfts_minted", getMintedNfts);
router.get("/nft_left", getNftsLeft);
router.get("/nft/:token_id", (ctx: any, next: any) => validateTokenId(ctx, next, ["token_id"]), getNftByToken);
router.post("/generate_token", validateWallet, generateToken)
router.get("/get_fee", getFee)
// router.get("/get_nftCount", nftCount)
router.get("/get_all", getAll)
router.post("/create", saveSpotNfts)
router.delete("/delete", deleteNft)
router.get("/updated-route", getUpdatedCount)
//addresses routes
router.get("/check-address", checkAddress)
router.post("/save-addresses",validateToken, saveAddresses)
router.post('/generate-merkle-root', validateToken, generateMerkleRoot)

//admin routes
router.post("/insert-credentials", createCredentials)
router.post("/login", (ctx: any, next: any) => validate(ctx, next, ["username", "password"]), adminLogin)
router.put("/update-password", validateToken, (ctx: any, next: any) => validate(ctx, next, ["new_password", "current_password"]), updatePassword)
router.put("/update-username", validateToken, (ctx: any, next: any) => validate(ctx, next, ["username"]), updateUserName)
router.get("/auth", validateToken, checkAuth)
router.post("/blacklist-token", validateToken, addBlacklistToken)

export { router }
