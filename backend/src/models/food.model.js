import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    veg: {
        type:Boolean,
    },
    shopName: {
        type: String
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true})

export const Food = mongoose.model("Food",foodSchema);