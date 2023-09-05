import { createSlice } from "@reduxjs/toolkit";


export const mintNftSlice = createSlice({
    name: "Mint random Nfts",
    initialState: {
        mintedNft: null,
        mintLoading: false,
        success: false,
        error: false,
        count:null,
        errorMessage: "",
        transcation: false
    },
    reducers: {

        mintNftRequest: (state, action) => {

            return {
                ...state,
                mintLoading: true,
                success: false,
                error: false
            }

        },
        setCount: (state, action) => {

            return {
                ...state,
               count: action.payload
            }

        },

        setTransaction: (state) => {

            return {
                ...state,
                transcation: true
            }

        },

        mintNftRequestSuccess: (state, action) => {
            return {
                ...state,
                mintLoading: false,
                mintedNft: action.payload,
                success: true
            }
        },

        mintNftRequestFailure: (state, action) => {
            return {
                ...state,
                mintLoading: false,
                error: true,
                errorMessage: action.payload
            }
        },
        
    }
});

export const { mintNftRequest, mintNftRequestFailure,setCount, setTransaction, mintNftRequestSuccess } = mintNftSlice.actions;
export const mintNftReducer = mintNftSlice.reducer;
