import { Food } from "../models/food.model.js";
import { asyncHandler } from "./../utils/ayncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const foodListRegister = asyncHandler( async (req,res) => {
    const {title,price,veg,shopName,description,category} = req.body
    if ([title,price,veg,shopName,description,category].some((fields) => fields?.trim() === "")) {
        throw new Error("All fields are required")
    }
    
    const foodImgLocalPath = req.file?.path;
    
    if (!foodImgLocalPath) {
        throw new Error("Couldn't find food image")
    }

    const localPath = await uploadOnCloudinary(foodImgLocalPath)

    const food = await Food.create({
        image:localPath.url,
        title,
        price,
        veg,    
        shopName,
        description,
        category
    })

    if (!food) {
        throw new Error("Something went wrong while uploading the food list.");
    }

    return res
    .status(200)
    .json({
        staus:200,
        food,
        message: "Food list uploaded successfully"
    })
})

const getAllFoods = asyncHandler(async (req,res) => {
    const foodList = await Food.find({}).select("-createdAt -updatedAt")
    return res.status(200).json(foodList)
})

export {
    foodListRegister,
    getAllFoods
}