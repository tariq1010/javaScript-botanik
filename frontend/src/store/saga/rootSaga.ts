import { all } from "redux-saga/effects"
import adminSaga from "./adminSaga"
import nftsSaga from "./nftsSaga"
import tokenSaga from "./tokenSaga"


export default function* rootSaga(): any {
    return yield all([
        nftsSaga,
        tokenSaga,
        adminSaga
    ])
}