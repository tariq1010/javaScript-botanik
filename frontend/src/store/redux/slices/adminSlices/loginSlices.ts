import { createSlice } from "@reduxjs/toolkit";
import { BrowserUtility } from "utility/browserUtility";


export const loginSlice = createSlice({
    name: "login user",
    initialState: {
        token: BrowserUtility.get("token")?BrowserUtility.get("token"):null,
        token_temp:null,
        // credentials: {
        //     username: "",
        //     password: ""
        // },
        loading: false,
        error: false,
        errorMessage: null,
        result: null
    },
    reducers: {

        setCredentials: (state, action) => {
            return {
                ...state,
                credentials: { ...action.payload }
            }
        },
        loginRequest: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },
        loginRequestSuccess: (state, action) => {
         
            return {
                ...state,
                loading: false,
                token: action.payload,
                token_temp: action.payload
            }
        },
        loginRequestFailure: (state, action) => {
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            }
        },
        resetLogin: (state) => {
            return {
                ...state,
                 token:null,
                loading: false,
                error: false,
                errorMessage: null,
                result: null
            }
        }

    }
});

export const { loginRequest,resetLogin, loginRequestSuccess, loginRequestFailure, setCredentials } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
