import { createSlice } from "@reduxjs/toolkit";


export const getNftForUnMintSlice = createSlice({
    name: "Get nft for un mit",
    initialState: {
        nftsForUnMint: [],
        nftsForUnMintLoading: false,
        nftsForUnMintSuccess: false,
        nftsForUnMintError: false,
        nftsForUnMintErrorMessage: ""
    },
    reducers: {

        getNftsForUnMintRequest: (state, action) => {
            return {
                ...state,
                nftsForUnMintLoading: true
            }
        },

        getNftsForUnMintRequestSuccess: (state, action) => {
            return {
                ...state,
                nftsForUnMintLoading: false,
                nftsForUnMint: action.payload,
                nftsForUnMintSuccess: true
            }
        },
        getNftsForUnMintRequestFailure: (state, action) => {
            return {
                ...state,
                nftsForUnMintLoading: false,
                nftsForUnMintError: true,
                nftsForUnMintErrorMessage: action.payload
            }
        }
    }
});

export const { getNftsForUnMintRequest, getNftsForUnMintRequestFailure, getNftsForUnMintRequestSuccess } = getNftForUnMintSlice.actions;
export const getNftForUnMintReducer = getNftForUnMintSlice.reducer;
