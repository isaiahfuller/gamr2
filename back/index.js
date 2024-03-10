import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
import SteamStrategy from "passport-steam";
import session from "express-session";
import ConnectMongoDBSession from "connect-mongodb-session";
import { authRoutes } from "./routes/auth.js";
import { getOwnedGames } from "./routes/getOwnedGames.js";
import { updateDatabase } from "./databaseUpdater.js";

// updateDatabase()
setInterval(updateDatabase, 8.64e7);

const MongoDBStore = ConnectMongoDBSession(session);

const store = new MongoDBStore({
  uri: "mongodb://127.0.0.1/gamr_v2",
  collection: "sessions",
});
store.on("error", (error) => console.log(error));
const app = express();
const router = express.Router();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    // cookie: { secure: true },
  })
);

passport.use(
  new SteamStrategy(
    {
      returnURL: "http://localhost:3001/steam/auth/return",
      realm: "http://localhost:3001/",
      apiKey: process.env.STEAM_API,
    },
    function (identifier, profile, done) {
      process.nextTick(function () {
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  )
);

app.use(router);
app.use(cors());
app.use(morgan("combined"));
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);
app.use(getOwnedGames);

app.listen(3001);
