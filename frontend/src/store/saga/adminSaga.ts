import { all, takeLatest, put } from "redux-saga/effects"
import AdminService from "services/adminService"
import { checkAuthRequest, checkAuthRequestFailure, checkAuthRequestSuccess, resetcheckAuth } from "store/redux/slices/adminSlices/checkAuthSlice";
import { loginRequest, loginRequestFailure, loginRequestSuccess } from "store/redux/slices/adminSlices/loginSlices";
import { logoutRequest, logoutRequestFailure, logoutRequestSuccess } from "store/redux/slices/adminSlices/logoutSlice";

 
function* loginSaga(action: any): any {
    try {
      
        const loginRes = yield new AdminService().login(action.payload)

        if (!loginRes?.data?.error) {
            localStorage.setItem("access_token", loginRes.data.data.token);
            yield put(loginRequestSuccess(loginRes.data))
        } else {
            yield put(loginRequestFailure(loginRes.data))
        }
    }
    catch (err) {
        console.log(err)
    }
}

function* logoutSaga(action: any): any {
    try {
     
        const logoutRes = yield new AdminService().logout(action.payload)
     
        if (!logoutRes?.data?.error) {
            localStorage.removeItem('access_token')
            yield put(resetcheckAuth())
            yield put(logoutRequestSuccess(logoutRes.data))
        } else {
            yield put(logoutRequestFailure(logoutRes.data))
        }
    }
    catch (err) {
        console.log(err)
    }
}
 
function* checkAuthSaga(action: any): any {
    try {
        const res = yield new AdminService().auth(action.payload)   
        if (!res?.data?.error) {
            yield put(checkAuthRequestSuccess(res.data))
        } else {
            yield put(checkAuthRequestFailure(res.data))
        }
    }
    catch (err) {
        console.log(err)
    }
}

export default all([
    takeLatest(loginRequest.type, loginSaga),
    takeLatest(checkAuthRequest.type, checkAuthSaga),
    takeLatest(logoutRequest.type, logoutSaga)
])

 