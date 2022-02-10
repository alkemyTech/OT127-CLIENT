import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";  
import { Get } from "../../Services/publicApiService";

export const getActivities = createAsyncThunk("get/getActivities", async () => {
  const response = await Get("http://ongapi.alkemy.org/api/activities", null);
  return response.data.data;
});

export const activitiesSlice = createSlice({ 
  name: "activities", 
  initialState: { 
    activities: {
      status: "idle",
      data: {}, 
      error: {}, 
    },
  },
  reducers: {}, 
  extraReducers: { 
    [getActivities.fulfilled.type]: (state, action) => { 
      state.activities = { 
        status: "idle",
        data: action.payload,
        error: {},
      };
    },
    [getActivities.rejected.type]: (state, action) => {
      state.activities = {
        status: "idle",
        data: {},
        error: action.payload,
      };
    },
  },
});
export default activitiesSlice.reducer; 
