import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    singleOrder: {}
}

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers:{
        addOrders: (state,action) => {
            const order = {
                id: nanoid(),
                title: action.payload.title,
                price: action.payload.price,
                quantity: action.payload.quantity,
                image: action.payload.image,
                description: action.payload.description
            }
            state.orders.push(order)
        },
        sendOrders: (state,action) => {
            state.singleOrder = action.payload
        },
        removeOrders: (state,action) => {
            state.orders = state.orders.filter((order) => order.id !== action.payload)
        }
    }
})

export const {addOrders, removeOrders, sendOrders} = orderSlice.actions

export default orderSlice.reducer