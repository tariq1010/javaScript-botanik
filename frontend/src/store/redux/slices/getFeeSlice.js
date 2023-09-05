import { createSlice } from "@reduxjs/toolkit";


export const getFeeSlice = createSlice({
    name: "get token slice",
    initialState: {
        fee: 0,
        feeLoading: false,
        feeSuccess: false,
        feeError: false,
        feeErrorMessage: false
    },
    reducers: {

        getFeeRequest: (state) => {
            return {
                ...state,
                feeLoading: true
            }
        },
        getFeeRequestSuccess: (state, action) => {
            return {
                ...state,
                feeLoading: false,
                fee: action.payload,
                feeSuccess: true
            }
        },

        getFeeRequestFailure: (state, action) => {
            return {
                ...state,
                feeLoading: false,
                feeError: true,
                feeErrorMessage: action.payload
            }
        }
    }
});

export const { getFeeRequest, getFeeRequestSuccess, getFeeRequestFailure } = getFeeSlice.actions;
export const getFeeReducer = getFeeSlice.reducer;
