import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password,10);
    next()
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User",userSchema);