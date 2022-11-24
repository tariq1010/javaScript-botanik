import { createSlice } from "@reduxjs/toolkit";

export const addressesSlice = createSlice({
  name: "Get nft for un mit",
  initialState: {
    whiteList: new Array(),
    saveAddresses: {
      result: null,
      error: false,
      success: false,
      errorMessage: '',
      loading: false
    },
    getProof: {
      result: null,
      error: false,
      errorMessage: '',
      loading: false
    },
    getMerkleRoot: {
      result: null,
      error: false,
      errorMessage: '',
      loading: false
    }
  },
  reducers: {
    setAddresses: (state, action) => {
      let index = state.whiteList.findIndex(
        (el) => el == action.payload
      );

      if (index == -1)
        return {
          ...state,
          whiteList: [...state.whiteList, action.payload],
        };

    },
    removeAddresses: (state, action) => {
      return {
        ...state,
        whiteList: action.payload,
      };
    },
    saveAddressesRequest: (state, action) => {
      return {
        ...state,
        saveAddresses: {
          ...state.saveAddresses,
          loading: true
        }
      }
    },
    saveAddressesRequestSuccess: (state, action) => {
      return {
        ...state,
        saveAddresses: {
          ...state.saveAddresses,
          loading: false,
          result: action.payload.data,
          success: true,
        }
      }
    },
    saveAddressesRequestFailure: (state, action) => {
      return {
        ...state,
        saveAddresses: {
          ...state.saveAddresses,
          loading: false,
          error: true,
          success: true,
          errorMessage: action.payload
        }
      }
    },
    resetWhiteList: (state) => {
      return {
        ...state,
        saveAddresses: {
          result: null,
          error: false,
          success: false,
          errorMessage: '',
          loading: false
        }
      }
    },
    getProofRequest: (state, action) => {
      return {
        ...state,
        getProof: {
          ...state.getProof,
          loading: true,
        }
      }
    },
    getProofRequestSuccess: (state, action) => {
      return {
        ...state,
        getProof: {
          ...state.getProof,
          loading: false,
          result: action.payload.data,
        }
      }
    },
    getProofRequestFailure: (state, action) => {
      return {
        ...state,
        getProof: {
          ...state.getProof,
          loading: false,
          error: true,
          errorMessage: action.payload.error
        }
      }
    },
    getMerkleRootRequest: (state, action) => {
      return {
        ...state,
        getMerkleRoot: {
          ...state.getMerkleRoot,
          loading: true
        }
      }
    },
    getMerkleRootRequestSuccess: (state, action) => {
      return {
        ...state,
        getMerkleRoot: {
          ...state.getMerkleRoot,
          loading: false,
          result: action.payload.data,
        }
      }
    },
    getMerkleRootRequestFailure: (state, action) => {
      return {
        ...state,
        getMerkleRoot: {
          ...state.getMerkleRoot,
          loading: false,
          error: true,
          errorMessage: action.payload.error
        }
      }
    },
    resetGetMerkleRoot: (state) => {
      return {
        ...state,
        getMerkleRoot: {
          result: null,
          error: false,
          errorMessage: '',
          loading: false
        }
      }
    },
  }
});

export const { getMerkleRootRequest, getMerkleRootRequestFailure, getMerkleRootRequestSuccess, resetGetMerkleRoot, getProofRequest, getProofRequestFailure, getProofRequestSuccess, setAddresses,resetWhiteList, removeAddresses, saveAddressesRequest, saveAddressesRequestFailure, saveAddressesRequestSuccess} = addressesSlice.actions;
export const addressesReducer = addressesSlice.reducer;
