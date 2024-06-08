import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { foodListRegister } from "../controllers/food.controller.js";
import multer from "multer";

const foodRouter = Router()

// const upload = multer({dest:'./public/temp'})

foodRouter.route("/foodListRegister").post(
    upload.single('image'),
    foodListRegister
)

export {foodRouter}

