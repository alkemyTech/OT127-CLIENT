import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Services/publicApiService";

export const getUs = createAsyncThunk("get/getUs", async () => {
	const response = await Get("http://ongapi.alkemy.org/api/organization");
	return response.data.data;
})

const initialState = {
	info: [],
	status: "idle",
	error: null
}

const usSlice = createSlice({
	name: "getUs",
	initialState,
	reducers: {},
	extraReducers: {
		[ getUs.pending.type ]: (state, action) => {
			state.status = "loading"
		},
		[ getUs.fulfilled.type ]: (state, action) => {
			state.status = "succeeded"
			state.info = action.payload
		},
		[ getUs.rejected.type ]: (state, action) => {
			state.status = "failed"
			state.error = action.payload
		},
	},
})

export default usSlice.reducer