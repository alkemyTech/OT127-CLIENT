import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getActivities = createAsyncThunk("get/getActivities", async () => {
  const response = await axios.get(`${process.env.REACT_APP_ACTIVITIES_ENDPOINT}`)
  return response.data.data;
});

export const getActivitiesSearch = createAsyncThunk(
  "get/getActivitiesSearch",
  async (search) => {
    const response = await axios.get(`${process.env.REACT_APP_ACTIVITIES_ENDPOINT}?search=${search}`);
    return response.data.data;
  }
);

const initialState = {
  activities: [],
  status: "idle",
  error: null,
};

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {},
  extraReducers: {
   
    [getActivities.pending.type]: (state, action) => {
      state.status = "loading";
    },
    [getActivities.fulfilled.type]: (state, action) => {
      state.status = "succeeded";
      state.activities = action.payload;
    },
    [getActivities.rejected.type]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    
    [getActivitiesSearch.pending.type]: (state, action) => {
      state.status = "loading";
    },
    [getActivitiesSearch.fulfilled.type]: (state, action) => {
      state.status = "succeeded";
      state.activities = action.payload;
    },
    [getActivitiesSearch.rejected.type]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default activitiesSlice.reducer;
