import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    orders: []
}

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers:{
        addOrders: (state,action) => {
            const order = {
                id: nanoid(),
                name: action.payload
            }
            state.orders.push(order)
        },
        removeOrders: (state,action) => {
            state.orders = state.orders.filter((order) => order.id !== action.payload)
        }
    }
})

export const {addOrders, removeOrders} = orderSlice.actions

export default orderSlice.reducer