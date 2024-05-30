import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number
    },
    fullName: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum: ['MALE','FEMALE','OTHERS'],
        default: 'MALE'
    }
});

export const User = mongoose.model("User",userSchema);