import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./appSlice"
import productReducer from "../redux/productSlice"
import cartReducer  from '../redux/cartSlice'

export const store = configureStore({
  reducer: {
    app:appReducer,
    product:productReducer,
    cart:cartReducer

  },
})