import { all, takeLatest, put } from "redux-saga/effects"
import NFTService from "../../services/nftServices"
import { getTokenRequest, getTokenRequestFailure, getTokenRequestSuccess } from "../redux/slices/tokenSlice"



function* getTokenSaga(action: any): any {
    try {
        const tokenRes: any = yield new NFTService().generateToken(action.payload)
       
        localStorage.setItem("user_token", tokenRes.data?.token);
        if (!tokenRes?.data?.error) {
          
            yield put(getTokenRequestSuccess({...tokenRes.data}))
        } else {
        
            yield put(getTokenRequestFailure(tokenRes.data.error))
        }
    }
    catch (err) {
        console.log(err)
    }

}


export default all([
    takeLatest(getTokenRequest.type, getTokenSaga),
])