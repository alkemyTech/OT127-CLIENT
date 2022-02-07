import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMembers } from "../../Services/membersService";

const initialState = {
  members: [],
  loading: false,
  status: null,
};

export const fetchMembers = createAsyncThunk(
  "members/fetchMembers",
  async () => {
    const response = await getMembers();
    return response.data.data;
  }
);

const membersSlice = createSlice({
  name: "members",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "success";
        // agrega todos los miembros obtenidos al array
        state.members = action.payload;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default membersSlice.reducer;
