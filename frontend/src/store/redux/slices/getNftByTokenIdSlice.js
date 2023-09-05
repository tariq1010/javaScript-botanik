import { createSlice } from "@reduxjs/toolkit";


export const getNftSlice = createSlice({
    name: "Get nft for un mit",
    initialState: {
        nft: new Array(),
        loading: false,
        success: false,
        error: false,
        errorMessage: ""
    },
    reducers: {

        getNftRequest: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },

        getNftRequestSuccess: (state, action) => {
            
            return {
                ...state,
                loading: false,
                nft: [...state.nft, action.payload],
                success: true
            }
        },
        getNftRequestFailure: (state, action) => {
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            }
        },
        clearState: (state) => {
            return {
                ...state,
                nft: new Array(),
                loading: false,
                success: false,
                error: false,
                errorMessage: ""
            }
        }
    }
});

export const { getNftRequest,clearState, getNftRequestSuccess, getNftRequestFailure } = getNftSlice.actions;
export const getNftReducer = getNftSlice.reducer;
