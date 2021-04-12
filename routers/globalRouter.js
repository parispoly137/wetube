import express from "express";
import passport from "passport";
import { getJoin, postJoin, getLogin, postLogin, logout, githubLogin, postGithubLogin } from "../controllers/userController";
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

// 사용자를 인증 페이지에 보냄

globalRouter.get(routes.githubCallback, passport.authenticate('github', { failureRedirect: '/login' }), postGithubLogin);

// 사용자 인증이 잘 되어서 정보도 전달받을 때 

export default globalRouter;