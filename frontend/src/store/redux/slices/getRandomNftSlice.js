import { createSlice } from "@reduxjs/toolkit";


export const getRandomNftSlice = createSlice({
    name: "Get random Nfts",
    initialState: {
        nft: [],
        randomLoading: false,
        randomSuccess: false,
        randomError: false,
        randomErrorMessage: ""
    },
    reducers: {

        getRandomNftRequest: (state, action) => {
            return {
                ...state,
                randomLoading: true
            }
        },

        getRandomNftRequestSuccess: (state, action) => {
            return {
                ...state,
                randomLoading: false,
                nft: action.payload,
                randomSuccess: true
            }
        },
        getRandomNftRequestFailure: (state, action) => {
            return {
                ...state,
                randomLoading: false,
                randomError: true,
                randomErrorMessage: action.payload
            }
        }
    }
});

export const { getRandomNftRequest, getRandomNftRequestFailure, getRandomNftRequestSuccess } = getRandomNftSlice.actions;
export const getRandomNftReducer = getRandomNftSlice.reducer;
