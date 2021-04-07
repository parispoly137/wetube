import express from "express";
import { getJoin, postJoin, getLogin, postLogin, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

// Join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

// Log in
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

// Home
globalRouter.get(routes.home, home);

// Search
globalRouter.get(routes.search, search);

// Log out
globalRouter.get(routes.logout, onlyPublic, logout);


export default globalRouter;