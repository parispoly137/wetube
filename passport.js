import dotenv from "dotenv";
import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";
import routes from "./routes";

dotenv.config();

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
  clientID: process.env.GH_ID,
  clientSecret: process.env.GH_SECRET,
  callbackURL: `http://localhost:4000${routes.githubCallback}`
}, githubLoginCallback));


passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});