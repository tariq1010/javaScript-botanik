import { createSlice } from "@reduxjs/toolkit";


export const unMintNftSlice = createSlice({
    name: "un mint Nft",
    initialState: {
        unMintedNft: null,
        unMintedloading: false,
        unMintedsuccess: false,
        unMintederror: false,
        unMintederrorMessage: ""
    },
    reducers: {

        unMintNftRequest: (state, action) => {

            return {
                ...state,
                unMintedloading: true,
                unMintedsuccess: false,
                unMintederror: false
            }

        },

        unMintNftRequestSuccess: (state, action) => {
            return {
                ...state,
                unMintedloading: false,
                unMintedNft: action.payload,
                unMintedsuccess: true
            }
        },

        unMintNftRequestFailure: (state, action) => {
            return {
                ...state,
                unMintedloading: false,
                unMintederror: true,
                unMintederrorMessage: action.payload
            }
        }
    }
});

export const { unMintNftRequest, unMintNftRequestSuccess,unMintNftRequestFailure } = unMintNftSlice.actions;
export const unMintReducer = unMintNftSlice.reducer;
