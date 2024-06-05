import { asyncHandler } from "../../../../Backend/MainProject/src/utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const userRegister = asyncHandler(async (req, res) => {

    const {userName,email,password,address,pincode,fullName,gender} = req.body

    // console.log("Email: ",email);
    // console.log(req);

    if(
        [userName,email,password,address,pincode,fullName,gender].some((fields) => fields?.trim() === "")
    ){
        throw console.log("All fields are required");
    }else if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)) {
        throw console.log(`Please enter valid email address`);
    }else if(password.length <= 6 || password.length >= 15){
        throw console.log(`Password should be less than 15 characters or greater than 6 characters`);
    }
    
    const userExisted = await User.findOne({$or : [{email},{userName}]});

    // console.log(userExisted);

    if(userExisted){
        throw console.log(`User already existed`);
    }

    console.log(`${userName},${email},${password},${address},${pincode},${fullName}`);

    const user = await User.create({
        userName,
        email,
        password,
        address,
        fullName,
        pincode,
        gender
    })

    return res.status(200)
    .json({
        statusCode: 200,
        user,
        message: "Created user successsfully"
    })
})

const loginUser = asyncHandler(async (req,res) => {
    const { email, password } = req.body;

    if([email,password].some((fields) => fields?.trim() === "")){
        throw console.log("All fields are neccessary");
    }else if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)) {
        throw console.log(`Please enter valid email address`);
    }else if(password.length <= 6 || password.length >= 15){
        throw console.log(`Password should be less than 15 characters or greater than 6 characters`);
    }

    const user = await User.findOne({email});

    if (!user) {
        throw console.log("User do not exist");
    }

    const isValidPassword = await user.isPasswordCorrect(password);

    if(!isValidPassword){
        throw console.log("Password is incorrect")
    }

    const loggedInUser = await User.findById(user._id);
    console.log("User loggedIn")

    const accessToken = jwt.sign({
        userId : user._id,
        email,
        password,
        fullName
    },process.env.ACCESS_TOKEN_SECRET)

    const action = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .cookie("accessToken",accessToken,action)
    .json({
        statusCode: 200,
        loggedInUser,
        message: "User is loggedIn"
    })

})

const changePassword = asyncHandler( async (req, res) => {
    const {email, password} = req.body;

    if ([email, password].some((fields) => fields?.trim() === "")) {
        throw console.log("All fields are required")
    }else if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)) {
        throw console.log(`Please enter valid email address`);
    }else if(password.length <= 6 || password.length >= 15){
        throw console.log(`Password should be less than 15 characters or greater than 6 characters`);
    }
    
    const user = await User.findOne({email});

    if (!user) {
        throw console.log("User do not exist");
    }

    user.password = password
    const updatedUser = await user.save();
    console.log("Password successfully changed");

    return res.status(200).json({
        statusCode: 200,
        updatedUser,
        message: "Password successfully changed"
    })
})

const logoutUser = asyncHandler( async (req, res) => {
    const option = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .clearCookie("accessToken",option)
    .json( console.log("User successfully loggedOut") )
})

export {
    userRegister,
    loginUser,
    changePassword,
    logoutUser
}