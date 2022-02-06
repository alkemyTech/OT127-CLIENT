import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSlidesData } from "../../Services/slidesApiService";

export const getSlides = createAsyncThunk("slides/getSlides", () => {
  return getSlidesData().then((res) => {
    return res.data.data;
  });
});

export const slidesSlice = createSlice({
  name: "slides",
  initialState: {
    slides: {
      status: "idle",
      data: [],
      error: {},
    },
  },
  reducers: {},
  extraReducers: {
    [getSlides.fulfilled]: (state, action) => {
      state.slides = {
        status: "idle",
        data: action.payload,
        error: {},
      };
    },
    [getSlides.rejected]: (state, action) => {
      state.slides = {
        status: "idle",
        data: [],
        error: action.payload,
      };
    },
  },
});

export default slidesSlice.reducer;
