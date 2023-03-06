import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTurfs } from "../../../api/vm/turfApi";

export const turfs = createAsyncThunk(
    'vm/turfs', async (_,thunkAPI) => {
        try {
            return getTurfs()
        } catch (error) {
            console.log(error);
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
) 