import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BotanikService } from "web3Functions/botanik";

export const initialState = {
  collapsed: null,
  modelOpen: null,
  botanikData: null,
  botanikLoader: false,
};

export const btkData = createAsyncThunk("btkData", async (web3, thunkAPI) => {
  try {
    const data = await BotanikService.getBTKData();
    console.log("DATA BTK", data);

    return data;
  } catch (error) {
    console.log("Error");
    return error;
  }
});
export const collapsedDashboard = createAsyncThunk(
  "collapsedDashboard",
  async (collapsed, thunkAPI) => {
    try {
      const result = collapsed;
      return result;
    } catch (error) {
      console.log("Error");
      return error;
    }
  }
);

export const mainModel = createAsyncThunk(
  "connectModel",
  async (modelOpen, thunkAPI) => {
    try {
      const result = modelOpen;
      return result;
    } catch (error) {
      console.log("Error");
      return error;
    }
  }
);

const modelSlice = createSlice({
  name: "ModalSlide",
  initialState,
  reducers: {
    bootanikDataLoading: (state, { payload }) => {
      state.botanikLoader = payload;
    },
    resetBotanikData: (state) => {
      state.botanikData = null;
      state.botanikLoader = false;
    },
  },
  extraReducers: {
    [collapsedDashboard.fulfilled.toString()]: (state, { payload }) => {
      state.collapsed = payload;
    },
    [mainModel.fulfilled.toString()]: (state, { payload }) => {
      state.modelOpen = payload;
    },
    [btkData.fulfilled.toString()]: (state, { payload }) => {
      state.botanikData = payload;
    },
  },
});
export const { bootanikDataLoading, resetBotanikData } = modelSlice.actions;

export const modelReducer = modelSlice.reducer;
