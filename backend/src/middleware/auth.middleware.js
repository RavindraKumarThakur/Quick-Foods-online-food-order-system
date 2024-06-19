import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = async (req,res,next) => {
try {
        const token = req.body.accessToken
        if (!token) {
            throw console.log("Unauthorized request");
        }
    
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken?._id).select("-password")
    
        if (!user) {
            throw new Error("Unauthorized user");
        }
         req.user = user
        next()
} catch (error) {
    throw new Error( error?.message || "Unauthorized request" );
}
}