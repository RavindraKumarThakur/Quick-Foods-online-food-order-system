import { Router } from "express";
import { userRegister, loginUser, changePassword, logoutUser } from "../controllers/user.contoller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/register").post(userRegister)
router.route("/login").post(loginUser)
router.route("/changePassword").patch(changePassword)
router.route("/logout").post( verifyJWT, logoutUser );

export {router}