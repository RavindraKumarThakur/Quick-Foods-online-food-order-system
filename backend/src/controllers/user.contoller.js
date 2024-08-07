import { asyncHandler } from "../utils/ayncHandler.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const userRegister = asyncHandler(async (req, res) => {

    const {userName,email,password,address,pincode,fullName,gender,contact} = req.body

    // console.log("Email: ",email);
    // console.log(req);

    if(
        [userName,email,password,address,pincode,fullName,gender,contact].some((fields) => fields?.trim() === "")
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
        return res.status(404).json({
            status:404,
            message:"User already existed!!!"
        })
    }

    console.log(`${userName},${email},${password},${address},${pincode},${fullName},${contact}`);

    const user = await User.create({
        userName,
        email,
        password,
        address,
        fullName,
        pincode,
        gender,
        contact
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
    }

    const user = await User.findOne({email});

    if (!user) {
        return res
        .status(401)
        .json({
            status: 401,
            message: "User do not exist.",
            success: false
        })
    }

    const isValidPassword = await user.isPasswordCorrect(password);

    if(!isValidPassword){
        return res
        .status(200)
        .json({
            status: 200,
            message: "Password is wrong.",
            success: false
        })
    }

    const loggedInUser = await User.findById(user._id);
    console.log("User loggedIn")

    const accessToken = jwt.sign({
        _id : user._id,
        email,
        password
    },process.env.ACCESS_TOKEN_SECRET)

    console.log(accessToken)
    const action = {
        httpOnly: true,
        // secure: true,
    }

    return res.status(200)
    .cookie("accessToken",accessToken,action)
    .json({
        statusCode: 200,
        loggedInUser,
        message: "User is loggedIn",
        success: true,
        accessToken
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