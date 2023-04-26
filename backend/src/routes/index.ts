import register from "./api/register";
import login from "./api/login";
import { Application } from "express";
import passport from "../middlewares/Passport";

export const addRoutes = (app: Application): void => {
  app.post("/login", passport.authenticate("local", { failureMessage: "auth error" }), login);
  app.post("/register", register);
};
