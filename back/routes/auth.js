import express from "express";
// import SteamUser from "steam-user";
import passport from "passport";

export const authRoutes = express.Router();

authRoutes.get("/steam/auth/valid", (req, res) => {
  // console.log(req.session.passport.user);
  if (req.session.passport && req.session.passport.user) {
    res.send({ isAuthenticated: true, user: req.session.passport.user._json });
  } else res.send({ isAuthenticated: false });
});

authRoutes.get(
  "/steam/auth",
  passport.authenticate("steam", (_req, _res) => {})
);
authRoutes.delete("/steam/auth/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
authRoutes.get(
  "/steam/auth/return",
  passport.authenticate("steam", { failureRedirect: "/" }),
  (_req, res) => {
    res.redirect(`http://localhost:5173/`);
  }
);
