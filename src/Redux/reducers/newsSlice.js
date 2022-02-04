import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Services/publicApiService";

export const getNews = createAsyncThunk("get/getNews", async () => {
  const response = await Get("http://ongapi.alkemy.org/api/news", null);
  return response.data;
});

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: {
      status: "idle",
      data: {},
      error: {},
    },
  },
  reducers: {},
  extraReducers: {
    [getNews.fulfilled.type]: (state, action) => {
      state.news = {
        status: "idle",
        data: action.payload,
        error: {},
      };
    },
    [getNews.rejected.type]: (state, action) => {
      state.news = {
        status: "idle",
        data: {},
        error: action.payload,
      };
    },
  },
});

export default newsSlice.reducer;
