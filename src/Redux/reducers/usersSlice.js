import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Services/publicApiService";

export const getUsersData = createAsyncThunk("get/getUsers", async () => {
    const response = await Get("http://ongapi.alkemy.org/api/testimonials");
    return response.data.data;
})