import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Services/publicApiService";

export const getActivity = createAsyncThunk("get/getActivity", async () => {
  const response = await Get("http://ongapi.alkemy.org/api//activities", null);
  return response.data.data;
});

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    activity = {
        id: "",
        name: "",
        description: "", 
    }
  },
  reducers: {},
  extraReducers: {
    [getActivity.fulfilled.type]: (state, action) => {
        state.activity = {
            id: 1, 
            name: 'Titulo de prueba', 
            description: 'Descripcion de prueba'
        }
    },
    [getActivity.rejected.type]: (state, action) => {
        state.activity = {
            id: 1, 
            name: 'Titulo de prueba', 
            description: 'Descripcion de prueba'
        }
    },
  },
});

export default activitySlice.reducer;