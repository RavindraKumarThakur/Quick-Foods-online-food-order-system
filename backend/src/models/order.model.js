import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    orderId:{
        type: String,
        required:true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    quantity:{
        type:Number,
        required:true,
        default: 1
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true});

export const Order = mongoose.model("Order",orderSchema);