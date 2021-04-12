import passport from "passport";
import GithubStrategy from "passport-github";  // 1) import
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";

passport.use(User.createStrategy());

passport.use(new GithubStrategy({   // 2)새로운 Strategy를 만든다.
  clientID: process.env.GH_ID,
  clientSecret: process.env.GH_SECRET,
  callbackURL: "http://localhost:4000/auth/github/callback"
}), githubLoginCallback);  // 4) 콜백 함수 추가

// 3) 함수 선언 ... 사용자가 깃헙에서 돌아왔을 때 실행되는 함수 -> userController에서 

// 5) 함수 선언 ... 깃헙으로 보내는 함수 -> userController에서 


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());