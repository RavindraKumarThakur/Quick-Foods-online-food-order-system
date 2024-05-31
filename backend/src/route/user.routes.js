import { Router } from "express";
import { userRegister, loginUser, changePassword } from "../controllers/user.contoller.js";

const router = Router()

router.route("/register").post(userRegister)
router.route("/login").post(loginUser)
router.route("/changePassword").patch(changePassword)

export {router}