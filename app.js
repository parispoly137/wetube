import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";

import "./passport";

const app = express();

app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
  return next();
});
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL })
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;