import { Food } from "../models/food.model.js";
import { asyncHandler } from "./../utils/ayncHandler.js";

const foodListRegister = asyncHandler( async (req,res) => {
    const {title,price,veg,shopName} = req.body
    if ([title,price,veg,shopName].some((fields) => fields?.trim() === "")) {
        throw new Error("All fields are required")
    }
    
    const foodImgLocalPath = req.file?.path;
    
    console.log(foodImgLocalPath);
    
    if (!foodImgLocalPath) {
        throw new Error("Couldn't find food image")
    }

    const food = await Food.create({
        image:foodImgLocalPath,
        title,
        price,
        veg,
        shopName
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
    const foodList = await Food.find({})
    return res.status(200).json(foodList)
})

export {
    foodListRegister,
    getAllFoods
}