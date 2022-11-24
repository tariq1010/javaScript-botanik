import { createSlice } from "@reduxjs/toolkit";


export const getTokenSlice = createSlice({
    name: "get token slice",
    initialState: {
        token: null,
        loading: false,
        success: false,
        error: false,
        errorMessage: false
    },
    reducers: {

        getTokenRequest: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },

        getTokenRequestSuccess: (state, action) => {
            return {
                ...state,
                loading: false,
                token: action.payload,
                success: true
            }
        },

        getTokenRequestFailure: (state, action) => {
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            }
        }
    }
});

export const { getTokenRequest, getTokenRequestFailure, getTokenRequestSuccess } = getTokenSlice.actions;
export const getTokenReducer = getTokenSlice.reducer;
