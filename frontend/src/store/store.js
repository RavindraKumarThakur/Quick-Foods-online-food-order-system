import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/orders/orderSlice.js"

export const store = configureStore({
    reducer: orderReducer
})