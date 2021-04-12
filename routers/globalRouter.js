import express from "express";
import passport from "passport";
import { getJoin, postJoin, getLogin, postLogin, logout, githubLogin, postGithubLogin, getMe } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";
import { onlyPublic, onlyPrivate } from "../middlewares";

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
globalRouter.get(routes.logout, onlyPrivate, logout);

// Github

globalRouter.get(routes.gitHub, githubLogin);


globalRouter.get(routes.githubCallback, passport.authenticate('github', { failureRedirect: '/login' }), postGithubLogin);

globalRouter.get(routes.me, getMe);


export default globalRouter;