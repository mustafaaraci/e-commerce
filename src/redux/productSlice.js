import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    products:[],
    selectedProduct:{},
    loading:false,
    status:'idle'
}

export const URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts",async()=>{
   const  response = await axios.get(`${URL}/products`);
   return response.data;
})

// export const getProductDetailById = createAsyncThunk("getProductDetailById", async (id) => {
//     const response = await axios.get(`${URL}/products/${id}`);
//     return response.data;
// });

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setSelectedProduct: (state,action) =>{
            state.selectedProduct = action.payload;
        }

    },
    extraReducers:(builder) => {
        builder.addCase(getAllProducts.pending,(state)=>{
            state.status="loading"
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.products = action.payload;
            state.status ="succeeded"
            state.loading = false;
        })
        builder.addCase(getAllProducts.rejected, (state) => {
            state.status = "failed";
            state.loading = false;
        });

        //  builder.addCase(getProductDetailById.pending,(state)=>{
        //     state.status ="loading"
        //     state.loading=true;
        //  })
        // builder.addCase(getProductDetailById.fulfilled,(state)=>{
        //     state.selectedProduct =action.payload;
        //     state.status ="succeeded"
        //     state.loading =false;
        // })
        // builder.addCase(getProductDetailById.rejected, (state) => {
        //     state.status = "failed";
        //     state.loading = false;
        // });
        }

});

export const {setSelectedProduct} = productSlice.actions
export default productSlice.reducer
