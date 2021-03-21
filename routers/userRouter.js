import express from "express";
import { changePassword, editProfile, userDetail } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

// Edit Profile
userRouter.get(routes.editProfile, editProfile);

// Change Password
userRouter.get(routes.changePassword, changePassword);

// User Detail
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
