import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { BotanikService } from "web3Functions/botanik";
//const [botanikConfig, setBotanikConfig] = useState(null)
export const initialState = {
  collapsed: null,
  modelOpen: null,
  botanikData: null,
  botanikLoader: false,
};
export const btkData: any = createAsyncThunk(
  "btkData",
  async (web3: any, thunkAPI) => {
    try {
      const data = await BotanikService.getBTKData();
      console.log("DATA BTK", data);

      return data;
    } catch (error) {
      console.log("Error");
      return error;
    }
  }
);
export const collapsedDashboard: any = createAsyncThunk(
  "collapsedDashboard",
  async (collapsed: any, thunkAPI) => {
    try {
      const result = collapsed;
      return result;
    } catch (error) {
      console.log("Error");
      return error;
    }
  }
);

export const mainModel: any = createAsyncThunk(
  "connectModel",
  async (modelOpen: any, thunkAPI) => {
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
    },
  },
  extraReducers: {
    [collapsedDashboard.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction
    ) => {
      state.collapsed = payload;
    },
    [mainModel.fulfilled.toString()]: (state, { payload }: PayloadAction) => {
      state.modelOpen = payload;
    },
    [btkData.fulfilled.toString()]: (state, { payload }: PayloadAction) => {
      state.botanikData = payload;
    },
  },
});
export const { bootanikDataLoading, resetBotanikData } = modelSlice.actions;

export const modelReducer = modelSlice.reducer;
