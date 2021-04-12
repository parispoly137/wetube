import express from "express";
import { changePassword, getEditProfile, userDetail } from "../controllers/userController";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

// Edit Profile
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);

// Change Password
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

// User Detail
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
