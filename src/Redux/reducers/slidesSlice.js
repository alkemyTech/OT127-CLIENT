import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSlidesData } from "../../Services/slidesApiService";

export const getSlides = createAsyncThunk("slides/getSlides", () => {
  getSlidesData().then((res) => res.data.data);
});

export const slidesSlice = createSlice({
  name: "slides",
  initialState: {
    slides: {
      status: "idle",
      data: {},
      error: {},
    },
  },
  reducers: {},
  extraReducers: {
    [getSlides.fulfilled.type]: (state, action) => {
      state.slides = {
        status: "idle",
        data: action.payload,
        error: {},
      };
    },
    [getSlides.rejected.type]: (state, action) => {
      state.slides = {
        status: "idle",
        data: {},
        error: action.payload,
      };
    },
  },
});
