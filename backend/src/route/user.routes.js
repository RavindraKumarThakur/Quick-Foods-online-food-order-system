import { Router } from "express";
import { userRegister, loginUser, changePassword, logoutUser } from "../controllers/user.contoller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const userRouter = Router()

userRouter.route("/register").post(userRegister)
userRouter.route("/login").post(loginUser)
userRouter.route("/changePassword").patch(changePassword)
userRouter.route("/logout").post( verifyJWT, logoutUser );

export {userRouter}