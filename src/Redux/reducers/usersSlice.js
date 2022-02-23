import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Services/publicApiService";
import { searchUser } from "../../Services/userService";

export const getUsers = createAsyncThunk("get/getUsers", async () => {
  const response = await Get("http://ongapi.alkemy.org/api/users");
  return response.data.data;
});

export const getUserSearchAndRole = createAsyncThunk("get/getUserSearchAndRole", async (values) => {
  const response = await Get(`http://ongapi.alkemy.org/api/users?search=${values.search}&role=${values.role}`);
  return response.data.data;
});

export const getUserSearch = createAsyncThunk(
  "get/getUserSearch",
  async (search) => {
    const response = await searchUser(search);
    return response.data.data;
  }
);

const initialState = {
  users: [],
  status: "idle", // el "status" puede ser "idle", "loading", "succeded", "failed", nos sirve para el userfeedback
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    // los siguientes bloques de codigo se ejecutaran segun el estado de la peticion "getUsers"
    [getUsers.pending.type]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled.type]: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    },
    [getUsers.rejected.type]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    // los siguientes bloques de codigo se ejecutaran segun el estado de la peticion "getUserSearch"
    [getUserSearch.pending.type]: (state, action) => {
      state.status = "loading";
    },
    [getUserSearch.fulfilled.type]: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    },
    [getUserSearch.rejected.type]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [getUserSearchAndRole.pending.type]: (state, action) => {
      state.status = "loading";
    },
    [getUserSearchAndRole.fulfilled.type]: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    },
    [getUserSearchAndRole.rejected.type]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
