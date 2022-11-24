import { createSlice } from "@reduxjs/toolkit";


export const logoutSlice = createSlice({
    name: "logout user",
    initialState: {
        loading: false,
        error: false,
        errorMessage: null,
        result: null
    },
    reducers: {

        logoutRequest: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },
        logoutRequestSuccess: (state, action) => {
           
            return {
                ...state,
                loading: false,
                result: action.payload.data
            }
        },
        logoutRequestFailure: (state, action) => {
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            }
        },
        resetLogout: (state) => {
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: null,
                result: null
            }
        }
    }
});

export const { logoutRequest, logoutRequestFailure, logoutRequestSuccess, resetLogout} = logoutSlice.actions;
export const logoutReducer = logoutSlice.reducer;
