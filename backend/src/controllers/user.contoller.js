import { asyncHandler } from "../../../../Backend/MainProject/src/utils/asyncHandler.js";
import { User } from "../models/user.model.js";

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

    await User.create({
        userName,
        email,
        password,
        address,
        fullName,
        pincode,
        gender
    })
})

export {userRegister}