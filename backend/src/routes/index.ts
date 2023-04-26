import register from "./api/register";
import login from "./api/login";
import { Application } from "express";

export const addRoutes = (app: Application): void => {
  app.post("/login", login);
  app.post("/register", register);
};
