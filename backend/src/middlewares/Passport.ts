import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/User";

passport.use(
  new LocalStrategy(
    {
      usernameField: "loginId",
      passwordField: "password",
    },
    async (loginId, password, done) => {
      try {
        const user = await User.findOne({ where: { loginId } });

        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.loginId);
});

passport.deserializeUser(async (loginId: string, done) => {
  try {
    const user = await User.findOne({ where: { loginId } });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
