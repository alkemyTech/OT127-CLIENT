import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Services/publicApiService";

export const getNews = createAsyncThunk("get/getNews", async () => {
  const response = await Get("http://ongapi.alkemy.org/api/news", null);
  return response.data;
});

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    status: 'idle',
    news: {},
    error: {}
  },
  reducers: {},
  extraReducers: {
    [getNews.pending.type]: (state, action) => {
        state.playerList = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [getNews.fulfilled.type]: (state, action) => {
        state.playerList = {
          status: "idle",
          data: action.payload,
          error: {},
        };
      },
      [getNews.rejected.type]: (state, action) => {
        state.playerList = {
          status: "idle",
          data: {},
          error: action.payload,
        };
      },
  }
});

export default newsSlice.reducer;
