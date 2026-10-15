import express, {Router} from "express";
import { getUser, loginUser, refreshToken, resetUserPassword, userForgotPassword, userRegistration, verifyUser, verifyUserForgotPassword } from "../controller/authController.js";
import isAuthenticated from "middleware";

const router:Router = express.Router()

router.post("/user-registration", userRegistration)
router.post("/verify-user", verifyUser)
router.post("/login", loginUser)
router.post("/refresh-user-token", refreshToken)
router.get("/logged-in-user", isAuthenticated, getUser)
router.post("/forgot-password-user", userForgotPassword)
router.post("/reset-password-user", resetUserPassword)
router.post("/verify-user-forgot-password", verifyUserForgotPassword)

export default router