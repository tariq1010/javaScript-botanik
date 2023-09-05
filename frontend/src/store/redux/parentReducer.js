import { combineReducers } from "redux";
import { web3Reducer } from "./slices/web3ConnectSlice";
import { getNftsReducer } from "./slices/getNftSlice";
import { mintNftReducer } from "./slices/mintNftSlice";
import { getTokenReducer } from "./slices/tokenSlice";
import { getRandomNftReducer } from "./slices/getRandomNftSlice";
import { getNftForUnMintReducer } from "./slices/getNftForUnMint";
import { unMintReducer } from "./slices/unMintNftSlice";
import { getFeeReducer } from "./slices/getFeeSlice";
import { addressesReducer } from "./slices/addressesSlice";
import { getNftReducer } from "./slices/getNftByTokenIdSlice";
import { modelReducer } from "./slices/helperSlices/modelSlice";
import { loginReducer } from "./slices/adminSlices/loginSlices";
import { checkAuthReducer } from "./slices/adminSlices/checkAuthSlice";
import { logoutReducer } from "./slices/adminSlices/logoutSlice";

const parentReducer = combineReducers({
  web3Connect: web3Reducer,
  model: modelReducer,
  getNfts: getNftsReducer,
  mintNft: mintNftReducer,
  getToken: getTokenReducer,
  getRandom: getRandomNftReducer,
  nftForUnMint: getNftForUnMintReducer,
  unMintNft: unMintReducer,
  getFee: getFeeReducer,
  addresses: addressesReducer,
  getNft: getNftReducer,
  login: loginReducer,
  auth: checkAuthReducer,
  logout: logoutReducer
});

export default parentReducer;
