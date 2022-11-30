const koaRouter = require("koa-router");

const { getAllNfts } = require("../controller/getAllNftsController");
const { getMintedNfts } = require("../controller/getMintedNftsController");
const { getNftByToken } = require("../controller/getNftByTokenController");
const { getRandomNft } = require("../controller/getRandomNftController");
const { getNftsLeft } = require("../controller/getRemainingNftsController");
const { nftMint } = require("../controller/mintRandomNftController");
const { generateToken } = require("../controller/generateToken");
const { validateToken } = require("../validators/validateToken");
const { getNftForUnMint } = require("../controller/getNftForUnMintController");
const { nftUnMint } = require("../controller/unMintNftController");
const { getFee } = require("../controller/getFee");
const { getUpdatedCount } = require("../controller/nftCount");
const { getAll } = require("../controller/getAllNfts");
const { deleteNft } = require("../model/nftModel");
const { addBlacklistToken } = require("../controller/blacklistController");
const { uploadNFt } = require("../controller/uploadNFtController");

const {
  validate,
  validateWallet,
  validateTokenId,
} = require("../validators/nftValidator");

const router = new koaRouter();

router.put(
  "/mint_nfts",
  validateToken,
  (ctx: any, next: any) => validate(ctx, next, ["count"]),
  nftMint
);
router.put("/un_mint_nft", nftUnMint);
router.get("/all_nfts", getAllNfts);
router.post(
  "/random_nft_for_mint",
  (ctx: any, next: any) => validate(ctx, next, ["number"]),
  validateToken,
  getRandomNft
);
router.post(
  "/nft_for_un_mint",
  (ctx: any, next: any) => validate(ctx, next, ["number"]),
  validateToken,
  getNftForUnMint
);
router.get("/nfts_minted", getMintedNfts);
router.get("/nft_left", getNftsLeft);
router.get(
  "/nft/:token_id",
  (ctx: any, next: any) => validateTokenId(ctx, next, ["token_id"]),
  getNftByToken
);
router.post("/generate_token", validateWallet, generateToken);
router.get("/get_fee", getFee);
// router.get("/get_nftCount", nftCount)
router.get("/get_all", getAll);
router.delete("/delete", deleteNft);
router.get("/updated-route", getUpdatedCount);
router.post("/upload-nft", uploadNFt);

export { router };
