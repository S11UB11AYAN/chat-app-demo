import express from "express";
import { signup, login, logout, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { authUser } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post(
    "/signup",
    [
        body("email").isEmail().withMessage("Invalid Email"),
        body("fullname")
            .isLength({ min: 3 })
            .withMessage("Fullname must be at least 3 characters long"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long"),
    ],
    signup,
);

router.post(
    "/login",
    [
        body("email").isEmail(),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long"),
    ],
    login,
);

router.get("/logout", logout);

router.put("/update-profile", authUser, updateProfile);
router.get("/check", authUser, checkAuth)

export default router;
