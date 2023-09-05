import { all, takeLatest, put, takeEvery } from "redux-saga/effects";
import NFTService from "../../services/nftServices";
import {
  getMintedNftsRequest,
  getMintedNftsRequestFailure,
  getMintedNftsRequestSuccess,
  getRemainingNftRequest,
  getNftsRequestSuccess,
} from "../redux/slices/getNftSlice";
import {
  mintNftRequest,
  mintNftRequestFailure,
  mintNftRequestSuccess,
} from "../redux/slices/mintNftSlice";
import {
  getRandomNftRequest,
  getRandomNftRequestFailure,
  getRandomNftRequestSuccess,
} from "../redux/slices/getRandomNftSlice";
import {
  getNftsForUnMintRequest,
  getNftsForUnMintRequestFailure,
  getNftsForUnMintRequestSuccess,
} from "../redux/slices/getNftForUnMint";
import {
  unMintNftRequest,
  unMintNftRequestSuccess,
} from "../redux/slices/unMintNftSlice";
import {
  getFeeRequest,
  getFeeRequestSuccess,
  getFeeRequestFailure,
} from "../redux/slices/getFeeSlice";
import {
  getNftRequest,
  getNftRequestSuccess,
  getNftRequestFailure,
} from "../redux/slices/getNftByTokenIdSlice";

function* getMintedNftsSaga(action) {
  try {
    const mintedNftsRes = yield new NFTService().getMintedNfts(action.payload);
    console.log(mintedNftsRes, "response");
    if (!mintedNftsRes?.data?.error) {
      yield put(getMintedNftsRequestSuccess([...mintedNftsRes.data]));
    } else {
      yield put(getMintedNftsRequestFailure(mintedNftsRes.data.error));
    }
  } catch (err) {
    console.log(err);
  }
}

function* getRandomNftSaga(action) {
  try {
    const randomNftRes = yield new NFTService().getRandomNft(action.payload);
    if (!randomNftRes?.data?.error) {
      yield put(getRandomNftRequestSuccess([...randomNftRes.data]));
    } else {
      yield put(getRandomNftRequestFailure(randomNftRes.data.error.message));
    }
  } catch (err) {
    console.log(err);
  }
}

function* getNftForUnMintSaga(action) {
  try {
    const res = yield new NFTService().getNftForUnMint(action.payload);
    if (!res?.data?.error) {
      yield put(getNftsForUnMintRequestSuccess([...res.data]));
    } else {
      yield put(getNftsForUnMintRequestFailure(res.data.error));
    }
  } catch (err) {
    console.log(err);
  }
}

function* mintRandomNftSaga(action) {
  try {
    const mintNftRes = yield new NFTService().mintNft(action.payload);

    if (!mintNftRes?.data?.error) {
      yield put(mintNftRequestSuccess({ ...mintNftRes.data }));
    } else {
      yield put(mintNftRequestFailure(mintNftRes.data.error));
    }
  } catch (err) {
    console.log(err);
  }
}

function* unMintNftSaga(action) {
  try {
    const res = yield new NFTService().unMintNft(action.payload);

    if (!res?.data?.error) {
      yield put(unMintNftRequestSuccess({ ...res.data }));
    } else {
      yield put(unMintNftRequestSuccess(res.data.error));
    }
  } catch (err) {
    console.log(err);
  }
}

function* getRemainingNftSaga() {
  try {
    const mintNftRes = yield new NFTService().getRemainigNfts();

    if (!mintNftRes?.data?.error) {
      yield put(getNftsRequestSuccess([...mintNftRes.data]));
    } else {
      yield put(getNftsRequestSuccess(mintNftRes.data.error));
    }
  } catch (err) {
    console.log(err);
  }
}

function* getNftSaga(action) {
  try {
    const res = yield new NFTService().getNftByTokenId(action.payload);

    if (!res?.data?.error) {
      const data = {
        ...res.data,
        token_id: action.payload,
      };
      yield put(getNftRequestSuccess(data));
    } else {
      yield put(getNftRequestFailure(res.data.error));
    }
  } catch (err) {
    console.log(err);
  }
}

function* getFeeSaga() {
  try {
    const getFeeRes = yield new NFTService().getFees();

    if (!getFeeRes?.data?.error) {
      yield put(getFeeRequestSuccess(getFeeRes.data));
    } else {
      yield put(getFeeRequestFailure(getFeeRes.data.error));
    }
  } catch (err) {
    console.log(err);
  }
}

export default all([
  takeLatest(getMintedNftsRequest.type, getMintedNftsSaga),
  takeLatest(mintNftRequest.type, mintRandomNftSaga),
  takeLatest(getRandomNftRequest.type, getRandomNftSaga),
  takeLatest(getRemainingNftRequest.type, getRemainingNftSaga),
  takeLatest(getNftsForUnMintRequest.type, getNftForUnMintSaga),
  takeLatest(unMintNftRequest.type, unMintNftSaga),
  takeLatest(getFeeRequest.type, getFeeSaga),
  takeEvery(getNftRequest.type, getNftSaga),
]);
