import express from "express";
import { getChangePassword, postChangePassword, getEditProfile, postEditProfile, userDetail } from "../controllers/userController";
import routes from "../routes";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

// Edit Profile
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

// Change Password
userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

// User Detail
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
