import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Services/publicApiService";

export const getUsers = createAsyncThunk("get/getUsers", async () => {
    const response = await Get("http://ongapi.alkemy.org/api/testimonials");
    return response.data.data;
})

const initialState = {
    users: [],
    status: "idle", // el "status" puede ser "idle", "loading", "succeded", "failed", nos sirve para el userfeedback
    error: null
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        // los siguientes bloques de codigo se ejecutaran segun el estado de la peticion "getUsers"
        [getUsers.pending.type]: (state, action) => {
            state.status = "loading"
        },
        [getUsers.fulfilled.type]: (state, action) => {
            state.status = "succeeded"
            state.users = action.payload
        },
        [getUsers.rejected.type]: (state, action) => {
            state.status = "failed"
            state.error = action.payload
        },
    },
})

export default usersSlice.reducer