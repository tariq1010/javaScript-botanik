import { adminLogin } from "../auth";
const {
  deleteSectionEleven,
  editSectionEleven,
  getSectionEleven,
  saveSectionEleven,
  getByIdSectionEleven,
} = require("../controller/sectionElevenController");
const {
  editSectionEight,
  getSectionEight,
  saveSectionEight,
  deleteSectionEight,
} = require("../controller/sectionEightController");
const {
  editSectionSix,
  getSectionSix,
} = require("../controller/sectionSixController");
const {
  editSectionTen,
  getSectionTen,
} = require("../controller/sectionTenController");
const {
  editSectionNine,
  getSectionNine,
} = require("../controller/sectionNineController");

const {
  editSectionSeven,
  getSectionSeven,
} = require("../controller/sectionSevenController");
const {
  sectionFourSchema,
  sectionOneSchema,
} = require("../utils/validation/validation");
const {
  editSectionFive,
  getSectionFive,
} = require("../controller/sectionFiveController");
const {
  editSectionFour,
  getSectionFour,
} = require("../controller/sectionFourController");
const multer = require("@koa/multer");
const koaRouter = require("koa-router");
const bodyValidate = require("koa-joi-validate");
const {
  editSectionThree,
  getSectionThree,
} = require("../controller/sectionThreeController");
const {
  editSectionOne,
  getSectionOne,
} = require("../controller/sectionOneController");
const {
  editSectionTwo,
  getSectionTwo,
} = require("../controller/sectionTwoController");
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

const sectionFourValition = bodyValidate({ body: sectionFourSchema });
const {
  validate,
  validateWallet,
  validateTokenId,
} = require("../validators/nftValidator");
const path = require("path");
const router = new koaRouter();

const storage = multer.diskStorage({
  destination: process.env.FILE_UPLOAD_PATH,
  filename: function (ctx: any, file: any, cb: any) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

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
router.post("/login", adminLogin);
router.get("/get_fee", getFee);
// router.get("/get_nftCount", nftCount)
router.get("/get_all", getAll);
router.delete("/delete", deleteNft);
router.get("/updated-route", getUpdatedCount);
router.post("/upload-nft", uploadNFt);
router.get("/blacklist-token", addBlacklistToken);
// section 1

router.put("/edit-section-one/:id", validateToken, editSectionOne);
router.get("/get-section-one", getSectionOne);

// section 2
router.put(
  "/edit-section-two/:id",
  validateToken,
  // upload.single("section_two_image"),
  editSectionTwo
);
router.get("/get-section-two", getSectionTwo);

// section 3
router.put("/edit-section-three/:id", validateToken, editSectionThree);
router.get("/get-section-three", getSectionThree);

// section 4
router.put(
  "/edit-section-four/:id",
  validateToken,
  sectionFourValition,
  editSectionFour
);
router.get("/get-section-four", getSectionFour);

// section 5
router.put(
  "/edit-section-five/:id",
  validateToken,
  // upload.single("section_five_image"),
  editSectionFive
);
router.get("/get-section-five", getSectionFive);

// section 6
router.put("/edit-section-six/:id", validateToken, editSectionSix);
router.get("/get-section-six", getSectionSix);

// section 7
router.put(
  "/edit-section-seven/:id",

  validateToken,
  editSectionSeven
);
router.get("/get-section-seven", getSectionSeven);

// section 8
router.post("/save-section-eight", validateToken, saveSectionEight);
router.get("/get-section-eight", getSectionEight);
router.put("/edit-section-eight/:id", validateToken, editSectionEight);
router.delete("/delete-section-eight/:id", validateToken, deleteSectionEight);

// section 9
router.put("/edit-section-nine/:id", validateToken, editSectionNine);
router.get("/get-section-nine", getSectionNine);

// section 10
router.put("/edit-section-ten/:id", validateToken, editSectionTen);
router.get("/get-section-ten", getSectionTen);

// section 8
router.post(
  "/save-section-eleven",
  validateToken,
  upload.single("section_eleven_image"),
  saveSectionEleven
);
router.get("/get-section-eleven", getSectionEleven);
router.get("/get-section-eleven/:id", getByIdSectionEleven);
router.put("/edit-section-eleven/:id", validateToken, editSectionEleven);
router.delete("/delete-section-eleven/:id", validateToken, deleteSectionEleven);

export { router };
