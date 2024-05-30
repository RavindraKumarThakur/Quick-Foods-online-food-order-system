import { Router } from "express";
import { userRegister } from "../controllers/user.contoller.js";

const router = Router()

router.route("/register").post(userRegister)

export {router}