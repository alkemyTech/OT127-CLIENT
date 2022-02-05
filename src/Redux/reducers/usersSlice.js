import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Services/publicApiService";

export const getUsers = createAsyncThunk("get/getUsers", async () => {
    const response = await Get("http://ongapi.alkemy.org/api/testimonials");
    return response.data.data;
})

const initialState = {
    users: [],
    status: 'idle',
    error: null
}
// el "status" puede ser "idle", "loading", "succeded", "failed", nos sirve para el userfeedback
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [getUsers.pending.type]: (state, action) => {

        },
        [getUsers.fulfilled.type]: (state, action) => {

        },
        [getUsers.rejected.type]: (state, action) => {

        },
    },
});