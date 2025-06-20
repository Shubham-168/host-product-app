import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProductsList = createAsyncThunk(
    "products/fetchProducts",
    async (thunkApi) => {
        try{
            const response = await axios.get('https://dummyjson.com/products')
            return response.data.products
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

const initialState = {
    productsList: [],
    loading: false,
    error: "",
}

const userSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductsList.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProductsList.fulfilled, (state, action) => {
            state.loading = false;
            state.productsList = action.payload;
        })
        .addCase(fetchProductsList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        
    }
})


export default userSlice.reducer