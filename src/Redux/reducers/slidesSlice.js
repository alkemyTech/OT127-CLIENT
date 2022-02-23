import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearch, getSlidesData } from "../../Services/slidesApiService";

export const getSlides = createAsyncThunk("slides/getSlides", () => {
  return getSlidesData().then((res) => {
    return res.data.data;
  });
});

export const getSlidesSearch = createAsyncThunk(
  "slides/getSlidesSearch",
  (search) => {
    return getSearch(search).then((res) => {
      return res.data.data;
    });
  }
);

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
        status: "success",
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
    [getSlidesSearch.fulfilled]: (state, action) => {
      state.slides = {
        status: "search OK",
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
