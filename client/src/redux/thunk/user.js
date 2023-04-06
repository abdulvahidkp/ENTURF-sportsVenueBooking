import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const signin = createAsyncThunk(
  'user/signin',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post("/signin", userData)
      return data;
    } catch (error) {
      console.log(error?.response?.data);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
)

// async (data, thunkAPI) => {
//   try {
//     const { data: response } = await axios.post("/signin", data)

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//     return thunkAPI.rejectWithValue(error?.response?.data );
//   }
// }