import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";  
import { activitiesController } from "../../Services/publicActivityService";

export const getActivities = createAsyncThunk("get/getActivities", async () => {
  const response = await activitiesController.getAll();
  return response.data.data;
});

export const activitiesSlice = createSlice({ 
  name: "activities", 
  initialState: { 
    activities: {
      status: "idle",
      data: [], 
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
