import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./appSlice"
import productReducer from "./productSlice"

export const store = configureStore({
  reducer: {
    app:appReducer,
    product:productReducer

  },
})