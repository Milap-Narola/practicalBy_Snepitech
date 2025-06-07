
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../config/Api";


export const getData = createAsyncThunk("/coins/markets/getData",
    async (_, { rejectWithValue }) => {
        try {
            const res = await Api.get('/coins/markets');
            return res.data.coins;
        } catch (error) {
            console.log(error);
            return rejectWithValue({ message: "Data Not Found", error });

        }
    })
export const getDataById = createAsyncThunk("/coins/markets/getDataById",
    async (id, { rejectWithValue }) => {
        try {
            const res = await Api.get(`/coins/markets/${id}`);
            return res.data.coins;
        } catch (error) {
            return rejectWithValue({ message: "Data Not Found", error });
        }
    })

const initialState = {
    coins: [],
    coin: {},
    status: "idle",
    error: null,
};

const cryptoSlice = createSlice({
    name: "coins",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })

            .addCase(getData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload?.message || "Failed to get data";
            })
            .addCase(getDataById.fulfilled, (state, action) => {
                state.coin = action.payload;
                state.status = "succeeded";
            })

    }
})

export default cryptoSlice.reducer;
