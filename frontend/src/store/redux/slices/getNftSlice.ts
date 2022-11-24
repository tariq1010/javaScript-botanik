import { createSlice } from "@reduxjs/toolkit";


export const getNftsSlice = createSlice({
    name: "Get Nfts",
    initialState: {
        nfts: [],
        mintedNfts: [],
        mintedLoading: false,
        mintedError: false,
        mintedSuccess: false,
        mintedErrorMessage: "",
        loading: false,
        success: false,
        error: false,
        errorMessage: ""
    },
    reducers: {


        getRemainingNftRequest: (state) => {
            return {
                ...state,
                loading: true
            }
        },



        getMintedNftsRequest: (state, action) => {
            return {
                ...state,
                mintedLoading: true
            }
        },

        getMintedNftsRequestSuccess: (state, action) => {
            return {
                ...state,
                mintedLoading: false,
                mintedNfts: action.payload,
                mintedSuccess: true
            }
        },

        getMintedNftsRequestFailure: (state, action) => {
            return {
                ...state,
                mintedLoading: false,
                mintedError:false,
                mintedErrorMessage:action.payload
            }
        },


        getNftsRequestSuccess: (state, action) => {
            return {
                ...state,
                loading: false,
                nfts: action.payload,
                success: true
            }
        },
        getNftsRequestFailure: (state, action) => {
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            }
        }
    }
});

export const { getRemainingNftRequest, getMintedNftsRequestFailure,getMintedNftsRequestSuccess, getMintedNftsRequest, getNftsRequestSuccess, getNftsRequestFailure } = getNftsSlice.actions;
export const getNftsReducer = getNftsSlice.reducer;
