import { all } from "redux-saga/effects"
import adminSaga from "./adminSaga"
import nftsSaga from "./nftsSaga"
import tokenSaga from "./tokenSaga"
import whitelistSaga from "./whitelistSaga"


export default function* rootSaga(): any {
    return yield all([
        nftsSaga,
        tokenSaga,
        whitelistSaga,
        adminSaga
    ])
}