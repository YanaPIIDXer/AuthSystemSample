import Express from "express";
import CORS from "cors";
import { addRoutes } from "./routes";
import passport from "./middlewares/Passport";
import ExpressSession from "express-session";

const app = Express();
app.use(Express.json());
app.use(CORS());
app.use(ExpressSession({ resave: false, secret: "hoge" }));

app.use(passport.initialize());
app.use(passport.session());

addRoutes(app);

app.listen(3000, () => {
  console.info("Server is Running...");
});
