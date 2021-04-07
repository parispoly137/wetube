import passport from "passport";
import routes from "../routes";
import User from "../models/User";

// Join
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name, email
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
    // To Do: Log user in
  }

};

// Log in
export const getLogin = (req, res) => res.render("login", { pageTitle: "Log in" });

export const postLogin = (req, res) => {
  passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
  });     // local: 우리가 설치한 strategy 이름
};

// Log out
export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};

// User Detail
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });

// Edit Profile
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });

// Change Password
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });